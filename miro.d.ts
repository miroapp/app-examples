declare const miro: SDK.Root

declare module SDK {
  interface Root {
    // Use SDK after callback was called
    onReady(callback: () => void): void

    // Available only in main.js on a board page
    initialize(config?: IPluginConfig): Promise<void>

    // Available only when Web-plugin is run on a settings page
    initializeSettings(config?: IPluginSettingsConfig): Promise<void>

    // Available only when Web-plugin is run on a board page
    board: IBoardCommands

    // Account where Web-plugin has been installed
    account: IAccountCommands

    currentUser: ICurrentUserCommands

    enums: IEnums

    // Some events require scope: BOARDS:READ
    // Available only when Web-plugin is run on a board page
    addListener(event: EventType, listener: (e: Event) => void): void

    // Available only when Web-plugin is run on a board page
    removeListener(event: EventType, listener: (e: Event) => void): void

    // Broadcast some data to all other iframes.
    // Other iframes can get this data from DATA_BROADCASTED event
    broadcastData(data: any): void

    showNotification(text: string): Promise<void>

    showErrorNotification(text: string): void

    // Check is current user has authorized your Web-plugin to make API requests on their behalf
    isAuthorized(): Promise<boolean>

    // Get OAuth token for current user to make requests REST API
    getToken(): Promise<string>

    // Opens auth popup.
    // To prevent the browser from blocking this popup, only call miro.authorize from a click handler on your domain.
    // Method returns a token you can use to make requests REST API on behalf of the current user.
    authorize(options: AuthorizationOptions): Promise<string>

    // Returns clientId that you can find in app settings.
    // clientId needs to use widgets' metadata
    getClientId(): string

    // You can save some state shared between all iframes.
    __setRuntimeState<T = any>(data: T): Promise<T>
    __getRuntimeState<T = any>(): Promise<T>
  }

  type EventType =
    | 'SELECTION_UPDATED'
    | 'WIDGETS_CREATED'
    | 'WIDGETS_DELETED'
    | 'WIDGETS_TRANSFORMATION_UPDATED'
    | 'ESC_PRESSED' //Experimental event
    | 'ALL_WIDGETS_LOADED' //Experimental event
    | 'COMMENT_CREATED' //Experimental event
    | 'CANVAS_CLICKED' //Experimental event
    | 'DATA_BROADCASTED' //Experimental event
    | 'RUNTIME_STATE_UPDATED' //Experimental event
    | 'METADATA_CHANGED' //Experimental event
    | 'ONLINE_USERS_CHANGED' //Experimental event

  interface Event {
    type: string | EventType
    data: any
  }

  interface AuthorizationOptions {
    response_type: 'code' | 'token'
    scope?: string
    redirect_uri?: string
    state?: string
  }

  interface IPluginSettingsConfig {
    iframeHeight: number
  }

  interface IPluginConfig {
    extensionPoints: IPluginConfigExtensionPoints
  }

  interface IPluginConfigExtensionPoints {
    toolbar?: ButtonExtensionPoint<ToolbarButton>
    bottomBar?: ButtonExtensionPoint<BottomBarButton>
    exportMenu?: ButtonExtensionPoint<ExportMenuButton>

    // Promise should be resolve within 400ms otherwise, buttons will not be shown in widget menu
    // One plugin can add up to 3 buttons in widget` menu
    getWidgetMenuItems?: (widgets: IWidget[], editMode: boolean) => Promise<IWidgetMenuItem | IWidgetMenuItem[]>
  }

  type ButtonExtensionPoint<T> = T | (() => Promise<T | void>)

  interface ToolbarButton {
    title: string
    toolbarSvgIcon: string
    librarySvgIcon: string
    onClick: () => void
  }

  interface BottomBarButton {
    title: string
    svgIcon: string
    onClick: () => void
  }

  interface ExportMenuButton {
    title: string
    svgIcon: string
    onClick: () => void
  }

