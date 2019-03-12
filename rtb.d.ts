declare const rtb: SDK.Root

declare module SDK {
	interface Root {
		// Available in main iframe only
		initialize(config: IPluginConfig)

		onReady(callback: () => void)

		board: IBoardCommands

		addListener(event: EventType, listener: (e: Event) => void)

		removeListener(event: EventType, listener: (e: Event) => void)

		showNotification(text: string)

		showErrorNotification(text: string)
	}

	type EventType =
		| 'SELECTION_UPDATED'
		| 'WIDGETS_CREATED'
		| 'WIDGETS_DELETED'
		| 'WIDGETS_TRANSFORMATION_UPDATED'

	interface Event {
		type: EventType
		data: any
	}

	interface IPluginConfig {
		extensionPoints: {
			toolbar?: {
				title: string
				toolbarSvgIcon: string
				librarySvgIcon: string
				onClick: () => void
			}
			bottomBar?: {
				title: string
				svgIcon: string
				onClick: () => void
			}
			exportMenu?: {
				title: string
				svgIcon: string
				onClick: () => void
			}
		}
	}

	interface IBoardCommands {
		info: IBoardInfoCommands

		widgets: IBoardWidgetsCommands
		groups: IBoardGroupsCommands

		ui: IBoardUICommands
		viewport: IBoardViewportCommands
		selection: IBoardSelectionCommands

		getPermissions(): Promise<BoardPermission[]>

		hasPermission(permission: BoardPermission): Promise<boolean>
	}

	interface IBoardInfoCommands {
		get(): Promise<IBoardInfo>
	}

	interface IBoardUICommands {
		// Promise will resolves when sidebar closes
		openLeftSidebar(iframeURL: string): Promise<any>

		// Promise will resolves when sidebar closes
		openRightSidebar(iframeURL: string): Promise<any>

		// Promise will resolves when library closes
		openLibrary(iframeURL: string, options: {title: string}): Promise<any>

		// Promise will resolves when modal closes
		// Promise returns data passed in closeModal function
		openModal(iframeURL: string, options?: {maxWidth?: number, maxHeight?: number}): Promise<any>

		// Throws error if modal opened not by this plugin
		closeLeftSidebar(data?: any)

		// Throws error if sidebar opened not by this plugin
		closeRightSidebar(data?: any)

		// Throws error if library opened not by this plugin
		closeLibrary(data?: any)

		// Throws error if modal opened not by this plugin
		closeModal(data?: any)
	}

	interface IBoardViewportCommands {
		getViewport(): Promise<IRect>

		setViewport(viewport: IRect): Promise<IRect>

		setViewportWithAnimation(viewport: IRect): Promise<IRect>

		zoomToObject(objectId: string, selectObject?: boolean)

		setZoom(value: number): Promise<number>

		getZoom(): Promise<number>
	}

	interface IBoardSelectionCommands {
		// Returns selected widgets
		get(): Promise<IBaseWidget[]>

		// Select target widgets
		// Returns selected widgets
		selectWidgets(widgetIds: string | string[]): Promise<IBaseWidget[]>

		// Get selected widgets id after user selects it
		enterSelectWidgetsMode(): Promise<{selectedWidgets: IBaseWidget[]}>
	}

	type BoardPermission = 'EDIT_INFO' | 'EDIT_CONTENT' | 'EDIT_COMMENTS'

	////////////////////////////////////////////////////////////////////////
	// Widgets
	////////////////////////////////////////////////////////////////////////

	interface IBoardWidgetsCommands {
		//requires 'EDIT_CONTENT' permission
		create(widgets: {type: string, [index: string]: any}[]): Promise<IBaseWidget[]> // 'type' is required

		// filterBy uses https://lodash.com/docs/4.17.11#filter
		get(filterBy?: Object): Promise<IBaseWidget[]>

		//requires 'EDIT_CONTENT' permission
		update(widgets: {id: string, [index: string]: any}[]): Promise<IBaseWidget[]> // 'id' is required

		//requires 'EDIT_CONTENT' permission
		transformDelta(widgetIds: string | string[], deltaX: number | undefined, deltaY: number | undefined, deltaRotation: number | undefined): Promise<IBaseWidget[]>

		//requires 'EDIT_CONTENT' permission
		deleteById(widgetIds: string | string[]): Promise<void>
	}

	interface IBoardGroupsCommands {
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

	interface IBaseWidget {
		readonly id: string
		readonly type: string
		readonly bounds: IBounds
		readonly groupId?: string
	}

	interface ITextWidgetData extends IBaseWidget {
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
			stickerType: StickerTypeStyle
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
			highlighting: HighlightingStyle,
			italic: ItalicStyle,
			strike: StrikeStyle,
			underline: UnderlineStyle,
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
		type: 'CARDWIDGET'
		x: number
		y: number
		scale: number
		height: number
		rotation: number
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

	////////////////////////////////////////////////////////////////////////
	// Helpers data
	////////////////////////////////////////////////////////////////////////

	interface IBoardInfo {
		id: string
		title: string
		description: string
		owner: IUserInfo
		picture: IPictureInfo
		currentUserPermission: IBoardPermissionInfo
		account: IAccountInfo
		lastModifyingUser: IUserInfo
		lastModifyingUserName: string
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
		role?: string
		title: string
		picture: any
		type: string
	}

	interface IPictureInfo {
		big: string
		medium: string
		small: string
		resourceId: string
		size44: string
		size180: string
		size210: string
		size420: string
		image: string //original picture
	}

	interface IBoardPermissionInfo {
		role: string
		permissions: string[]
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

