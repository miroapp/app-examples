import React, { useEffect } from "react";
import initMiro from "../initMiro";
import { GetServerSideProps } from "next";
import { storage } from "utils/storage";
import { PAYMENT_STORAGE_KEY } from "pages/api/payment-handler";
import { PaidFeature } from "components/PaidFeature";
import { PaywallNotice } from "components/PaywallNotice";
import { GenerallyAvailableFeature } from "components/GenerallyAvailableFeature";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { userId, miro } = initMiro(req);

  const hasPaid = (await storage.get(userId))?.[PAYMENT_STORAGE_KEY] || null;

  // redirect to auth url if user has not authorized the app
  if (!(await miro.isAuthorized(userId))) {
    return {
      redirect: {
        destination: miro.getAuthUrl(),
        permanent: false,
      },
    };
  }

  return { props: { userId, hasPaid } };
};

export default function Page({
  userId,
  hasPaid,
}: {
  userId: string;
  hasPaid: boolean;
}) {
  useEffect(() => {
    window.miro.board.ui.on("icon:click", async () => {
      await miro.board.ui.openPanel({ url: "./" });
    });
  }, []);

  return (
    <div className="wrapper">
      <h1>Sticky placer</h1>
      <GenerallyAvailableFeature />
      <hr />
      {hasPaid ? <PaidFeature /> : <PaywallNotice userId={userId} />}
    </div>
  );
}