  interface IWidgetMenuItem {
    tooltip: string
    svgIcon: string
    onClick: () => void
  }

  interface IBoardCommands {
    info: IBoardInfoCommands
    widgets: IBoardWidgetsCommands
    tags: IBoardTagsCommands

    ui: IBoardUICommands
    viewport: IBoardViewportCommands
    selection: IBoardSelectionCommands

    utils: IBoardUtils

    __getBoardURLWithParams(params: any): Promise<string>
    __getParamsFromURL(): Promise<any>
    __enableLeftClickOnCanvas(): void
    __disableLeftClickOnCanvas(): void
  }

  interface DraggableItemsContainerOptions {
    dragDirection?: string // Values are 'horizontal' | 'vertical' // 'horizontal' is default

    // css selector for draggable items
    draggableItemSelector: string

    // Dragging started
    getDraggableItemPreview: (
      targetElement: HTMLElement
    ) => {
      width?: number // 100 is default
      height?: number // 100 is default
      url: string // Supported schemas: 'https://', 'data:image/svg+xml', 'data:image/png;base64'
    }

    // Optional. Draggable item was clicked
    onClick?: (targetElement: HTMLElement) => void

    // Draggable item was dropped
    onDrop: (canvasX: number, canvasY: number, targetElement: HTMLElement) => void

    // Optional. Draggable item was dropped not under canvas
    onCancel?: () => void
  }

  interface IAccountCommands {
    /**
     * Requires scope: TEAM:READ
     */
    get(): Promise<IAccountInfo>
  }

  interface ICurrentUserCommands {
    getId(): Promise<string>
    isSignedIn(): Promise<boolean>
    getScopes(): Promise<string[]>

    /**
     * Requires scope: IDENTITY:READ
     */
    getCurrentBoardPermissions(): Promise<BoardPermission[]>

    /**
     * Requires scope: IDENTITY:READ
     */
    getCurrentAccountPermissions(): Promise<AccountPermission[]>

    /**
     * Requires scope: IDENTITY:READ
     */
    isMemberOfCurrentAccount(): Promise<boolean>
  }

  type InputWidget = string | {id: string}
  type InputWidgets = string | string[] | {id: string} | {id: string}[]

  interface IBoardInfoCommands {
    get(): Promise<IBoardInfo>
  }

  interface IBoardUICommands {
    // Promise will resolves when sidebar closes
    openLeftSidebar(iframeURL: string, options?: {width?: number}): Promise<any>

    // Promise will resolves when library closes
    openLibrary(iframeURL: string, options: {title: string}): Promise<any>

    // Promise will resolves when modal closes
    openModal(iframeURL: string, options?: {width?: number; height?: number} | {fullscreen: boolean}): Promise<any>

    // Promise will resolves when bottomPanel closes
    // options.width: default is 120px, min is 80px, max is 320px
    // options.height: default is 48px, min is 48px, max is 200px
    openBottomPanel(iframeURL: string, options?: {width?: number; height?: number}): Promise<any>

    // Throws error if sidebar opened not by this plugin
    closeLeftSidebar(data?: any): void

    // Throws error if library opened not by this plugin
    closeLibrary(data?: any): void

    // Throws error if modal opened not by this plugin
    closeModal(data?: any): void

    closeBottomPanel(data?: any): void

    // Resize the current iFrame inside sidebar or modal (currently supports bottom-panel only)
    // You can pass HTMLElement, css selector or size
    resizeTo(value: HTMLElement | string | {width?: number; height?: number}): void

    // Add the ability to drag-and-drop objects from custom view to the canvas
    initDraggableItemsContainer(container: HTMLElement, options: DraggableItemsContainerOptions): void

    // Switch current tool to select mode
    __selectDefaultTool(): void

    __hideButtonsPanels(panels: 'all' | UIPanel | UIPanel[]): void

    __showButtonsPanels(panels: 'all' | UIPanel | UIPanel[]): void

