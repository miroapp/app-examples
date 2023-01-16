import { GetServerSideProps } from "next";
import { FormEvent, useEffect, useState } from "react";
import initMiro from "../initMiro";

export const getServerSideProps: GetServerSideProps =
  async function getServerSideProps({ req }) {
    const { miro } = initMiro(req);

    // If the user doesn't authorize the app, redirect to auth URL
    if (!(await miro.isAuthorized(""))) {
      return {
        redirect: {
          destination: miro.getAuthUrl(),
          permanent: false,
        },
      };
    }

    const api = miro.as("");

    try {
      const { body } = await api._api.call(
        "GET",
        "v2-experimental/webhooks/subscriptions"
      );

      return {
        props: {
          webhooks: (body as any).data,
        },
      };
    } catch (err) {
      // on error assume auth problem, so re-auth
      return {
        redirect: {
          destination: miro.getAuthUrl(),
          permanent: false,
        },
      };
    }
  };

interface Webhook {
  id: string;
  data: {
    boardId: string;
  };
  callbackUrl: string;
  createdAt: string;
  modifiedAt: string;
  enabled: "enabled" | "disabled";
  type: string;
}

async function apiCall(method: string, url: string, data: unknown) {
  const res = await fetch(url, {
    method: method,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
  if (res.status !== 200) {
    const text = await res.text();
    try {
      throw new Error(JSON.parse(text));
    } catch (err) {
      throw new Error(text);
    }
  }

  try {
    return await res.json();
  } catch (err) {
    return;
  }
}

export default function Main({
  webhooks: initialWebhooks,
}: {
  webhooks: Webhook[];
}) {
  const [webhooks, setWebhooks] = useState(initialWebhooks);
  const [url, setUrl] = useState("");
  const [boardId, setBoardId] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | { error: string }>("");

  const boardWebhooks = webhooks.filter(
    (hook) => hook.data.boardId === boardId
  );

  const isPanel =
    typeof window === "undefined"
      ? true
      : new URLSearchParams(window.location.search).has("panel");

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.miro.board.getInfo().then(({ id }) => setBoardId(id));

    if (isPanel) return;

    const openPanel = () =>
      window.miro.board.ui.openPanel({
        url: `/?panel=1`,
      });

    window.miro.board.ui.on("icon:click", openPanel);
    return () => window.miro.board.ui.off("icon:click", openPanel);
  }, []);

  async function createWebhook(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    try {
      setWebhooks(
        webhooks.concat(await apiCall("POST", "/api/manage", { url, boardId }))
      );
    } catch (err: any) {
      let message = err.message;
      try {
        message = JSON.parse(err.message).error;
      } catch (err) {
        // error is not formated as expected
      }
      setErrorMsg(message);

      return console.log(err);
    }
    setUrl("");
  }

  async function deleteWebhook(idToDelete: string) {
    setErrorMsg("");

    try {
      await apiCall("DELETE", "/api/manage", { url: idToDelete });
    } catch (err: any) {
      setErrorMsg(err.message);
      return console.error(err);
    }

    setWebhooks(webhooks.filter(({ id }) => idToDelete !== id));
  }

  if (!isPanel) {
    return null;
  }

  return (
    <div className="grid wrapper">
      {boardWebhooks.length > 0 && (
        <div className="cs1 ce12">
          <small>Your subscriptions on the current boards:</small>
        </div>
      )}

      {boardWebhooks.map((hook) => {
        return (
          <>
            <div className="cs1 ce11" key={hook.id}>
              <input
                className="input input-small"
                type="text"
                value={hook.callbackUrl}
                title={hook.callbackUrl}
                disabled
              />
            </div>
            <div className="cs12 ce12" key={hook.id + "rm"}>
              <button
                type="button"
                className="cs1 ce12 button button-danger button-small"
                onClick={() => deleteWebhook(hook.id)}
              >
                <div className="icon icon-trash"></div>
              </button>
            </div>
          </>
        );
      })}

      <form
        className="cs1 ce12 form-example--main-content"
        onSubmit={createWebhook}
      >
        {boardWebhooks.length > 0 && <hr />}
        <div className="form-group form-group-small">
          <label htmlFor="webhook">Webhook callback URL</label>
          <input
            className="input input-small"
            type="text"
            id="webhook"
            placeholder="https://foo.bar/my/endpoint"
            value={url}
            onInput={(e) => setUrl((e.target as HTMLInputElement).value)}
          />
        </div>
        {errorMsg && (
          <p style={{ color: "var(--red800)" }}>
            <span className="icon icon-warning" />
            {typeof errorMsg === "string" ? errorMsg : errorMsg.error}
          </p>
        )}

        <button
          type="submit"
          className="cs1 ce12 button button-primary button-small"
        >
          Add webhook
        </button>
      </form>

      <div className="cs1 ce12">
        <hr />
        <p>
          Your endpoint must be an HTTPS URL with a valid SSL certificate that
          can correctly process event notifications.{" "}
        </p>
        <p>
          When adding a webhook you will receive an HTTP POST request with a
          challenge in the body of the callback URL that you provide.
        </p>
        <p>
          Your backend must respond to this request. The response your backend
          sends must contain the same challenge.
        </p>
        <p>Subscriptions are created per user, per board.</p>
        <p>
          For more information on the end-to-end webhook workflow and event
          samples, see the{" "}
          <a
            href="https://developers.miro.com/reference/webhooks-overview"
            target="_blank"
          >
            Webhook introduction
          </a>
          .
        </p>
      </div>
    </div>
  );
}
