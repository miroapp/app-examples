import { buffer } from "micro";
import { storage } from "../../utils/storage";
import { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";
import { ExternalUserId } from "@mirohq/miro-api";

export const PAYMENT_STORAGE_KEY = "paid-for-[miro-integration-name]";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});
const webhookSecret = process.env.STRIPE_WEBHOOK_ENDPOINT_SECRET as string;

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let stripeEvent;
    try {
      stripeEvent = stripe.webhooks.constructEvent(
        buf,
        sig || "",
        webhookSecret
      );
    } catch (err) {
      res
        .status(400)
        .send(`Webhook Error: ${err instanceof Error ? err.message : err}`);
      return;
    }

    if ("checkout.session.completed" === stripeEvent.type) {
      const session = stripeEvent.data.object;

      /* 🚨 IMPORTANT 🚨 */
      // You probably want to store this in your backend
      // made a simple file based storage for demo purposes
      await storage.set(
        (session as { client_reference_id: ExternalUserId })
          .client_reference_id,
        PAYMENT_STORAGE_KEY,
        "true"
      );
    }

    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
