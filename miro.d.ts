declare const miro: SDK.Root

declare module SDK {
	interface Root {
		// Use SDK after callback was called
		onReady(callback: () => void)

		// Available only in main.js on a board page
		initialize(config?: IPluginConfig)

		// Available only when Web-plugin is run on a settings page
		initializeSettings(config?: IPluginSettingsConfig)

		// Available only when Web-plugin is run on a board page
		board: IBoardCommands

		// Account where Web-plugin has been installed
		account: IAccountCommands

		addListener(event: EventType, listener: (e: Event) => void)

		removeListener(event: EventType, listener: (e: Event) => void)

		showNotification(text: string)

		showErrorNotification(text: string)

		// Check is current user has authorized your Web-plugin to make API requests on their behalf
		isAuthorized(): Promise<boolean>

		// Get OAuth token for current user to make requests REST API
		getToken(): Promise<string>

		// Opens auth popup.
		// To prevent the browser from blocking this popup, only call miro.authorize from a click handler on your domain.
		// Method returns a token you can use to make requests REST API on behalf of the current user.
		authorize(options: AuthorizationOptions): Promise<string>
	}

	type EventType =
		| 'BOARD_SELECTION_UPDATED'
		| 'BOARD_WIDGETS_CREATED'
		| 'BOARD_WIDGETS_DELETED'
		| 'BOARD_WIDGETS_TRANSFORMATION_UPDATED'

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
		extensionPoints: {
			toolbar?: ButtonExtensionPoint<ToolbarButton>
			bottomBar?: ButtonExtensionPoint<BottomBarButton>
			exportMenu?: ButtonExtensionPoint<ExportMenuButton>
		}
	}

	type ButtonExtensionPoint<T> = T | (() => Promise<T[]>)

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

	interface IBoardCommands {
		info: IBoardInfoCommands
		widgets: IBoardWidgetsCommands //requires 'EDIT_CONTENT' permission

		ui: IBoardUICommands
		viewport: IBoardViewportCommands
		selection: IBoardSelectionCommands

		__getBoardUrlWithParams(params: Object): string
		__getParamsFromBoardUrl(): Object
	}

	interface IAccountCommands {
		get(): Promise<IAccountInfo>
		isCurrentUserAccountMember(): Promise<boolean>
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

		// Promise will resolves when sidebar closes
		// Promise returns data passed in openRightSidebar function
		openRightSidebar(iframeURL: string, options?: {width?: number}): Promise<any>

		// Promise will resolves when library closes
		// Promise returns data passed in closeLibrary function
		openLibrary(iframeURL: string, options: {title: string}): Promise<any>

		// Promise will resolves when modal closes
		// Promise returns data passed in closeModal function
		openModal(iframeURL: string, options?: {maxWidth?: number; maxHeight?: number; fullscreen?: boolean}): Promise<any>

		// Throws error if sidebar opened not by this plugin
		closeLeftSidebar(data: any)

		// Throws error if sidebar opened not by this plugin
		closeRightSidebar(data: any)

		// Throws error if library opened not by this plugin
		closeLibrary(data: any)

		// Throws error if modal opened not by this plugin
		closeModal(data: any)
	}

	interface IBoardViewportCommands {
		getViewport(): Promise<IRect>

		setViewport(viewport: IRect): Promise<IRect>

		setViewportWithAnimation(viewport: IRect): Promise<IRect>

		zoomToObject(objectId: InputWidget, selectObject?: boolean)

		setZoom(value: number): Promise<number>

		getZoom(): Promise<number>
	}

	interface IBoardSelectionCommands {
		/**
		 * Returns selected widgets
		 * Requires scope: BOARDS:READ
		 */
		get(): Promise<IBaseWidget[]>

		/**
		 * Select target widgets
		 * Returns selected widgets
		 * Requires scope: BOARDS:READ
		 */
		selectWidgets(widgetIds: SDK.InputWidgets): Promise<IBaseWidget[]>

		/**
		 * Get selected widgets id after user selects it
		 * @param allowMultiSelection is not implemented yet
		 */
		enterSelectWidgetsMode(options: {allowMultiSelection?: boolean}): Promise<{selectedWidgets: IBaseWidget[]}>
	}

	interface IBoardWidgetsCommands {
		/**
		 * 'type' is required
		 * Requires scope: BOARDS:WRITE
		 */
		create(widgets: {type: string; [index: string]: any}[]): Promise<IBaseWidget[]>

		/**
		 * filterBy uses https://lodash.com/docs/4.17.11#filter
		 * Requires scope: BOARDS:READ
		 */
		get(filterBy?: Object): Promise<IBaseWidget[]>

		/**
		 * 'id' is required
		 * Requires scope: BOARDS:WRITE
		 */
		update(widgets: {id: string; [index: string]: any}[]): Promise<IBaseWidget[]>

		/**
		 * Requires scope: BOARDS:WRITE
		 */
		transformDelta(
			widgetIds: InputWidgets,
			deltaX: number | undefined,
			deltaY: number | undefined,
			deltaRotation: number | undefined
		): Promise<IBaseWidget[]>

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
	}

	interface IBoardCommentsCommands {
		/**
		 * Requires scope: BOARDS:READ
		 */
		get(): Promise<ICommentData[]>
	}

	interface IBoardGroupsCommands {
		/**
		 * Requires scope: BOARDS:READ
		 */
		get(): Promise<IGroupData[]>
	}

	interface IGroupData {
		id: string
		bounds: IBounds
		childrenIds: string[]
	}

	////////////////////////////////////////////////////////////////////////
	// Widget data types
	////////////////////////////////////////////////////////////////////////

	type WidgetMetadata = {[x: string]: any}

	type WidgetCapabilities = {editable: boolean}

	interface IBaseWidgetNamespaces {
		metadata: WidgetMetadata
		capabilities?: WidgetCapabilities
	}

	type BaseWidgetNamespacesKeys = keyof IBaseWidgetNamespaces

	interface IBaseWidget extends IBaseWidgetNamespaces {
		readonly id: string
		readonly type: string
		readonly bounds: IBounds
		readonly groupId?: string
		readonly zIndex?: number // defined when type !== 'frame' (not implemented yet)
		readonly createdUserId: string
		readonly lastModifiedUserId: string
		clientVisible: boolean
	}

	interface ITextWidgetData extends IBaseWidget {
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
			fontSize: FontSizeStyle
			fontFamily: FontFamilyStyle
			textColor: TextColorStyle
			textAlign: TextAlignStyle
		}
	}

	interface IImageWidgetData extends IBaseWidget {
		type: 'IMAGE'
		x: number
		y: number
		rotation: number
		width: number
		scale: number
		title: string
		url?: string
	}

	interface IStickerWidgetData extends IBaseWidget {
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
			stickerType: StickerTypeStyle // Does not work. It calcs from width
			fontFamily: FontFamilyStyle
		}
	}

	interface IShapeWidgetData extends IBaseWidget {
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

	interface ILineWidgetData extends IBaseWidget {
		type: 'LINE'
		startWidgetId: string | undefined
		endWidgetId: string | undefined
		startPosition: IPoint
		endPosition: IPoint
		style: {
			lineColor: LineColorStyle
			lineWidth: LineWidthStyle
			lineStyle: LineStyleStyle
		}
	}

	interface IWebScreenshotWidgetData extends IBaseWidget {
		type: 'WEBSCREEN'
		x: number
		y: number
		scale: number
		url: string
	}

	interface IFrameWidgetData extends IBaseWidget {
		type: 'FRAME'
		x: number
		y: number
		width: number
		height: number
		title: string
		frameIndex: number
		childrenIds: string[]
		style: {
			backgroundColor: BackgroundColorStyle
		}
	}

	interface ICurveWidgetData extends IBaseWidget {
		type: 'CURVE'
		x: number
		y: number
		scale: number
		rotation: number
		points: IPoint[]
		style: {
			lineColor: LineColorStyle
			lineWidth: LineWidthStyle
		}
	}

	interface IEmbedWidgetData extends IBaseWidget {
		type: 'EMBED'
		x: number
		y: number
		scale: number
		html: string
	}

	interface IPreviewWidgetData extends IBaseWidget {
		type: 'PREVIEW'
		x: number
		y: number
		scale: number
		url: string
	}

	interface ICardWidgetData extends IBaseWidget {
		type: 'CARD'
		x: number
		y: number
		scale: number
		width: number
		height: number
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

	interface IDocumentWidgetData extends IBaseWidget {
		type: 'DOCUMENT'
		x: number
		y: number
		rotation: number
		scale: number
		title: string
	}

	interface IMockupWidgetData extends IBaseWidget {
		type: 'MOCKUP'
		x: number
		y: number
		rotation: number
		mockupType: string
	}

	interface ICommentData extends IBaseWidget {
		type: 'COMMENT'
		color: number
		resolved: boolean
	}

	interface IWidgetShortData {
		id: string
		type?: string
		metadata?: any
	}

	interface ICurrentUser {
		signedIn: boolean
		scopes: string[]
		currentBoardPermissions: BoardPermission[]
		currentAccountPermissions: AccountPermission[]
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

	interface IDraggableImageOptions {
		isTouchEvent: boolean
		preview: {
			width?: number
			height?: number
			url: string
		}
		image: IDroppedImageOptions
	}

	interface IDroppedImageOptions {
		width?: number
		height?: number
		url: string
	}

	interface IRect {
		x: number
		y: number
		width: number
		height: number
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
	type LineWidthStyle = number
	type LineStyleStyle = number
}
