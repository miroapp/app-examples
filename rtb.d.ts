declare module SDK {
	interface RTB {
		// Available in main.js only
		initialize(config:IPluginConfig)

		// Available in iframe`s extension point only (e.g.: sidebar or modal)
		onReady(callback:() => any)

		board:IBoardCommands

		addListener(event:string, listener:(e) => void)
		removeListener(event:string, listener:(e) => void)

		showNotification(text:string)
		showErrorNotification(text:string)

		helpers:SDK.Helpers
		enums:SDK.IEnums
	}

	interface Helpers {
		initScrollableContainerWithDraggableImages(container:Element, options:{
			draggableImageSelector:string
		}):HTMLElement
	}

	interface IEnums {
		readonly event:SDK.EventType
		readonly shapeType:SDK.ShapeType
		readonly stickerType:SDK.StickerType
	}

	interface EventType {
		SELECTION_UPDATED:string
		WIDGETS_CREATED:string
		WIDGETS_DELETED:string
		WIDGETS_TRANSFORMATION_UPDATED:string
	}

	interface ShapeType {
		RECTANGLE:number
		CIRCLE:number
		TRIANGLE:number
		BUBBLE:number
		ROUNDER:number
		RHOMBUS:number
		PARALL:number
		STAR:number
		ARROW_BIG:number
	}

	interface StickerType {
		SQUARE:number
		RECTANGLE:number
	}
}

declare const rtb:SDK.RTB

declare module SDK {
	interface IBoardCommands {
		widgets:IBoardWidgetsCommands
		frames:IBoardFramesCommands

		// Get all kind of objects
		getAllObjects():Promise<IBaseWidget[]>

		// Get certain object by id
		getById<T extends IBaseWidget|IGroupData>(objectId:string):Promise<T|undefined>

		// Delete certain object or objects by id
		deleteById(objectIds:string|string[]):Promise<boolean>

		// Transform objects relative to its position
		transformDelta(objectIds:string|string[], deltaX:number|undefined, deltaY:number|undefined, deltaRotation:number|undefined)

		// Transform objects relative to board coordinates
		transform(transformations:{objectId:string, x:number|undefined, y:number|undefined, rotation:number|undefined}[])

		// Show custom web page in left side of interface
		openLeftSidebar(iframeURL:string):void

		// Show custom web page in right side of interface
		openRightSidebar(iframeURL:string):void

		// Show custom web page in library (three dots button)
		openLibrary(title:string, iframeURL:string):void

		// Show custom web page in modal window
		openModal(iframeURL:string, options?:{maxWidth?:number, maxHeight?:number}):void

		// Close current modal
		closeCurrentModal():void

		// Open confirmation modal window with yes/no buttons
		openConfirmModal(options:IConfirmModalOptions):Promise<boolean>

		// Get basic board info like title, description, creation date, owner etc.
		getInfo():Promise<SDKBoardInfo>

		// Set zoom of viewport
		setZoom(value:number):void

		// Get current zoom of viewport
		getZoom():number

		// Set HAND or CURSOR tool, it depends on current user board' role (viewer, commentor, editor)
		selectDefaultTool():void

		// Get current canvas viewport
		getViewport():IRect

		// Set canvas viewport without animation
		setViewport(viewport:IRect):Promise<IRect>

		// Set canvas viewport with animation
		setViewportWithAnimation(viewport:IRect):Promise<IRect>

		// Set canvas viewport to object
		zoomToObject(objectId:string, selectObject?:boolean):void

		// Get selected widget id after user selects it
		enterSelectWidgetMode():Promise<{widgetId:string}>

		// Select widgets
		selectWidgets(widgetId:string|string[]):void

		// Get current selected widgets
		getSelection():Promise<IBaseWidget[]>
	}

	interface IPluginConfig {
		onStart?:() => void
		onStop?:() => void
		extensionPoints:{
			toolbar?:{
				title:string
				toolbarSvgIcon:string
				librarySvgIcon:string
				onClick:() => void
			}
			bottomBar?:{
				title:string
				svgIcon:string
				positionPriority:number
				onClick:() => void
				getNotification?:() => any // will be called by app every second if exists
			}
			exportMenu?:{
				title:string
				svgIcon:string
				onClick:() => void
				positionPriority:number
			}
		}
	}

	////////////////////////////////////////////////////////////////////////
	// Widgets
	////////////////////////////////////////////////////////////////////////

	type WithBaseWidget<W> = W&IBaseWidget

	interface IBaseWidget {
		id:string
		type:string
		x:number
		y:number
		width:number
		height:number
		rotation:number
		bounds:IBounds
		groupId:string|undefined
	}