    __limitToolbarMode(mode: 'editor' | 'commentor' | 'viewer'): void

    __clearToolbarModeLimit(): void
  }

  type UIPanel = 'toolbar' | 'top' | 'bottomBar' | 'map'

  interface IBoardUtils {
    /** Calculate widgets union boundaries */
    unionWidgetBounds(widgets: {bounds: IBounds}[]): IBounds
  }

  interface IViewportOptions {
    /**  Get gap size between result and target viewport. Zero padding by default  */
    padding?: IOffset
    animationTimeInMS?: number // No animation by default
  }

  interface IBoardViewportCommands {
    get(): Promise<IRect>
    set(viewport: IRect, options?: IViewportOptions): Promise<IRect>

    getScale(): Promise<number>

    /** Get size of default UI panels on viewport sides.
     *  Return value: {left: 60, top: 60, right: 0, bottom: 60} */
    getBoardUIPadding(): IOffset

    // [Experimental feature] Add black mask over canvas
    __mask(viewport: IRect, padding?: IOffset): void

    // [Experimental feature] Remove mask
    __unmask(): void
  }

  interface IBoardSelectionCommands {
    /**
     * Returns selected widgets
     * Requires scope: BOARDS:READ
     */
    get(): Promise<IWidget[]>

    /**
     * Select target widgets
     * Returns selected widgets
     * Requires scope: BOARDS:READ
     */
    selectWidgets(widgetIds: InputWidgets): Promise<IWidget[]>

    /**
     * Unselect all widgets
     */
    clear(): Promise<void>

    /**
     * Get selected widgets id after user selects it
     * Currently user can select only one widget.
     * Warning! Use this command in main iframe only.
     */
    enterSelectWidgetsMode(): Promise<{selectedWidgets: IWidget[]}>
  }

  interface IBoardWidgetsCommands {
    /**
     * 'type' is required
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     */
    create<T extends IWidget>(widgets: OneOrMany<{type: string; [index: string]: any}>): Promise<T[]>

    /**
     * filterBy uses https://lodash.com/docs/4.17.11#filter
     * Requires scope: BOARDS:READ
     */
    get<T extends IWidget>(filterBy?: Object): Promise<T[]>

    /**
     * 'id' is required
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     */
    update<T extends IWidget>(widgets: OneOrMany<{id: string; [index: string]: any}>): Promise<T[]>

    /**
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     */
    transformDelta(
      widgetIds: InputWidgets,
      deltaX?: number,
      deltaY?: number,
      deltaRotation?: number
    ): Promise<IWidget[]>

    /**
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     */
    deleteById(widgetIds: InputWidgets): Promise<void>

    /**
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     */
    bringForward(widgetId: InputWidgets): Promise<void>

    /**
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     */
    sendBackward(widgetId: InputWidgets): Promise<void>

    /**
     * Checks whether all widgets on the board has loaded
     */
    areAllWidgetsLoaded(): Promise<boolean>

    /**
     * Requires scope: BOARDS:READ
     * [Experimental feature] Find all widgets intersected with passed area
     */
    __getIntersectedObjects(pointOrRect: IPoint | IRect): Promise<IWidget[]>

    /**
     * [Experimental feature] Do blink animation for target widget
     */
    __blinkWidget(widgets: InputWidgets): Promise<void>
  }

  type InputTags = string | string[] | {id: string} | {id: string}[]
  type CreateTagRequest = {title: string; color: number | string; widgetIds?: InputWidgets}
  type UpdateTagRequest = {id: string; title?: string; color?: number | string; widgetIds?: InputWidgets}

  // API for tags is experimental.
  // It will become stable in June 2020.
  // During the experimental period API for tags could change.
  interface IBoardTagsCommands {
    /**
     * 'title' is required
     * Requires scope: BOARDS:READ
     */
    get(filterBy?: Object): Promise<ITag[]>

