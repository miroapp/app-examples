interface IUIBoardCommands {
	openLeftSidebar(url:string):Promise<void>
	openRightSidebar(url:string):Promise<void>
}

interface IBoardCommands {
	ui:IUIBoardCommands
	getInfo():Promise<any>
	setZoom(value:number)
	selectTool():Promise<void>
	getZoom():Promise<number>
	createWidget():Promise<{widgetId:string}>
	getViewport():Promise<any>
	setViewport():void
	selectWidgets():void
	setBackgroundColor(color:number):Promise<void>
}

interface IPluginConfig {
	onStart?:() => void,
	onStop?:() => void,
	extensionPoints?:{
		toolbar?:{
			title:string,
			toolbarSvgIcon:string,
			librarySvgIcon:string,
			onClick?:() => void
		},
		bottomBar?:{
			title:string,
			svgIcon:string,
			onClick:() => void
			getNotification?: () => any // Если обработчик есть, то он опрашивается приложением раз в секунду
		},
		exportMenu?:{
			title:string,
			svgIcon:string,
			onClick:() => void
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

interface RtbSDK {
	// for sandbox only
	initialize(config:IPluginConfig)

	// for iframe extension point only
	onReady(callback:() => any)

	//common
	board:IBoardCommands

	addListener()
	removeListener()
}

declare const rtb:RtbSDK