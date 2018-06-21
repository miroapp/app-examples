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

interface IConfirmModalOptions {
	caption:string
	text:string
	confirmButtonText:string
	cancelButtonText:string
}

interface IBoardWidgetsCommands {
	images:{
		createByURL(url:string, data?:IImageWidgetData):Promise<IImageWidgetData&IBaseWidget|undefined>
		get():Promise<IImageWidgetData&IBaseWidget[]>
		update(ids:string, data:IImageWidgetData):Promise<IImageWidgetData&IBaseWidget|undefined>
		update(ids:string[], data:IImageWidgetData):Promise<(IImageWidgetData&IBaseWidget|undefined)[]>
	}
	stickers:{
		create(data?:IStickerWidgetData):Promise<IStickerWidgetData&IBaseWidget|undefined>
		get():Promise<IStickerWidgetData&IBaseWidget[]>
		update(ids:string, data:IStickerWidgetData):Promise<IStickerWidgetData&IBaseWidget|undefined>
		update(ids:string[], data:IStickerWidgetData):Promise<(IStickerWidgetData&IBaseWidget|undefined)[]>
	}
	shapes:{
		create(data?:IShapeWidgetData):Promise<IShapeWidgetData&IBaseWidget|undefined>
		get():Promise<IShapeWidgetData&IBaseWidget[]>
		update(ids:string, data:IShapeWidgetData):Promise<IShapeWidgetData&IBaseWidget|undefined>
		update(ids:string[], data:IShapeWidgetData):Promise<(IShapeWidgetData&IBaseWidget|undefined)[]>
	}
	lines:{
		create(data?:ILineWidgetData):Promise<ILineWidgetData&IBaseWidget|undefined>
		get():Promise<ILineWidgetData&IBaseWidget[]>
		update(ids:string, data:ILineWidgetData):Promise<ILineWidgetData&IBaseWidget|undefined>
		update(ids:string[], data:ILineWidgetData):Promise<(ILineWidgetData&IBaseWidget|undefined)[]>
	}
	webScreenshots:{
		create(url:string, data?:IWebScreenshotWidgetData):Promise<IWebScreenshotWidgetData&IBaseWidget|undefined>
		get():Promise<IWebScreenshotWidgetData&IBaseWidget[]>
		update(ids:string, data:IWebScreenshotWidgetData):Promise<IWebScreenshotWidgetData&IBaseWidget|undefined>
		update(ids:string[], data:IWebScreenshotWidgetData):Promise<(IWebScreenshotWidgetData&IBaseWidget|undefined)[]>
	}
	embeds:{
		create(htmlCode:string, data?:IEmbedWidgetData):Promise<IEmbedWidgetData&IBaseWidget|undefined>
		get():Promise<IEmbedWidgetData&IBaseWidget[]>
		update(ids:string, data:IEmbedWidgetData):Promise<IEmbedWidgetData&IBaseWidget|undefined>
		update(ids:string[], data:IEmbedWidgetData):Promise<(IEmbedWidgetData&IBaseWidget|undefined)[]>
	}

	getWidgets():Promise<IBaseWidget[]>
	bringForward(widgetId:string|string[]):Promise<void>
	sendBackward(widgetId:string|string[]):Promise<void>
}

interface IBoardFramesCommands {
	create(data:IFrameWidgetData):Promise<IFrameWidgetData&IBaseWidget>
	get():Promise<IFrameWidgetData&IBaseWidget[]>
	update(ids:string, data:IFrameWidgetData):Promise<IFrameWidgetData&IBaseWidget>
	update(ids:string[], data:IFrameWidgetData):Promise<(IFrameWidgetData&IBaseWidget|undefined)[]>
	getFrameChildren(frameId:string):Promise<IBaseWidget[]>
	setFrameChildren(frameId:string, widgetIds:string[]):Promise<void>
}

interface IBoardCommentsCommands {
	get():Promise<ICommentData&IBaseWidget[]>
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
	x?:number
	y?:number
	width?:number
	height?:number
	rotation?:number
	text?:string
	style?:ITextStyleData
}

interface ITextStyleData {
	backgroundColor?:string|number
	backgroundOpacity?:number
	borderColor?:string|number
	borderWidth?:number
	borderStyle?:number
	fontSize?:number
	textColor?:string|number
	textAlign?:string
}

interface IImageWidgetData {
	x?:number
	y?:number
	rotation?:number
	width?:number
	title?:string
}

interface IStickerWidgetData {
	x?:number
	y?:number
	width?:number
	text?:string
	style?:IStickerStyleData
}

interface IStickerStyleData {
	stickerBackgroundColor?:string
	fontSize?:number
	textAlign?:string
	stickerType?:number
}

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
	shapeType?:number
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

interface ILineWidgetData {
	startWidgetId?:string
	endWidgetId?:string
	startPosition?:IPoint
	endPosition?:IPoint
	style?:ILineStyleData
}

interface ILineStyleData {
	type?:string
	borderColor?:string
	borderWidth?:number
	borderStyle?:string
}

interface IWebScreenshotWidgetData {
	x?:number
	y?:number
	width?:number
	rotation?:number
	url?:string
}

interface IFrameWidgetData {
	x?:number
	y?:number
	width?:number
	height?:number
	title?:string
	frameIndex?:number
	style?:IFrameStyleData
}

interface IFrameStyleData {
	backgroundColor?:string
}

interface ICurveWidgetData {
	points?:IPoint[]
	style?:ICurveStyleData
}

interface ICurveStyleData {
	lineColor?:string
	lineWidth?:number
}

interface IEmbedWidgetData {
	x?:number
	y?:number
	width?:number
	url?:string
	innerHTML?:string
}

interface IPreviewWidgetData {
	url?:string
}

interface ICommentData {
	color?:number
	resolved?:boolean
}

interface IDocumentWidgetData {
	title?:string
}

interface IMockupWidgetData {
	mockupType?:string
}
