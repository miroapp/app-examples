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

interface SDKWidgetInfo {
	id:string
	type:CanvasObjectType
	bounds:IRect
}

interface SDKLinkInfo {
	bounds:IRect
	widgetAId:string
	widgetBId:string
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