import { GetServerSideProps } from "next";
import Head from "next/head";
import initMiro from "../initMiro";

interface Board {
  id: string;
  name: string;
}

interface Props {
  boards: Board[];
  redirectTo?: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const { miro } = initMiro(req);

  // redirect to auth url if user has not authorized the app
  if (!(await miro.isAuthorized(""))) {
    return {
      props: {
        boards: [],
        redirectTo: miro.getAuthUrl(),
      },
    };
  }

  const api = miro.as("");

  try {
    const boards: Board[] = [];
    for await (const { id, name } of api.getAllBoards()) {
      boards.push({ id, name });
    }

    return {
      props: {
        boards,
      },
    };
  } catch (err) {
    return {
      props: {
        boards: [],
        redirectTo: miro.getAuthUrl(),
      },
    };
  }
};

export default function Main({ boards, redirectTo }: Props) {
  return (
    <div className="home-wrapper">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/mirotone@^4/dist/styles.css"
        />
      </Head>
      {redirectTo ? (
        <a className="button button-primary" href={redirectTo}>
          Connect to Miro
        </a>
      ) : null}

      <h3>Select a board to render as HTML:</h3>
      <hr />
      {boards.map((board) => {
        return (
          <div>
            <a className="link" href={`/${board.id}`}>
              {board.name}
            </a>
          </div>
        );
      })}
      <hr />

      <p>
        URLs in the app are in the following format: <br />
        <code>
          /{"{boardId}"}/{"{frameTitle}"}
        </code>
        .
      </p>
      <br />
      <p>
        Each frame on the board represents a different page. To see the specific
        frame use it's title in the URL. By default either a frame with a name{" "}
        <code>index</code> or the first created frame will be used.
      </p>
      <br />
      <p>
        You can use connectors to link items from one frame to items in another
        frame. This will create HTML links to the page containing the target
        item
      </p>
    </div>
  );
}