    /**
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     */
    create(tags: OneOrMany<CreateTagRequest>): Promise<ITag[]>

    /**
     * 'id' is required
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     */
    update(tags: OneOrMany<UpdateTagRequest>): Promise<ITag[]>

    /**
     * 'title' is required
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     */
    delete(tags: InputTags): Promise<void>
  }

  interface IBoardCommentsCommands {
    /**
     * Requires scope: BOARDS:READ
     */
    get(): Promise<IComment[]>
  }

  interface IBoardGroupsCommands {
    /**
     * Requires scope: BOARDS:READ
     */
    get(): Promise<IGroup[]>
  }

  interface IGroup {
    id: string
    bounds: IBounds
    childrenIds: string[]
  }

  interface ITag {
    id: string
    title: string
    color: string | number
    widgetIds: string[]
  }

  ////////////////////////////////////////////////////////////////////////
  // Widget data types
  ////////////////////////////////////////////////////////////////////////

  type OneOrMany<T> = T | T[]

  type WidgetMetadata = {[x: string]: any}

  type WidgetCapabilities = {editable: boolean}

  interface IWidgetNamespaces {
    metadata: WidgetMetadata
    capabilities: WidgetCapabilities
    clientVisible: boolean
  }

  type WidgetNamespacesKeys = keyof IWidgetNamespaces

  interface IWidget extends IWidgetNamespaces {
    readonly id: string
    readonly type: string
    readonly bounds: IBounds
    readonly groupId?: string
    readonly createdUserId: string
    readonly lastModifiedUserId: string
  }

  interface ITextWidget extends IWidget {
    type: 'TEXT'
    x: number
    y: number
    width: number
    scale: number
    rotation: number
    text: string
    style: {
      backgroundColor: BackgroundColorStyle
      backgroundOpacity: BackgroundOpacityStyle
      borderColor: BorderColorStyle
      borderWidth: BorderWidthStyle
      borderStyle: BorderStyle
      borderOpacity: BorderOpacityStyle
      fontFamily: FontFamily
      textColor: TextColorStyle
      textAlign: TextAlign
      highlighting: HighlightingStyle
      italic: ItalicStyle
      strike: StrikeStyle
      underline: UnderlineStyle
      bold: BoldStyle
    }
  }

  interface IImageWidget extends IWidget {
    type: 'IMAGE'
    x: number
    y: number
    rotation: number
    scale: number
    title: string
    url: string
  }

  interface IStickerWidget extends IWidget {
    type: 'STICKER'
    x: number
    y: number
    scale: number

    /** Text with HTML characters */
    text: string

    /** Clear text without HTML characters */
    plainText: string
    style: {
      stickerBackgroundColor: BackgroundColorStyle
      fontSize: FontSizeStyle
      textAlign: TextAlign
      textAlignVertical: TextAlignVertical
      stickerType: StickerType
      fontFamily: FontFamily
    }

    readonly tags: ITag[]
  }

  interface IShapeWidget extends IWidget {
    type: 'SHAPE'
    x: number
    y: number
    width: number
    height: number
    rotation: number

    /** Text with HTML characters */
    text: string

    /** Clear text without HTML characters */
    plainText: string
    style: {
      shapeType: ShapeType
      backgroundColor: BackgroundColorStyle
      backgroundOpacity: BackgroundOpacityStyle
      borderColor: BorderColorStyle
      borderWidth: BorderWidthStyle
      borderStyle: BorderStyle
      borderOpacity: BorderOpacityStyle
      fontSize: FontSizeStyle
      fontFamily: FontFamily
      textColor: TextColorStyle
      textAlign: TextAlign
      textAlignVertical: TextAlignVertical
      highlighting: HighlightingStyle
      italic: ItalicStyle
      strike: StrikeStyle
      underline: UnderlineStyle
      bold: BoldStyle
    }
  }

