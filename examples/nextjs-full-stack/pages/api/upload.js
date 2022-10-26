import initMiro from "../../initMiro";
import busboy from "busboy";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { miro, userId } = initMiro(req, res);
  const api = miro.as(userId);

  const buffer = await getFileFromRequest(req);

  const board = await api.getBoard(req.query.boardId);
  await board.createImageItem({
    data: {
      data: buffer,
    },
  });

  res.send("Image uploaded");
}

// read the first file from the request into a Buffer object
async function getFileFromRequest(req) {
  const formParser = busboy({ headers: req.headers });
  return await new Promise((res, rej) => {
    formParser.on("file", function (_fieldname, file) {
      const buf = [];
      file.on("data", function (data) {
        buf.push(data);
      });

      file.on("end", async function () {
        const buffer = Buffer.concat(buf);
        res(buffer);
      });

      file.on("error", rej);
    });
    formParser.on("error", rej);

    req.pipe(formParser);
  });
}