	interface IBoardWidgetsCommands {
		images:{
			createByURL(url:string, data?:PartialDeep<IImageWidgetData>):Promise<WithBaseWidget<IImageWidgetData>|undefined>
			get():Promise<WithBaseWidget<IImageWidgetData>[]>
			update(ids:string, data:PartialDeep<IImageWidgetData>):Promise<WithBaseWidget<IImageWidgetData>|undefined>
			update(ids:string[], data:PartialDeep<IImageWidgetData>):Promise<(WithBaseWidget<IImageWidgetData>|undefined)[]>
		}
		stickers:{
			create(data?:PartialDeep<IStickerWidgetData>):Promise<WithBaseWidget<IStickerWidgetData>|undefined>
			get():Promise<WithBaseWidget<IStickerWidgetData>[]>
			update(ids:string, data:PartialDeep<IStickerWidgetData>):Promise<WithBaseWidget<IStickerWidgetData>|undefined>
			update(ids:string[], data:PartialDeep<IStickerWidgetData>):Promise<(WithBaseWidget<IStickerWidgetData>|undefined)[]>
		}
		shapes:{
			create(data?:PartialDeep<IShapeWidgetData>):Promise<WithBaseWidget<IShapeWidgetData>|undefined>
			get():Promise<WithBaseWidget<IShapeWidgetData>[]>
			update(ids:string, data:PartialDeep<IShapeWidgetData>):Promise<WithBaseWidget<IShapeWidgetData>|undefined>
			update(ids:string[], data:PartialDeep<IShapeWidgetData>):Promise<(WithBaseWidget<IShapeWidgetData>|undefined)[]>
		}
		lines:{
			create(data?:PartialDeep<ILineWidgetData>):Promise<WithBaseWidget<ILineWidgetData>|undefined>
			get():Promise<WithBaseWidget<ILineWidgetData>[]>
			update(ids:string, data:PartialDeep<ILineWidgetData>):Promise<WithBaseWidget<ILineWidgetData>|undefined>
			update(ids:string[], data:PartialDeep<ILineWidgetData>):Promise<(WithBaseWidget<ILineWidgetData>|undefined)[]>
		}
		webScreenshots:{
			create(url:string, data?:PartialDeep<IWebScreenshotWidgetData>):Promise<WithBaseWidget<IWebScreenshotWidgetData>|undefined>
			get():Promise<WithBaseWidget<IWebScreenshotWidgetData>[]>
			update(ids:string, data:PartialDeep<IWebScreenshotWidgetData>):Promise<WithBaseWidget<IWebScreenshotWidgetData>|undefined>
			update(ids:string[], data:PartialDeep<IWebScreenshotWidgetData>):Promise<(WithBaseWidget<IWebScreenshotWidgetData>|undefined)[]>
		}
		embeds:{
			create(htmlOrUrl:string, data?:PartialDeep<IEmbedWidgetData>):Promise<WithBaseWidget<IEmbedWidgetData>|undefined>
			get():Promise<WithBaseWidget<IEmbedWidgetData>[]>
			update(ids:string, data:PartialDeep<IEmbedWidgetData>):Promise<WithBaseWidget<IEmbedWidgetData>|undefined>
			update(ids:string[], data:PartialDeep<IEmbedWidgetData>):Promise<(WithBaseWidget<IEmbedWidgetData>|undefined)[]>
		},
		texts:{
			create(data?:PartialDeep<ITextWidgetData>):Promise<WithBaseWidget<ITextWidgetData>|undefined>
			get():Promise<WithBaseWidget<ITextWidgetData>[]>
			update(ids:string, data:PartialDeep<ITextWidgetData>):Promise<WithBaseWidget<ITextWidgetData>|undefined>
			update(ids:string[], data:PartialDeep<ITextWidgetData>):Promise<(WithBaseWidget<ITextWidgetData>|undefined)[]>
		}

		get():Promise<IBaseWidget[]>
		bringForward(widgetId:string|string[]):Promise<void>
		sendBackward(widgetId:string|string[]):Promise<void>
	}

	interface IBoardFramesCommands {
		create(data:PartialDeep<IFrameWidgetData>):Promise<WithBaseWidget<IFrameWidgetData>|undefined>
		get():Promise<WithBaseWidget<IFrameWidgetData>[]>
		update(ids:string, data:PartialDeep<IFrameWidgetData>):Promise<WithBaseWidget<IFrameWidgetData>|undefined>
		update(ids:string[], data:PartialDeep<IFrameWidgetData>):Promise<(WithBaseWidget<IFrameWidgetData>|undefined)[]>
		getFrameChildren(frameId:string):Promise<IBaseWidget[]>
		setFrameChildren(frameId:string, widgetIds:string[]):Promise<void>
	}

