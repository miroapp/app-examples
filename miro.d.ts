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

	interface Event {
		type: EventType
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
		getWidgetMenuItems?: (widgets: IWidget[]) => Promise<IContextMenuItem[]>
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

	interface IContextMenuItem {
		tooltip: string
		svgIcon: string
		onClick?: (widgets: IWidget[]) => void
	}

	type MenuItemsGetter = (widgets: IWidget[]) => Promise<IContextMenuItem[]>

	interface IBoardCommands {
		info: IBoardInfoCommands
		widgets: IBoardWidgetsCommands //requires 'EDIT_CONTENT' permission

		ui: IBoardUICommands
		viewport: IBoardViewportCommands
		selection: IBoardSelectionCommands

		__getBoardURLWithParams(params: any): Promise<string>
		__getParamsFromURL(): Promise<any>
		__enableLeftClickOnCanvas(): void
		__disableLeftClickOnCanvas(): void
	}

	interface DraggableItemsContainerOptions {
		dragDirection?: string // Values are 'horizontal' | 'vertical' // 'horizontal' is default

		// css selector for draggable items
		draggableItemSelector: string

		// Optional. Draggable item was clicked
		onClick?: (targetElement: any) => void

		// Dragging started
		getDraggableItemPreview: (
			targetElement: any
		) => {
			width?: number // 100 is default
			height?: number // 100 is default
			url: string
		}

		// Draggable item was dropped
		onDrop: (canvasX: number, canvasY: number) => void

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
		// Promise returns data passed in closeLeftSidebar function
		openLeftSidebar(iframeURL: string, options?: {width?: number}): Promise<any>

		// Promise will resolves when library closes
		// Promise returns data passed in closeLibrary function
		openLibrary(iframeURL: string, options: {title: string}): Promise<any>

		// Promise will resolves when modal closes
		// Promise returns data passed in closeModal function
		openModal(iframeURL: string, options?: {width?: number; height?: number} | {fullscreen: boolean}): Promise<any>

		// Promise will resolves when bottomPanel closes
		// Promise returns data passed in closeBottomPanel function
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

	interface IBoardViewportCommands {
		getViewport(): Promise<IRect>

		setViewport(viewport: IRect, padding?: IOffset): Promise<IRect>

		setViewportWithAnimation(viewport: IRect): Promise<IRect>

		zoomToObject(widgets: InputWidget): Promise<void>

		setZoom(value: number): Promise<number>

		getZoom(): Promise<number>

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
		 */
		update<T extends IWidget>(widgets: OneOrMany<{id: string; [index: string]: any}>): Promise<T[]>

		/**
		 * Requires scope: BOARDS:WRITE
		 */
		transformDelta(
			widgetIds: InputWidgets,
			deltaX: number | undefined,
			deltaY: number | undefined,
			deltaRotation: number | undefined
		): Promise<IWidget[]>

		/**
		 * Requires scope: BOARDS:WRITE
		 */
		deleteById(widgetIds: InputWidgets): Promise<void>

		/**
		 * Requires scope: BOARDS:WRITE
		 */
		bringForward(widgetId: InputWidgets): Promise<void>

		/**
		 * Requires scope: BOARDS:WRITE
		 */
		sendBackward(widgetId: InputWidgets): Promise<void>

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

	////////////////////////////////////////////////////////////////////////
	// Widget data types
	////////////////////////////////////////////////////////////////////////

	type OneOrMany<T> = T | T[]

	type WidgetMetadata = {[x: string]: any}

	type WidgetCapabilities = {editable: boolean}

	interface IWidgetNamespaces {
		metadata: WidgetMetadata
		capabilities?: WidgetCapabilities
	}

	type WidgetNamespacesKeys = keyof IWidgetNamespaces

	interface IWidget extends IWidgetNamespaces {
		readonly id: string
		readonly type: string
		readonly bounds: IBounds
		readonly groupId?: string
		readonly zIndex?: number // defined when type !== 'frame' (not implemented yet)
		readonly createdUserId: string
		readonly lastModifiedUserId: string
		clientVisible: boolean
	}

	interface ITextWidget extends IWidget {
		type: 'TEXT'
		x: number
		y: number
		width: number
		scale: number
		rotation: number
		text: string
		readonly plainText: string
		style: {
			backgroundColor: BackgroundColorStyle
			backgroundOpacity: BackgroundOpacityStyle
			borderColor: BorderColorStyle
			borderWidth: BorderWidthStyle
			borderStyle: BorderStyleStyle
			borderOpacity: BorderOpacityStyle
			fontFamily: FontFamilyStyle
			textColor: TextColorStyle
			textAlign: TextAlignStyle
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
		text: string
		style: {
			stickerBackgroundColor: BackgroundColorStyle
			fontSize: FontSizeStyle
			textAlign: TextAlignStyle
			textAlignVertical: TextAlignVerticalStyle
			stickerType: StickerTypeStyle
			fontFamily: FontFamilyStyle
		}
	}

	interface IShapeWidget extends IWidget {
		type: 'SHAPE'
		x: number
		y: number
		width: number
		height: number
		rotation: number
		text: string
		readonly plainText: string
		style: {
			shapeType: ShapeTypeStyle
			backgroundColor: BackgroundColorStyle
			backgroundOpacity: BackgroundOpacityStyle
			borderColor: BorderColorStyle
			borderWidth: BorderWidthStyle
			borderStyle: BorderStyleStyle
			borderOpacity: BorderOpacityStyle
			fontSize: FontSizeStyle
			fontFamily: FontFamilyStyle
			textColor: TextColorStyle
			textAlign: TextAlignStyle
			textAlignVertical: TextAlignVerticalStyle
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
			lineStyle: LineStyleStyle
			lineType: LineTypeStyle
			lineStartStyle: LineEndStyle
			lineEndStyle: LineEndStyle
		}
	}

	interface IWebScreenshotWidget extends IWidget {
		type: 'WEBSCREEN'
		x: number
		y: number
		scale: number
		url: string
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
		url: string
	}

	interface ICardWidget extends IWidget {
		type: 'CARD'
		x: number
		y: number
		scale: number
		rotation: number
		title: string
		description: string
		dueDate: {
			from: number
			to: number
		}
		assignee: {
			userId: string
		}
		card: {
			customFields: {
				value?: string
				mainColor?: string
				fontColor?: string
				iconUrl?: string
				roundedIcon?: boolean
			}[]
			logo: {
				iconUrl: string
			}
		}
		style: {
			backgroundColor: BackgroundColorStyle
		}
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
		mockupType: string
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
	type ShapeTypeStyle = number
	type StickerTypeStyle = number
	type BackgroundColorStyle = string | number
	type BackgroundOpacityStyle = number
	type BorderColorStyle = string | number
	type BorderWidthStyle = number
	type BorderStyleStyle = number
	type BorderOpacityStyle = number
	type FontSizeStyle = number
	type FontFamilyStyle = number
	type TextColorStyle = string | number
	type TextAlignStyle = 'l' | 'c' | 'r' //left | center | right
	type TextAlignVerticalStyle = 't' | 'm' | 'b' //top | middle | bottom
	type HighlightingStyle = string | number
	type ItalicStyle = 0 | 1
	type StrikeStyle = 0 | 1
	type UnderlineStyle = 0 | 1
	type BoldStyle = 0 | 1
	type LineColorStyle = string | number
	type LineThicknessStyle = number
	type LineStyleStyle = number
	type LineTypeStyle = number
	type LineEndStyle = number
}
