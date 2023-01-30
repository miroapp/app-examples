import { ShapeItem } from "@mirohq/miro-api";

export interface Item {
  id: number;
  type: string;
  content: string;
  image: string;
  style: ShapeItem["style"];
  geometry: ShapeItem["geometry"];
  position: ShapeItem["position"];
}