	interface IBoardCommentsCommands {
		get():Promise<WithBaseWidget<ICommentData>[]>
	}

	interface IBoardGroupsCommands {
		get():Promise<IGroupData[]>
	}

	interface IGroupData {
		id:string
		bounds:IBounds
		childrenIds:string[]
	}

	////////////////////////////////////////////////////////////////////////
	// Widget data types
	////////////////////////////////////////////////////////////////////////

	interface ITextWidgetData {
		x:number
		y:number
		width:number
		height:number
		rotation:number
		text:string
		style:{
			backgroundColor:string|number
			backgroundOpacity:number
			borderColor:string|number
			borderWidth:number
			borderStyle:number
			fontSize:number
			textColor:string|number
			textAlign:string
		}
	}

	interface IImageWidgetData {
		x:number
		y:number
		rotation:number
		width:number
		title:string
	}

	interface IStickerWidgetData {
		x:number
		y:number
		width:number
		text:string
		style:{
			stickerBackgroundColor:string
			fontSize:number
			textAlign:string
			stickerType:number
		}
	}

	interface IShapeWidgetData {
		x:number
		y:number
		width:number
		height:number
		rotation:number
		text:string
		style:IShapeWidgetStyleData
	}

	interface IShapeWidgetStyleData {
		shapeType:number
		backgroundColor:string|number
		backgroundOpacity:number
		borderColor:string|number
		borderWidth:number
		borderStyle:number
		fontSize:number
		textColor:string|number
		textAlign:string
		textAlignVertical:string
	}

	interface ILineWidgetData {
		startWidgetId:string
		endWidgetId:string
		startPosition:IPoint
		endPosition:IPoint
		style:{
			type:string
			borderColor:string
			borderWidth:number
			borderStyle:string
		}
	}

	interface IWebScreenshotWidgetData {
		x:number
		y:number
		width:number
		rotation:number
		url:string
	}

	interface IFrameWidgetData {
		x:number
		y:number
		width:number
		height:number
		title:string
		frameIndex:number
		childrenIds:string[]
		style:{
			backgroundColor:string
		}
	}

	interface ICurveWidgetData {
		points:IPoint[]
		style:{
			lineColor:string
			lineWidth:number
		}
	}

	interface IEmbedWidgetData {
		x:number
		y:number
		width:number
		html:string
	}

	interface IPreviewWidgetData {
		url:string
	}

	interface ICommentData {
		color:number
		resolved:boolean
	}

	interface IDocumentWidgetData {
		title:string
	}

	interface IMockupWidgetData {
		mockupType:string
	}

	////////////////////////////////////////////////////////////////////////
	// Helpers data
	////////////////////////////////////////////////////////////////////////

	interface SDKBoardInfo {
		id:string
		title:string
		description:string
		owner:SDKUserInfo
		ownerName:string
		picture:SDKPictureInfo
		currentUserPermission:SDKBoardPermissionInfo
		account:SDKAccountInfo
		lastModifyingUser:SDKUserInfo
		lastModifyingUserName:string
		lastViewedByMeDate:string
		modifiedByMeDate:string
		createdAt:string
		updatedAt:string
	}

	interface SDKUserInfo {
		id:string
		name:string
		email:string
		picture:SDKPictureInfo
	}

	interface SDKAccountInfo {
		id:string
		role?:string
		title:string
		picture:any
		type:string
	}

	interface SDKPictureInfo {
		big:string
		medium:string
		small:string
		resourceId:string
		size44:string
		size180:string
		size210:string
		size420:string
		image:string //original picture
	}

	interface SDKBoardPermissionInfo {
		id:string
		role:string
		permissions:string[]
	}

	interface DraggableImageOptions {
		isTouchEvent:boolean
		preview:{
			width?:number
			height?:number
			url:string
		}
		image:DroppedImageOptions
	}

	interface DroppedImageOptions {
		width?:number
		height?:number
		url:string
	}

	interface IConfirmModalOptions {
		caption:string
		text:string
		confirmButtonText:string
		cancelButtonText:string
	}
}

type PartialDeep<T> = { [P in keyof T]?:PartialDeep<T[P]> }

interface IRect {
	x:number
	y:number
	width:number
	height:number
}

interface IPoint {
	x:number
	y:number
}

interface IBounds {
	top:number
	left:number
	bottom:number
	right:number
	width:number
	height:number
}
