// ----------------------------------------------------------------------------
// Generic
interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}
interface Offset {
  top: number;
  left: number;
  bottom: number;
  right: number;
}
type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | {
      [key: string]: Json;
    };
// ----------------------------------------------------------------------------
// Styles
declare enum TagColor {
  Red = "red",
  Magenta = "magenta",
  Violet = "violet",
  LightGreen = "light_green",
  Green = "green",
  DarkGreen = "dark_green",
  Cyan = "cyan",
  Blue = "blue",
  DarkBlue = "dark_blue",
  Yellow = "yellow",
  Gray = "gray",
  Black = "black",
}
declare enum StickyNoteColor {
  Gray = "gray",
  LightYellow = "light_yellow",
  Yellow = "yellow",
  Orange = "orange",
  LightGreen = "light_green",
  Green = "green",
  DarkGreen = "dark_green",
  Cyan = "cyan",
  LightPink = "light_pink",
  Pink = "pink",
  Violet = "violet",
  Red = "red",
  LightBlue = "light_blue",
  Blue = "blue",
  DarkBlue = "dark_blue",
  Black = "black",
}
declare enum ShapeType {
  Rectangle = "rectangle",
  Circle = "circle",
  Triangle = "triangle",
  WedgeRoundRectangleCallout = "wedge_round_rectangle_callout",
  RoundRectangle = "round_rectangle",
  Rhombus = "rhombus",
  Parallelogram = "parallelogram",
  Star = "star",
  RightArrow = "right_arrow",
  LeftArrow = "left_arrow",
  Pentagon = "pentagon",
  Hexagon = "hexagon",
  Octagon = "octagon",
  Trapezoid = "trapezoid",
  FlowChartPredefinedProcess = "flow_chart_predefined_process",
  LeftRightArrow = "left_right_arrow",
  Cloud = "cloud",
  LeftBrace = "left_brace",
  RightBrace = "right_brace",
  Cross = "cross",
  Can = "can",
}
// ----------------------------------------------------------------------------
// Mixins
interface BaseMixin {
  readonly id: string;
  sync(): Promise<void>;
}
interface PositionMixin {
  x: number;
  y: number;
}
interface SizeMixin {
  width: number;
  height: number;
}
interface RotationMixin {
  rotation: number;
}
interface ContainerMixin {
  childrenIds: string[];
  add<T extends Item>(item: T): Promise<T>;
  remove<T extends Item>(item: T): Promise<void>;
  getChildren(): Promise<Omit<Base, "x" | "y">[]>;
}
interface ModifiableMixin {
  readonly createdAt: string;
  readonly createdBy: string;
  readonly modifiedAt: string;
  readonly modifiedBy: string;
}
interface WidgetMixin extends BaseMixin, PositionMixin, ModifiableMixin {
  readonly type: ItemType;
}
interface EntityMixin extends BaseMixin {
  readonly type: EntityType;
}
// ----------------------------------------------------------------------------
// Widgets
declare enum ItemType {
  Text = "text",
  StickyNote = "sticky_note",
  Shape = "shape",
  Image = "image",
  Frame = "frame",
  Preview = "preview",
  Card = "card",
  USM = "usm",
  Kanban = "kanban",
  Document = "document",
  Mockup = "mockup",
  Curve = "curve",
  WebScreen = "webscreen",
  Table = "table",
  Svg = "svg",
  Emoji = "emoji",
  Embed = "embed",
  Connector = "connector",
  Opaque = "opaque",
  TableText = "table_text",
  RallyCard = "rallycard",
  Stencil = "stencil",
}
type Base = WidgetMixin;
interface Card extends WidgetMixin, Readonly<SizeMixin>, RotationMixin {
  readonly type: ItemType.Card;
  title: string;
  description: string;
  dueDate: string;
  assignee?: {
    userId: string;
  };
  style: {
    cardTheme?: string;
  };
  tagIds: string[];
}
type CardProps = {
  width?: number;
  height?: number;
  readonly type?: ItemType.Card;
  title?: string;
  description?: string;
  dueDate?: string;
  assignee?: {
    userId: string;
  };
  style?: {
    cardTheme?: string;
  };
  tagIds?: string[];
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  rotation?: number;
};
interface Frame extends WidgetMixin, Readonly<SizeMixin>, ContainerMixin {
  readonly type: ItemType.Frame;
  title: string;
}
type FrameProps = {
  width?: number;
  height?: number;
  readonly type?: ItemType.Frame;
  title?: string;
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  childrenIds?: string[];
};
interface Image extends WidgetMixin, Readonly<SizeMixin>, RotationMixin {
  readonly type: ItemType.Image;
  title: string;
  url: string;
}
type ImageProps = {
  width?: number;
  height?: number;
  readonly type?: ItemType.Image;
  title?: string;
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  rotation?: number;
  url?: string;
};
type OpaqueType =
  | ItemType.Curve
  | ItemType.Document
  | ItemType.Emoji
  | ItemType.Table
  | ItemType.Kanban
  | ItemType.Mockup
  | ItemType.Svg
  | ItemType.USM
  | ItemType.WebScreen
  | ItemType.Connector
  | ItemType.Stencil
  | ItemType.Opaque; // Default case
