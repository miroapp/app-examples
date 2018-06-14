type EventNames = 'WIDGET_SELECTED'|'WIDGET_CREATED'

type CanvasObjectType =
	//widgets
	'TEXT'|
	'STICKER'|
	'IMAGE'|
	'DOCUMENT'|
	'MOCKUP'|
	'SHAPE'|
	'LINE'|
	'VIDEO'|
	'CURVE'|
	'WEBSCREEN'|

	// non-widgets
	'GROUP'|
	'COMMENT'|
	'FRAME'|
	'TAG'|
	'JSON'

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

interface ISize {
	width:number
	height:number
}

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
	preview:{
		width:number
		height:number
		url:string
	},
	image:{
		width:number
		height:number
		url:string
	}
}

interface IBounds {
	top:number
	left:number
	bottom:number
	right:number
	width:number
	height:number
}

////////////////////////////////////////////////////////////////////////
// Widgets
////////////////////////////////////////////////////////////////////////

interface IBaseWidget {
	id:string
	type:string
	x:number
	y:number
	width:number
	height:number
	rotation:number
	bounds:IBounds
	customData:any
}

interface IBoardWidgetsCommands {
	images:{
		createByURL(url:string, data:IImageWidgetData):Promise<IImageWidgetData&IBaseWidget|undefined>
		get():Promise<IImageWidgetData&IBaseWidget[]>
		update(ids:string|string[], data:IImageWidgetData):Promise<IImageWidgetData&IBaseWidget[]>
	}
	stickers:{
		create(data:IStickerWidgetData):Promise<IStickerWidgetData&IBaseWidget>
		get():Promise<IStickerWidgetData&IBaseWidget[]>
		update(ids:string|string[], data:IStickerWidgetData):Promise<IStickerWidgetData&IBaseWidget|undefined[]>
	}
	shapes:{
		create(data:IShapeWidgetData):Promise<IShapeWidgetData&IBaseWidget>
		get():Promise<IShapeWidgetData&IBaseWidget[]>
		update(ids:string|string[], data:IShapeWidgetData):Promise<IShapeWidgetData&IBaseWidget[]>
	}
	lines:{
		create(data:ILineWidgetData):Promise<ILineWidgetData&IBaseWidget>
		get():Promise<ILineWidgetData&IBaseWidget[]>
		update(ids:string|string[], data:ILineWidgetData):Promise<ILineWidgetData&IBaseWidget[]>
	}
	webScreenshots:{
		create(url:string, data:IWebScreenshotWidgetData):Promise<IWebScreenshotWidgetData&IBaseWidget>
		get():Promise<IWebScreenshotWidgetData&IBaseWidget[]>
		update(ids:string|string[], data:IWebScreenshotWidgetData):Promise<IWebScreenshotWidgetData&IBaseWidget[]>
	}
	embeds:{
		create(htmlCode:string, data:IEmbedWidgetData):Promise<IEmbedWidgetData&IBaseWidget>
		get():Promise<IEmbedWidgetData&IBaseWidget[]>
		update(ids:string|string[], data:IEmbedWidgetData):Promise<IEmbedWidgetData&IBaseWidget[]>
	}

	getWidgets():Promise<IBaseWidget[]>
	bringForward(widgetId:string|string[])
	sendBackward(widgetId:string|string[])
}

////////////////////////////////////////////////////////////////////////
// Image
////////////////////////////////////////////////////////////////////////

interface IImageWidgetData {
	x?:number
	y?:number
	width?:number
	caption?:string
}

////////////////////////////////////////////////////////////////////////
// Sticker
////////////////////////////////////////////////////////////////////////

interface IStickerWidgetData {
	x?:number
	y?:number
	width?:number // default depends on stickerType
	text?:string // default = ''
	//todo not implemented - move to style
	//stickerType?:number, // default = 0 // 'SQUARE', todo replace to sdk.enums.StickerType.SQUARE, move to style
	style?:IStickerStyleData
}

interface IStickerStyleData {
	backgroundColor?:string
	fontSize?:number
	textAlign?:string
}

////////////////////////////////////////////////////////////////////////
// Shape
////////////////////////////////////////////////////////////////////////

interface IShapeWidgetData {
	x?:number
	y?:number
	width?:number
	height?:number
	rotation?:number
	text?:string
	style?:IShapeStyleData
}

interface IShapeStyleData {
	backgroundColor?:string|number
	backgroundOpacity?:number
	borderColor?:string|number
	borderWidth?:number
	borderStyle?:number
	fontSize?:number
	textColor?:string|number
	textAlign?:string
	textAlignVertical?:string
}

////////////////////////////////////////////////////////////////////////
// Line
////////////////////////////////////////////////////////////////////////

interface ILineWidgetData {
	startWidgetId?:string
	endWidgetId?:string
	startPosition?:IPoint
	endPosition?:IPoint
	readonly size?:ISize
	style?:ILineStyleData
}

interface ILineStyleData {
	type?:string
	borderColor?:string
	borderWidth?:number
	borderStyle?:string
}

////////////////////////////////////////////////////////////////////////
// WebScreenshot
////////////////////////////////////////////////////////////////////////

interface IWebScreenshotWidgetData {
	x?:number
	y?:number
	width?:number
	rotation?:number
}

////////////////////////////////////////////////////////////////////////
// Frame
////////////////////////////////////////////////////////////////////////

interface IFrameWidgetData {
	x?:number
	y?:number
	width?:number
	height?:number
	caption?:string
	style?:IFrameStyleData
}

interface IFrameStyleData {
	//todo sdk implement
}

////////////////////////////////////////////////////////////////////////
// Embed
////////////////////////////////////////////////////////////////////////

interface IEmbedWidgetData {
	x?:number
	y?:number
	width?:number
}