  // Currently lines can be created between two widgets only
  // 'startWidgetId' and 'endWidgetId' fields are required for creation
  interface ILineWidget extends IWidget {
    type: 'LINE'
    startWidgetId: string | undefined
    endWidgetId: string | undefined
    readonly startPosition: IPoint
    readonly endPosition: IPoint
    readonly captions: {text: string}[]
    style: {
      lineColor: LineColorStyle
      lineThickness: LineThicknessStyle
      lineStyle: LineStyle
      lineType: LineType
      lineStartStyle: LineArrowheadStyle
      lineEndStyle: LineArrowheadStyle
    }
  }

  interface IWebScreenshotWidget extends IWidget {
    type: 'WEBSCREEN'
    x: number
    y: number
    scale: number
    readonly url: string
  }

  interface IFrameWidget extends IWidget {
    type: 'FRAME'
    x: number
    y: number
    width: number
    height: number
    title: string
    readonly frameIndex: number
    readonly childrenIds: string[]
    style: {
      backgroundColor: BackgroundColorStyle
    }
  }

  interface ICurveWidget extends IWidget {
    type: 'CURVE'
    x: number
    y: number
    scale: number
    rotation: number
    points: IPoint[]
    style: {
      lineColor: LineColorStyle
      lineWidth: LineThicknessStyle
    }
  }

  interface IEmbedWidget extends IWidget {
    type: 'EMBED'
    x: number
    y: number
    scale: number
    html: string
  }

  interface IPreviewWidget extends IWidget {
    type: 'PREVIEW'
    x: number
    y: number
    scale: number
    readonly url: string
  }

  interface ICardWidget extends IWidget {
    type: 'CARD'
    x: number
    y: number
    scale: number
    rotation: number
    title: string
    description: string
    date?: string // date in "YYYY-MM-DD" format
    assignee?: {
      userId: string
    }
    card: {
      customFields?: {
        value?: string
        mainColor?: string
        fontColor?: string
        iconUrl?: string
        roundedIcon?: boolean
      }[]
      logo?: {
        iconUrl: string
      }
    }
    style: {
      backgroundColor: BackgroundColorStyle
    }

    readonly tags: ITag[]
  }

  interface IDocumentWidget extends IWidget {
    type: 'DOCUMENT'
    x: number
    y: number
    rotation: number
    scale: number
    title: string
  }

  interface IMockupWidget extends IWidget {
    type: 'MOCKUP'
    x: number
    y: number
    rotation: number
    readonly mockupType: string
  }

  interface IComment extends IWidget {
    type: 'COMMENT'
    color: number
    resolved: boolean
  }

  interface IWidgetShortData {
    id: string
    type?: string
    metadata?: any
  }

  ////////////////////////////////////////////////////////////////////////
  // Helpers data
  ////////////////////////////////////////////////////////////////////////

  type BoardPermission = 'EDIT_INFO' | 'EDIT_CONTENT' | 'EDIT_COMMENTS'
  type AccountPermission = 'MANAGE_APPS'

  interface IBoardInfo {
    id: string
    title: string
    description: string
    owner?: IUserInfo
    picture: IPictureInfo
    currentUserPermissions: BoardPermission[]
    lastModifyingUser: IUserInfo
    lastViewedByMeDate: string
    modifiedByMeDate: string
    createdAt: string
    updatedAt: string
  }

  interface IUserInfo {
    id: string
    name: string
    email: string
    picture: IPictureInfo
  }

  interface IAccountInfo {
    id: string
    title: string
    currentUserPermissions: AccountPermission[]
    createdAt: string
    picture: IPictureInfo
  }

  interface IPictureInfo {
    big: string
    medium: string
    small: string
    image: string //original picture
  }

  interface IRect {
    x: number
    y: number
    width: number
    height: number
  }

  interface IOffset {
    top: number
    left: number
    bottom: number
    right: number
  }

  interface IPoint {
    x: number
    y: number
  }

