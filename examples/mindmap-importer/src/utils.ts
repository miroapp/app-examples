import { csvParse } from "d3-dsv";

const readFile = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target) {
        reject("Failed to load file");
        return;
      }

      resolve(e.target.result as string);
    };
    reader.onerror = (e) => {
      reject("Failed to load file");
    };

    reader.onabort = (e) => {
      reject("Failed to load file");
    };
    reader.readAsText(file, "utf-8");
  });

export const parseCsv = async (file: File) => {
  const str = await readFile(file);
  return csvParse(str);
};
