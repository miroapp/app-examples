///<reference path="rtb.helpers.d.ts" />

declare module SDK {
	interface IBoardCommands {
		widgets:IBoardWidgetsCommands
		frames:IBoardFramesCommands
		comments:IBoardCommentsCommands
		groups:IBoardGroupsCommands

		getAllObjects():Promise<IBaseWidget[]>
		getById<T>(objectId:string):Promise<T|undefined>
		deleteById(objectIds:string|string[]):Promise<boolean>
		transformDelta(objectIds:string|string[], deltaX:number|undefined, deltaY:number|undefined, deltaRotation:number|undefined)
		transform(transformations:{objectId:string, x:number|undefined, y:number|undefined, rotation:number|undefined}[])

		// iframe extension points
		openLeftSidebar(iframeURL:string):void
		openRightSidebar(iframeURL:string):void

		// I am not sure about 'title' parameter
		openLibrary(title:string, iframeURL:string):void
		openModal(iframeURL:string, options?:{maxWidth?:number, maxHeight?:number}):void
		closeCurrentModal():void
		openConfirmModal(options:IConfirmModalOptions):Promise<boolean>

		// get basic board info
		getInfo():Promise<SDKBoardInfo>

		setZoom(value:number):void
		getZoom():number

		// set HAND or CURSOR tool, depends on  EDIT_RIGHTS
		selectDefaultTool():void

		// get current canvas viewport
		getViewport():IRect

		// set canvas viewport
		setViewport(viewport:IRect):Promise<IRect>
		setViewportWithAnimation(viewport:IRect):Promise<IRect>
		zoomToObject(objectId:string, selectObject?:boolean):void

		// get selected widget id after user selects it
		enterSelectWidgetMode():Promise<{widgetId:string}>

		// select target widgets
		selectWidgets(widgetId:string|string[]):void

		// return current selected widgets
		getSelection():Promise<IBaseWidget[]>

		// drop images to board
		// for iframe extension point only
		draggableImagePressed(options:DraggableImageOptions):Promise<IBaseWidget|undefined>
	}

	interface IPluginConfig {
		onStart?:() => void
		onStop?:() => void
		extensionPoints:{
			upload?:{
				title:string,
				svgIcon:string,
				onClick:() => void
			},
			toolbar?:{
				title:string,
				toolbarSvgIcon:string,
				librarySvgIcon:string,
				onClick:() => void
			},
			bottomBar?:{
				title:string,
				svgIcon:string,
				positionPriority:number,
				onClick:() => void,
				getNotification?:() => any // Если обработчик есть, то он опрашивается приложением раз в секунду
			},
			exportMenu?:{
				title:string,
				svgIcon:string,
				onClick:() => void
				positionPriority:number
			}
			widgetContextMenu?:{
				widgetTypes:[string],
				tooltip:string,
				onClick:(widgetId:string) => void
			},
			canvasContextMenu?:{
				title:string,
				onClick:() => void
			}
		}
	}

	interface Helpers {
		initScrollableContainerWithDraggableImages(container:Element, options:{
			draggableImageSelector:string
		}):HTMLElement
	}

	interface RTB {
		// for sandbox only
		initialize(config:IPluginConfig)

		// for iframe extension point only
		onReady(callback:() => any)

		//common
		board:IBoardCommands

		addListener(event:string, listener:(e) => void)
		removeListener(event:string, listener:(e) => void)

		showNotification(text:string)
		showErrorNotification(text:string)

		helpers:SDK.Helpers
		enums:IEnums
	}

}

declare const rtb:SDK.RTB