interface SDKEventType {
	SELECTION_UPDATED:string
	WIDGETS_CREATED:string
	WIDGETS_DELETED:string
	WIDGETS_TRANSFORMATION_UPDATED:string
}

interface SDKShapeType {
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

interface SDKStickerType {
	SQUARE:number
	RECTANGLE:number
}

interface IEnums {
	readonly event:SDKEventType
	readonly shapeType:SDKShapeType
	readonly stickerType:SDKStickerType
}

// paste from here:
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

type PartialDeep<T> = {[P in keyof T]?: PartialDeep<T[P]>}

declare module SDK {
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
		},
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
			create(htmlCode:string, data?:PartialDeep<IEmbedWidgetData>):Promise<WithBaseWidget<IEmbedWidgetData>|undefined>
			get():Promise<WithBaseWidget<IEmbedWidgetData>[]>
			update(ids:string, data:PartialDeep<IEmbedWidgetData>):Promise<WithBaseWidget<IEmbedWidgetData>|undefined>
			update(ids:string[], data:PartialDeep<IEmbedWidgetData>):Promise<(WithBaseWidget<IEmbedWidgetData>|undefined)[]>
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
		url:string
		innerHTML:string
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
}