interface Opaque extends WidgetMixin {
  readonly type: OpaqueType;
}
interface Preview extends WidgetMixin, Readonly<SizeMixin> {
  readonly type: ItemType.Preview;
  url: string;
}
type PreviewProps = {
  width?: number;
  height?: number;
  readonly type?: ItemType.Preview;
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  url?: string;
};
interface Shape extends WidgetMixin, Readonly<SizeMixin>, RotationMixin {
  readonly type: ItemType.Shape;
  content: string;
  shape: ShapeType | `${ShapeType}`;
  style: {
    fillColor: string;
  };
}
type ShapeProps = {
  width?: number;
  height?: number;
  readonly type?: ItemType.Shape;
  style?: {
    fillColor: string;
  };
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  rotation?: number;
  content?: string;
  shape?: ShapeType | `${ShapeType}`;
};
interface StickyNote extends WidgetMixin, Readonly<SizeMixin> {
  readonly type: ItemType.StickyNote;
  content: string;
  style: {
    fillColor: StickyNoteColor | `${StickyNoteColor}`;
  };
  tagIds: string[];
}
type StickyNoteProps = {
  width?: number;
  height?: number;
  readonly type?: ItemType.StickyNote;
  style?: {
    fillColor: StickyNoteColor | `${StickyNoteColor}`;
  };
  tagIds?: string[];
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  content?: string;
};
interface Embed extends WidgetMixin, Readonly<SizeMixin> {
  readonly type: ItemType.Embed;
  x: number;
  y: number;
  readonly width: number;
  readonly height: number;
  url: string;
  thumbnailUrl: string;
}
type EmbedProps = {
  readonly width?: number;
  readonly height?: number;
  readonly type?: ItemType.Embed;
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  url?: string;
  thumbnailUrl?: string;
};
interface Text extends WidgetMixin, Readonly<SizeMixin>, RotationMixin {
  readonly type: ItemType.Text;
  content: string;
  style: {
    fillColor: string;
  };
}
type TextProps = {
  width?: number;
  height?: number;
  readonly type?: ItemType.Text;
  style?: {
    fillColor: string;
  };
  readonly id?: string;
  x?: number;
  y?: number;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: string;
  rotation?: number;
  content?: string;
};
export type Item =
  | Card
  | Frame
  | Image
  | Opaque
  | Preview
  | Shape
  | StickyNote
  | Text
  | Embed;
// ----------------------------------------------------------------------------
// Entities
declare enum EntityType {
  Tag = "tag",
}
interface Tag extends EntityMixin {
  readonly type: EntityType.Tag;
  title: string;
}
export type TagProps = {
  readonly type?: EntityType.Tag;
  title?: string;
  readonly id?: string;
};
export type Entity = Tag;
// ----------------------------------------------------------------------------
// Events
type DropEvent = {
  x: number;
  y: number;
  target: Element;
};
type AppEventType = "icon:click";
type EventType = "drop" | AppEventType;
// ----------------------------------------------------------------------------
// User interface
interface BoardUI {
  openPanel(options: { pageUrl: string; maxHeight?: number }): Promise<void>;
  closePanel(): Promise<void>;
  openModal(options: {
    pageUrl: string;
    maxHeight?: number;
    maxWidth?: number;
    fullscreen?: boolean;
  }): Promise<void>;
  closeModal(): Promise<void>;
  on(event: "drop", handler: (event: DropEvent) => void): void;
  on(event: "icon:click", handler: () => void): void;
  on(event: EventType, handler: (event: DropEvent) => void): void;
}
// ----------------------------------------------------------------------------
// Board viewport
interface BoardViewport {
  get(): Promise<Rect>;
  set(options: {
    viewport: Rect;
    padding?: Offset;
    animationDurationInMs?: number;
  }): Promise<Rect>;
  zoomTo(items: BoardWidgets): Promise<void>;
}
// ----------------------------------------------------------------------------
// Board
type BoardNode = Item | Tag;
type BoardNodes = BoardNode[];
type BoardInput = BoardNode | BoardNodes;
type BoardWidgets = Item | Item[];
type BoardInfo = {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
type GetFilter =
  | {
      id: string[] | string;
    }
  | {
      type?: string[] | string;
      tags?: string[] | string;
    };
type AppData = Json;
type UserInfo = {
  id: string;
};
export interface Board {
  readonly ui: BoardUI;
  readonly viewport: BoardViewport;
  createCard(props?: CardProps): Promise<Card>;
  createFrame(props?: FrameProps): Promise<Frame>;
  createImage(props?: ImageProps): Promise<Image>;
  createPreview(props?: PreviewProps): Promise<Preview>;
  createShape(props?: ShapeProps): Promise<Shape>;
  createStickyNote(props?: StickyNoteProps): Promise<StickyNote>;
  createText(props?: TextProps): Promise<Text>;
  createEmbed(props?: EmbedProps): Promise<Embed>;
  createTag(props?: TagProps): Promise<Tag>;
  sync(item: BaseMixin): Promise<void>;
  remove(input: BoardNode): Promise<void>;
  bringToFront(input: Item): Promise<void>;
  sendToBack(input: Item): Promise<void>;
  getById(id: string): Promise<BoardNode>;
  get(filter?: GetFilter): Promise<BoardNode[]>;
  getInfo(): Promise<BoardInfo>;
  getUserInfo(): Promise<UserInfo>;
  getSelection(): Promise<Item[]>;
  getAppData(key: string): Promise<AppData>;
  setAppData(key: string, value: AppData): Promise<AppData>;
}
// ----------------------------------------------------------------------------
// Globals
interface Miro {
  readonly board: Board;
}
declare global {
  // eslint-disable-next-line no-var
  var miro: Miro;
}
