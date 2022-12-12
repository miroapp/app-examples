import { GetServerSideProps } from "next";
import { FormEvent, useEffect, useState } from "react";
import initMiro from "../initMiro";

export const getServerSideProps: GetServerSideProps =
  async function getServerSideProps({ req }) {
    const { miro } = initMiro(req);

    // redirect to auth url if user has not authorized the app
    if (!(await miro.isAuthorized(""))) {
      return {
        redirect: {
          destination: miro.getAuthUrl(),
          permanent: false,
        },
      };
    }

    const api = miro.as("");

    const { body } = await api._api.call(
      "GET",
      "v2-experimental/webhooks/subscriptions"
    );

    return {
      props: {
        webhooks: (body as any).data,
      },
    };
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
  const [errorMsg, setErrorMsg] = useState("");

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
      setErrorMsg(err.message);
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
      {webhooks.map((hook) => {
        if (hook.data.boardId !== boardId) return null;

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
        {webhooks.length && <hr />}
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
            {errorMsg}
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
          Subscribe to a webhook using this UI. Your endpoint must be an HTTPS
          URL with a valid SSL certificate that can correctly process event
          notifications.{" "}
        </p>
        <p>
          When adding a webhook you will receive an HTTP POST request with a
          challenge in the body on the callback URL that you provide.
        </p>
        <p>
          You must respond to this request from your backend and ensure that you
          send the same challenge in the response.
        </p>
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