  interface IBounds {
    x: number
    y: number
    top: number
    left: number
    bottom: number
    right: number
    width: number
    height: number
  }

  /////////////////////////////////////////////
  // Style types
  /////////////////////////////////////////////
  type BackgroundColorStyle = string | number
  type BackgroundOpacityStyle = number
  type BorderColorStyle = string | number
  type BorderWidthStyle = number
  type BorderOpacityStyle = number
  type FontSizeStyle = number
  type TextColorStyle = string | number
  type HighlightingStyle = string | number
  type ItalicStyle = 0 | 1
  type StrikeStyle = 0 | 1
  type UnderlineStyle = 0 | 1
  type BoldStyle = 0 | 1
  type LineColorStyle = string | number
  type LineThicknessStyle = number

  enum ShapeType {
    RECTANGLE = 3,
    CIRCLE = 4,
    TRIANGLE = 5,
    BUBBLE = 6,
    ROUNDER = 7,
    RHOMBUS = 8,
    PARALL = 10,
    STAR = 11,
    ARROW_RIGHT = 12,
    ARROW_LEFT = 13,
    TEXT_RECT = 14,
    PILL = 15,
    PENTAGON = 16,
    HEXAGON = 17,
    OCTAGON = 18,
    TRAPEZE = 19,
    PREDEFINED_PROCESS = 20,
    ARROW_LEFT_RIGHT = 21,
    CLOUD = 22,
    BRACE_LEFT = 23,
    BRACE_RIGHT = 24,
    CROSS = 25,
    BARREL = 26,
  }

  enum StickerType {
    SQUARE = 0,
    RECTANGLE = 1,
  }

  enum BorderStyle {
    DOTTED = 0,
    DASHED = 1,
    NORMAL = 2,
  }

  enum FontFamily {
    ARIAL = 0,
    CURSIVE = 1,
    ABRIL_FATFACE = 2,
    BANGERS,
    EB_GARAMOND,
    GEORGIA,
    GRADUATE,
    GRAVITAS_ONE,
    FREDOKA_ONE,
    NIXIE_ONE,
    OPEN_SANS,
    PERMANENT_MARKER,
    PT_SANS,
    PT_SANS_NARROW,
    PT_SERIF,
    RAMMETTO_ONE,
    ROBOTO,
    ROBOTO_CONDENSED,
    ROBOTO_SLAB,
    CAVEAT,
    TIMES_NEW_ROMAN,
    TITAN_ONE,
    LEMON_TUESDAY,
    ROBOTO_MONO,
    NOTO_SANS,
    PLEX_SANS,
    PLEX_SERIF,
    PLEX_MONO,
  }

  enum TextAlign {
    LEFT = 'l',
    CENTER = 'c',
    RIGHT = 'r',
  }

  enum TextAlignVertical {
    TOP = 't',
    MIDDLE = 'm',
    BOTTOM = 'b',
  }

  enum LineStyle {
    DASHED = 1,
    NORMAL = 2,
    STRONG = 3,
    DOTTED = 4,
  }

  enum LineType {
    LINE = 1,
    ARROW = 2,
    ARROW_SKETCH = 9,
  }

  enum LineArrowheadStyle {
    NONE = 0,
    ARC_ARROW = 1,
    RHOMBUS = 2,
    FILLED_RHOMBUS = 3,
    CIRCLE = 4,
    FILLED_CIRCLE = 5,
    ARROW = 6,
    OPEN_ARROW = 7,
    FILLED_ARROW = 8,
  }

  interface IEnums {
    shapeType: typeof ShapeType
    stickerType: typeof StickerType
    borderStyle: typeof BorderStyle
    fontFamily: typeof FontFamily
    textAlign: typeof TextAlign
    textAlignVertical: typeof TextAlignVertical
    lineStyle: typeof LineStyle
    lineType: typeof LineType
    lineArrowheadStyle: typeof LineArrowheadStyle
  }
}
