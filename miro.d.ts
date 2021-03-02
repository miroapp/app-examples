/**
 * Start here
 */
declare const miro: SDK.Root

/**
 * Here you will find a full reference to all publicly available methods in
 * the Miro SDK for web plugins development.
 *
 * The [[Root]] interface contains the SDK main commands and is a good starting point.
 *
 */
declare namespace SDK {
  /**
   * This is the same **`window.miro`** Object and will be your main entry point to the SDK methods.
   *
   * @meta-title The `window.miro` Object
   * @category General
   */
  interface Root {
    /**
     * Callback executed when everything is loaded and ready to use SDK methods.
     * @param callback Function to be executed
     * @returns
     *
     * **Example**
     * ```javascript
     * miro.onReady(() => {
     *  console.log("Ready to call SDK methods")
     * }
     * ```
     */
    onReady(callback: () => void): void
    /**
     * Accepts a configuration to initialize the plugin.
     *
     * Available only on a board. Not available in iframes from [Container Entry points](https://developers.miro.com/docs/extension-points-for-miro-apps)
     *
     * **Example**
     * ```javascript
     * miro.onReady(() => {
     *   miro.initialize({
     *     //plugin configuration
     *   });
     * }
     * ```
     */
    initialize(config?: IPluginConfig): Promise<void>

    /**
     * Accepts a configuration to initialize the plugin in the settings page.
     * Available only in the setting page.
     *
     * **Example**
     * ```javascript
     * miro.onReady(() => {
     *   miro.initializeSettings({
     *     //plugin configuration
     *   });
     * }
     * ```
     *
     */
    initializeSettings(config?: IPluginSettingsConfig): Promise<void>

    /**
     * The current board the user is watching.
     * Contains commands (functions) to access to the board information.
     *
     * Available only when the Web-plugin runs in a board
     *
     */
    board: IBoardCommands

    /**
     * Contains commands (functions) to access to the Account (Team)
     * where the Web-plugin was installed
     *
     * *Note*: this is not the current user
     */
    account: IAccountCommands

    /**
     * The current user.
     * Contains commands (functions) to access to the current user information.
     */
    currentUser: ICurrentUserCommands

    /**
     * Contains constants like events and style that can be used with other SDK methods
     */
    enums: IEnums

    /**
     * Subscribe to an event in the board.
     * Go to [[EventType]] to see a list of possible events.
     *
     * *Note*: Available only when the Web plugin runs on a board page.
     * @param event A string with an event as defined in [[EventType]]
     * @param listener A function to handle the [[Event]]
     * @return void
     *
     * **Example**
     * ```javascript
     * function handleSelectionUpdated(event) {
     *   // Your event handler
     * }
     * miro.addListener('SELECTION_UPDATED', handleSelectionUpdated)
     * ```
     * *Related: See [[removeListener]] to remove a listener*
     */
    addListener(event: EventType, listener: (e: Event) => void): void

    /**
     * Unsubscribe from an event in the board.
     * Go to [[EventType]] to see a list of possible events.
     *
     * *Note*: Available only when the Web plugin runs on a board page.
     * @param event A string with an event as defined in [[EventType]]
     * @param listener The function originally passed in [[addListener]] to handle the event
     * @return void
     *
     *
     * **Example**
     *
     * ```javascript
     * miro.removeListener('SELECTION_UPDATED', handleSelectionUpdated)
     * ```
     * *Related: See [[addListener]] to add a listener*
     */
    removeListener(event: EventType, listener: (e: Event) => void): void

    /**
     * Broadcast some data to iframes from your plugin in [Container Entry Points](https://developers.miro.com/docs/extension-points-for-miro-apps)
     *
     * You can subscribe to the `DATA_BROADCASTED` event to receive this data.
     * See [[addListener]] and [[EventType]]
     *
     * @param data The payload you wish to broadcast
     * @returns void
     *
     * **Example**
     * ```javascript
     * miro.broadcastData({
     *  value: 1
     * })
     * ```
     */
    broadcastData(data: any): void

    /**
     * Shows a notification to the user
     * @param text The text to show in the notification
     * @returns A Promise, fulfilled when the notification is displayed to the user
     *
     * **Example**
     * ```javascript
     * miro.showNotification('Hello world')
     * ```
     */
    showNotification(text: string): Promise<void>

    /**
     * Similar to [[showNotification]] with additional style to indicate error
     * @param text The text to show in the notification
     * @returns A Promise, fulfilled when the notification is displayed to the user
     * **Example**
     * ```javascript
     * miro.showErrorNotification('This is an error notification')
     * ```
     */
    showErrorNotification(text: string): Promise<void>

    /**
     * Check if the current user has authorized the Web-plugin to make API requests
     * on their behalf
     * @returns True if the web plugin is authorized, false when not.
     *
     * **Example**
     *
     * ```javascript
     * miro.isAuthorized().then( (isAuthorized) => {
     *   if (isAuthorized) {
     *     console.log('Web plugin authorized');
     *   } else {
     *     console.log('Unauthorized');
     *   }
     * })
     * ```
     */
    isAuthorized(): Promise<boolean>

    /**
     * **Deprecated**
     * This method is deprecated. Use [`getIdToken()`](#gettoken) instead.
     *
     * @deprecated
     */
    getToken(): Promise<string>

    /**
     * Get a JSON Web Token (JWT) containing current user claims.
     *
     * To check the content of the JWT token you can use the [JWT debugger](https://jwt.io)
     *
     * @returns a JWT token
     *
     * **Example**
     * ```javascript
     * miro.getIdToken().then((jwt) =>{
     *   console.log('jwt token', jwt);
     * })
     * ```
     */
    getIdToken(): Promise<string>

    /**
     * Opens a popup to follow the authorization process for your App.
     *
     * *Note: It is possible the browser will block the authorization popup, make sure to call this method upon
     * an user click interaction in your domain.
     *
     * @param options Options for the authorization process. See [[AuthorizationOptions]]
     * @returns A promise resolving into an oAuth token.
     *
     */
    authorize(options: AuthorizationOptions): Promise<string>

    /**
     * Returns the clientId from the web plugin.
     * This is the same clientId from the App settings dashboard.
     * @returns The web plugin clientId.
     */
    getClientId(): string

    /**
     * Saves a state (any) that can will be accessible across all
     * the container extension points (iframes) from your plugin.
     *
     * You can retrieve this state with [[__getRuntimeState]]
     *
     * *Note: This state is not persisted between boards or page reloads.*
     *
     * @experimental
     *
     * @returns A promise resolving into the previously saved state. Defaults to an empty object.
     *
     */
    __setRuntimeState<T = any>(data: T): Promise<T>
    /**
     * Gets a previously set state from any container extension point (iframe) from your plugin.
     *
     * You can set this state with [[__setRuntimeState]]
     *
     * *Note: This state is not persisted between boards or page reloads.*
     *
     * @experimental
     *
     * @returns A promise resolving into the stored state.
     */
    __getRuntimeState<T = any>(): Promise<T>
  }

  /**
   * Constant defining different events that can be triggered by the main application.
   *
   * The following events are experimental and can be unstable:
   *
   * * ESC_PRESSED
   * * ALL_WIDGETS_LOADED
   * * COMMENT_CREATED
   * * CANVAS_CLICKED
   * * DATA_BROADCASTED
   * * RUNTIME_STATE_UPDATED
   * * METADATA_CHANGED
   * * ONLINE_USERS_CHANGED
   * @category General
   */
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
    | 'METADATA_CHANGED' //Experimental event
    | 'ONLINE_USERS_CHANGED' //Experimental event

  /**
   * An Event generated by the main application.
   *
   * You can subscribe to events using [[addListener]]
   * @category General
   */
  interface Event {
    /**
     * The type of event as in [[EventIBoardCommentsCommandspe]]
     */
    type: string | EventType
    /**
     * Payload with data related to the event
     */
    data: any
  }

  /**
   * Authorization options for the authorization flow.
   * See [[authorize]]
   * @category Account and User
   */
  interface AuthorizationOptions {
    /**
     * The kind of response expected from the authorization.
     *
     * This must be `code` to request an auth token
     */
    response_type: 'code'
    /**
     * Requested scopes.
     */
    scope?: string
    /**
     * The url the user will be redirected after the authorization.
     * This url must be registered in your app "Redirect URLs" list.
     */
    redirect_uri?: string
    /**
     * oAuth state parameter. It will be send back to the defined `redirect_uri`.
     */
    state?: string
  }

  /**
   * Options to initialize the plugin in the settings page.
   * @category General
   *
   */
  interface IPluginSettingsConfig {
    /**
     * Height for your plugin iframe
     */
    iframeHeight: number
  }

  /**
   * Defines the configuration to initialize the web plugin
   * See [`IPluginConfigExtensionPoints`] for further information.
   * @category General
   */
  interface IPluginConfig {
    /**
     * Configuration options
     * @inline
     */
    extensionPoints: IPluginConfigExtensionPoints
  }

  /**
   * Extensions points allow you to enhance the user interface with buttons.
   *
   * You can define your own buttons using these extensions points, each extension
   * points accepts a specific configuration and has its own limitations.
   *
   * Some extensions points only allow you to add up to one button.
   *
   *
   * Read more about [Extension Points](https://developers.miro.com/docs/extension-points-for-miro-apps)
   * @category Extension Points
   */
  interface IPluginConfigExtensionPoints {
    /**
     * The toolbar seen on the left side of the board
     *
     * You can directly define a [[ToolbarButton]] or a function returning a
     * promise that resolves on one.
     *
     * **Example**
     * ```javascript
     * miro.onReady(() => {
     *   miro.initialize({
     *     extensionPoints: {
     *       toolbar: {
     *         title: "The button title",
     *         librarySvgIcon:
     *           '<circle cx="12" cy="12" r="9" fill="blue" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
     *         toolbarSvgIcon:
     *           '<circle cx="12" cy="12" r="9" fill="red" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
     *         onClick: () => {
     *           miro.showNotification("You clicked a toolbar item!");
     *         },
     *       },
     *     },
     *   });
     * });
     *
     * ```
     */
    toolbar?: ButtonExtensionPoint<ToolbarButton>
    /**
     * The toolbar seen on the bottom left side of the board
     *
     * You can directly define a [[BottomBarButton]] or a function returning a
     * promise that resolves on one.
     *
     * **Example**
     * ```javascript
     * miro.onReady(() => {
     *   miro.initialize({
     *     extensionPoints: {
     *       bottomBar: {
     *         title: "The button title",
     *         svgIcon:
     *           '<circle cx="12" cy="12" r="9" fill="blue" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
     *         onClick: () => {
     *           miro.showNotification("You clicked a bottom bar item!");
     *         },
     *       },
     *     },
     *   });
     * });
     * ```
     */
    bottomBar?: ButtonExtensionPoint<BottomBarButton>
    /**
     * The toolbar seen when the user opens the export menu.
     *
     * You can directly define a [[ExportMenuButton]] or a function returning a
     * promise that resolves on one.
     *
     * **Example**
     * ```javascript
     * miro.onReady(() => {
     *   miro.initialize({
     *     extensionPoints: {
     *       exportMenu: {
     *         title: "The button title",
     *         svgIcon:
     *           '<circle cx="12" cy="12" r="9" fill="red" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
     *         onClick: () => {
     *           miro.showNotification("You clicked a export menu item!");
     *         },
     *       },
     *     },
     *   });
     * });
     *
     * ```
     *
     */
    exportMenu?: ButtonExtensionPoint<ExportMenuButton>

    /**
     *
     * **Deprecated**
     * This method is deprecated.
     *
     * @deprecated
     */
    getWidgetMenuItems?: (widgets: IWidget[], editMode: boolean) => Promise<IWidgetMenuItem | IWidgetMenuItem[]>
  }

  /**
   * @category Extension Points
   */
  type ButtonExtensionPoint<T> = T | (() => Promise<T | void>)

  /**
   * Defines a button in the toolbar extension point.
   * The toolbar is displayed on the left side of the board.
   *
   * By default your icon will be only displayed on the library.
   *
   * See [[IPluginConfigExtensionPoints]] for examples.
   *
   * Read more about [Extension Points](https://developers.miro.com/docs/extension-points-for-miro-apps)
   *
   * @category Extension Points
   */
  interface ToolbarButton {
    /**
     * The title of the button, It will be displayed on mouse over.
     */
    title: string
    /**
     * The icon that will be displayed on the library (when clicking the dots `...` icon
     * in the toolbar).
     * Must be an [SVGElement](https://developer.mozilla.org/en-US/docs/Web/SVG/Element)
     *
     * By default your button will be displayed here.
     * The user must drag and drop you plugin icon from the library into the toolbar to display it directly in
     * the toolbar.
     */
    librarySvgIcon: string
    /**
     * The icon that will be displayed in the toolbar after the user drag it from the library.
     * Must be an [SVG Element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element)
     */
    toolbarSvgIcon: string
    /**
     * A handler to be executed when the user clicks the button
     */
    onClick: () => void
  }

  /**
   * Defines a button in the bottom bar extension point.
   * The bottom bar is displayed on the bottom left side of the board.
   *
   * See [[IPluginConfigExtensionPoints]] for examples.
   *
   * Read more about [Extension Points](https://developers.miro.com/docs/extension-points-for-miro-apps)
   * @category Extension Points
   */
  interface BottomBarButton {
    /**
     * The title of the button, It will be displayed  on mouse over.
     */
    title: string
    /**
     * The icon that will be displayed.
     * Must be an [SVGElement](https://developer.mozilla.org/en-US/docs/Web/SVG/Element)
     */
    svgIcon: string
    /**
     * A handler to be executed when the user clicks the button
     */
    onClick: () => void
  }

  /**
   * Defines a button in the export menu extension point.
   * The export buttons appears after the user click the "export" button in a board.
   *
   * See [[IPluginConfigExtensionPoints]] for examples.
   *
   * Read more about [Extension Points](https://developers.miro.com/docs/extension-points-for-miro-apps)
   * @category Extension Points
   */
  interface ExportMenuButton {
    /**
     * The title of the button., It will be displayed  on mouse over.
     *
     * See [[IPluginConfigExtensionPoints]] for examples.
     *
     */
    title: string
    /**
     * The icon that will be displayed.
     * Must be an [SVGElement](https://developer.mozilla.org/en-US/docs/Web/SVG/Element)
     */
    svgIcon: string
    /**
     * A handler to be executed when the user clicks the button
     */
    onClick: () => void
  }

  /**
   * **Deprecated**
   * This method is deprecated.
   * @deprecated
   */
  interface IWidgetMenuItem {
    tooltip: string
    svgIcon: string
    onClick: () => void
  }

  /**
   * Possible functions (commands) that you can execute
   * on the current board.
   *
   * The specific commands and examples are defined on its own section.
   * @category Board Manipulation
   */
  interface IBoardCommands {
    /**
     * Command related to the board information
     */
    info: IBoardInfoCommands
    /**
     * Commands related to widgets like create, update, delete and metadata.
     */
    widgets: IBoardWidgetsCommands
    /**
     * Commands related to tags
     */
    tags: IBoardTagsCommands
    /**
     * Commands related to the user interface control
     */
    ui: IBoardUICommands
    /**
     * Commands related to the board viewport
     */
    viewport: IBoardViewportCommands
    /**
     * Commands related to the selection of widgets in the board
     */
    selection: IBoardSelectionCommands

    /**
     * Utilities to work with the board
     */
    utils: IBoardUtils

    /**
     * Returns the deserialized parameters contained in the `miro_sdk` address (location.href) query parameter.
     * @returns A promise resolving into the deserialized data in the `miro_sdk` query parameter.
     * @experimental
     */
    __getParamsFromURL(): Promise<any>
    /**
     * Enables the usage of the mouse left button on the board.
     * It has no effect if the left button was not previously disabled.
     * @experimental
     */
    __enableLeftClickOnCanvas(): void
    /**
     * Disable the usage of the mouse left button on the board.
     * @experimental
     */
    __disableLeftClickOnCanvas(): void
  }

  /**
   * Options to define the conditions and behavior of draggable items
   * @category Extension Points
   */
  interface DraggableItemsContainerOptions {
    /**
     * Allows to block the device (e.g. a tablet or smartphone) scrolling while the dragging takes place.
     * This option will have no effect on mouse-enabled devices like a desktop PC.
     *
     * Possible values: `horizontal` and `vertical`
     * Defaults to `horizontal`
     */
    dragDirection?: string

    /**
     * A CSS selector. HTMLElement inside the container matching this selector will be draggable.
     */
    draggableItemSelector: string

    /**
     * A callback executed when the user starts dragging.
     */
    getDraggableItemPreview: (
      targetElement: HTMLElement,
    ) => {
      /**
       * defaults to 100
       */
      width?: number
      /**
       * defaults to 100
       */
      height?: number
      /**
       * An image following the cursor while the dragging takes place.
       * Supported schemas: 'https://', 'data:image/svg+xml', 'data:image/png;base64'
       */
      url: string
    }

    /**
     * A callback executed when a draggable item is clicked.
     * This callback will be executed regardless of the item being dragged or not.
     */
    onClick?: (targetElement: HTMLElement) => void

    /**
     * A callback executed when an item was dropped in the board canvas.
     * targetElement is the dragged and dropped item.
     */
    onDrop: (canvasX: number, canvasY: number, targetElement: HTMLElement) => void

    /**
     * A callback executed when an item was dragged but not dropped in the board canvas.
     */
    onCancel?: () => void
  }

  /**
   * Commands related to the account (team) on which the plugin
   * was installed.
   *
   * *Note*: this is not the current user.
   * @category Account and User
   */
  interface IAccountCommands {
    /**
     * Get information [[IAccountInfo]] about the account.
     * @returns a promise that resolves into the account information.
     *
     * Requires scope: `TEAM:READ`
     */
    get(): Promise<IAccountInfo>
  }

  /**
   * Commands related to the current user
   * @category Account and User
   */
  interface ICurrentUserCommands {
    /**
     * Gets the user id
     * @returns a promise resolving in the current user id
     *
     */
    getId(): Promise<string>
    /**
     * Returns if the user is logged in.
     *
     * @returns a promise resolved into the login status of the current user (true or false)
     */
    isSignedIn(): Promise<boolean>
    /**
     * Gets the current scopes the user has authorized the plugin
     * @returns a promise resolving into an array of scopes (strings) the user has authorized the plugin.
     */
    getScopes(): Promise<string[]>

    /**
     * Gets the permissions of the current user over the current board.
     *
     * Requires scope: `IDENTITY:READ`
     *
     * @returns a promise resolving into an array of [[BoardPermission]](strings)
     */
    getCurrentBoardPermissions(): Promise<BoardPermission[]>

    /**
     * Gets the permissions of the current user over the account (team).
     *
     * Requires scope: `IDENTITY:READ`
     *
     * @returns a promise resolving into an array of [[AccountPermission]](strings)
     */
    getCurrentAccountPermissions(): Promise<AccountPermission[]>

    /**
     * Returns if the current user is a member of the account (team) owner of the board
     *
     * Requires scope: IDENTITY:READ
     *
     * @returns a promise resolving into the membership status of the current user (boolean)
     *
     */
    isMemberOfCurrentAccount(): Promise<boolean>
  }

  /**
   * Representation of one widget by id
   * @category Widgets Manipulation
   */
  type InputWidget = string | {id: string}
  /**
   * Representation of one or multiple widgets by id
   * @category Widgets Manipulation
   */
  type InputWidgets = string | string[] | {id: string} | {id: string}[]

  /**
   * Commands to get information about the board
   * @category Board Manipulation
   */
  interface IBoardInfoCommands {
    /**
     * @returns a promise resolving into information ([[IBoardInfo]]) about the board
     */
    get(): Promise<IBoardInfo>
  }

  /**
   * Commands to manipulate the user interface of the current board and make use of
   * container extension points.
   *
   * When a container extension point is opened (e.g. the sidebar) an iframe will be created
   * and loaded based on the options you use to open it. There are different mechanism to communicate
   * between these iframes, such events and states.
   *
   * Read more about [Extension Points](https://developers.miro.com/docs/extension-points-for-miro-apps)
   * @category Extension Points
   */
  interface IBoardUICommands {
    /**
     * Opens the left sidebar and loads an iframe with the `iframeURL`.
     *
     * You can communicate with this iframe by using the [[broadcastData]] method.
     *
     * @param iframeURL the url that will be open in the iframe. If a relative url is used, it will be relative
     * to the defined web plugin url.
     * @param options Options for the sidebar. Current only `width` is available.
     * @returns A promise that will be resolved once the left sidebar is closed.
     *
     * **Example**
     * ```javascript
     * miro.onReady(async () => {
     *   miro.initialize({
     *     extensionPoints: {
     *       // create a button on the bottom bar
     *       bottomBar: {
     *         title: "Open a sidebar",
     *         svgIcon:
     *           '<circle cx="12" cy="12" r="9" fill="blue" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
     *         onClick: () => {
     *           // open the sidebar when clicked
     *           // `/sidebar.html` will be relative to the plugin url
     *           miro.board.ui.openLeftSidebar("/sidebar.html");
     *
     *           // send a message to the sidebar after 5 seconds
     *           setTimeout(() => {
     *             miro.broadcastData("Hello from the bottom bar");
     *           }, 5000);
     *         },
     *       },
     *     },
     *   });
     * });
     * ```
     */
    openLeftSidebar(iframeURL: string, options?: {width?: number}): Promise<any>

    /**
     * Opens the library extension point and loads an iframe with the `iframeURL`.
     *
     * You can communicate with this iframe by using the [[broadcastData]] method.
     *
     * @param iframeURL the url that will be open in the iframe. If a relative url is used, it will be relative
     * to the defined web plugin url.
     * @param options Options for the library. Current only `title` is available.
     * @returns A promise that will be resolved once the library is closed.
     *
     * **Example**
     * ```javascript
     * miro.onReady(async () => {
     *   miro.initialize({
     *     extensionPoints: {
     *       // create a button on the bottom bar
     *       bottomBar: {
     *         title: "Open the library",
     *         svgIcon:
     *           '<circle cx="12" cy="12" r="9" fill="blue" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
     *         onClick: () => {
     *           // `/library.html` will be relative to the plugin url
     *           miro.board.ui.openLibrary("/library.html", { title: "The library!" });
     *         },
     *       },
     *     },
     *   });
     * });
     * ```
     */
    openLibrary(iframeURL: string, options: {title: string}): Promise<any>

    /**
     * Opens the modal extension point and loads an iframe with the `iframeURL`.
     *
     * You can communicate with this iframe by using the [[broadcastData]] method.
     *
     * @param iframeURL the url that will be open in the iframe. If a relative url is used, it will be relative
     * to the defined web plugin url.
     * @param options Options for the modal. You can define specific dimensions or make it fullscreen.
     * @returns A promise that will be resolved once the modal is closed.
     *
     * **Example**
     * ```javascript
     * miro.onReady(async () => {
     *   miro.initialize({
     *     extensionPoints: {
     *       // create a button on the bottom bar
     *       bottomBar: {
     *         title: "Open a modal",
     *         svgIcon:
     *           '<circle cx="12" cy="12" r="9" fill="blue" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
     *         onClick: () => {
     *           miro.board.ui.openModal("/modal.html", { width: 400, height: 400 }).then(() => {
     *             miro.showNotification("modal closed");
     *           });
     *         },
     *       },
     *     },
     *   });
     * });
     * ```
     */
    openModal(iframeURL: string, options?: {width?: number; height?: number} | {fullscreen: boolean}): Promise<any>

    /**
     * Opens the bottom panel extension point and loads an iframe with the `iframeURL`.
     *
     * You can communicate with this iframe by using the [[broadcastData]] method.
     *
     * @param iframeURL the url that will be open in the iframe. If a relative url is used, it will be relative
     * to the defined web plugin url.
     * @param options Options for the bottomPanel.
     *
     * options.width: default 120px, min value: 80px; max: value 320px
     *
     * options.height: default 48px, min value: 48px; max: value 200px
     *
     * @returns A promise that will be resolved once the bottomPanel is closed.
     *
     * **Example**
     * ```javascript
     * miro.onReady(async () => {
     *   miro.initialize({
     *     extensionPoints: {
     *       // create a button on the bottom bar
     *       bottomBar: {
     *         title: "Open a modal",
     *         svgIcon:
     *           '<circle cx="12" cy="12" r="9" fill="blue" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
     *         onClick: () => {
     *           miro.board.ui.openBottomPanel("/sidebar.html", {
     *             width: 200,
     *             height: 200,
     *           });
     *         },
     *       },
     *     },
     *   });
     * });
     * ```
     *
     */
    openBottomPanel(iframeURL: string, options?: {width?: number; height?: number}): Promise<any>

    /**
     * Closes the left sidebar.
     * Throws error if the sidebar was not opened by the plugin
     *
     * @param data Ignored for now.
     */
    closeLeftSidebar(data?: any): void

    /**
     * Closes the library.
     * Throws error if the library was not opened by the plugin
     * @param data Ignored for now.
     */
    closeLibrary(data?: any): void

    /**
     * Closes the modal.
     * Throws error if the modal was not opened by the plugin
     * @param data Ignored for now.
     */
    closeModal(data?: any): void

    /**
     * Closes the bottom panel.
     * Throws error if the bottom panel was not opened by the plugin
     * @param data Ignored for now.
     */
    closeBottomPanel(data?: any): void

    /**
     * Resizes the current iframe inside the bottom-panel.
     * @TODO this method does not exist
     * resizeToInner does exist
     *
     * The left sidebar and the modal are not yet supported.
     */
    resizeTo(value: HTMLElement | string | {width?: number; height?: number}): void
    /**
     * Enables a container (HTMLElement) to have draggable elements (items).
     *
     * *Note: Not all items inside the container will be draggable.
     * See [[DraggableItemsContainerOptions]] to know how to define them.*
     *
     * Items dynamically added to the container will be draggable if matching the conditions defined in [[DraggableItemsContainerOptions]]
     * @TODO add link to a guide with a full working example
     *
     * @param container An HTMLElement containing the draggable items.
     * @param options Define the conditions and behavior of the draggable items.
     * @returns
     *
     * **Example**
     * ```javascript
     * //This example code should run in a container extension point like the left sidebar or the library.
     * miro.onReady(() => {
     *   // Contains the draggable elements
     *   const draggable = document.getElementById("draggables-container");
     *   miro.board.ui.initDraggableItemsContainer(draggable, {
     *     // matching elements will be draggable
     *     draggableItemSelector: ".drag-me",
     *     getDraggableItemPreview: function () {
     *       return {
     *         url: "https://dummyimage.com/600x400/000000/ffffff&text=Drag+Me",
     *       };
     *     },
     *     onDrop: function () {
     *       miro.showNotification("You dropped something");
     *     },
     *   });
     * });
     * ```
     *
     */
    initDraggableItemsContainer(container: HTMLElement, options: DraggableItemsContainerOptions): void

    /**
     * Selects the board default tool
     * @experimental
     */
    __selectDefaultTool(): void

    /**
     * Hides interface panels [[UIPanel]]
     * @experimental
     */
    __hideButtonsPanels(panels: 'all' | UIPanel | UIPanel[]): void

    /**
     * Shows interface panels [[UIPanel]]
     */
    __showButtonsPanels(panels: 'all' | UIPanel | UIPanel[]): void

    /**
     * Sets the toolbar mode. Some modes show more options than other. Example: the `viewer` can only see the default tool.
     *
     * *Note: this will not limit the ability of the current user to interact with the board widgets.*
     */
    __limitToolbarMode(mode: 'editor' | 'commentor' | 'viewer'): void

    /**
     * Removes any limitation set with [[__limitToolbarMode]].
     *
     * *Note: this will not allow a non-authorized user to modify the board*
     */
    __clearToolbarModeLimit(): void
  }

  /**
   * The available panels in the board.
   * @category Extension Points
   */
  type UIPanel = 'toolbar' | 'top' | 'bottomBar' | 'map'

  /**
   * Utilities to work with a board.
   * @category Board Manipulation
   */
  interface IBoardUtils {
    /**
     * Calculates the union boundaries of several widgets.
     */
    unionWidgetBounds(widgets: {bounds: IBounds}[]): IBounds
  }

  /**
   * Commands to get information and manipulate the board viewport.
   * @category Board Manipulation
   */
  interface IBoardViewportCommands {
    /**
     * Returns information about the current viewport position
     */
    get(): Promise<IRect>
    /**
     * Allows to set the board viewport
     */
    set(viewport: IRect, options?: IViewportOptions): Promise<IRect>
    /**
     * Returns the viewport scale (zoom level)
     */
    getScale(): Promise<number>

    /**
     * Adds a black mask over the canvas.
     * @experimental
     */
    __mask(viewport: IRect, padding?: IOffset): void

    // [Experimental feature] Remove mask
    /**
     * Removes any mask set over the canvas.
     * @experimental
     */
    __unmask(): void
  }

  /**
   * Options to set the board viewport
   * @category Board Manipulation
   */
  interface IViewportOptions {
    /**
     * Padding between the target viewport and the final result
     * Defaults to 0
     */
    padding?: IOffset
    /**
     * Time in milliseconds for an animation effect.
     * Defaults to no animation.
     */
    animationTimeInMS?: number // No animation by default
  }

  /**
   * Commands related to the selection and selected widgets in the board
   * @category Board Manipulation
   */
  interface IBoardSelectionCommands {
    /**
     * Requires scope: BOARDS:READ
     *
     * @returns The currently selected widgets
     *
     */
    get(): Promise<IWidget[]>

    /**
     * Selects an specific widget.
     *
     * Requires scope: BOARDS:READ
     *
     * @returns The selected widgets
     *
     */
    selectWidgets(widgetIds: InputWidgets): Promise<IWidget[]>

    /**
     * Unselect all widgets in the board
     *
     * @returns A promised fulfilled if the action can be performed.
     */
    clear(): Promise<void>

    /**
     * Creates a dark mask and prompts the current user to select a widget in the board (widget selection mode).
     *
     * The user can only select one widget at the time.
     *
     * *Note: This command is not available in container extension points.*
     *
     * @returns A promise resolving into the selected widgets.
     * If the user cancels the selection the array of selected widgets will be empty
     */
    enterSelectWidgetsMode(): Promise<{selectedWidgets: IWidget[]}>
  }

  /**
   * Commands related to widgets such creation, modification and metadata.
   * @category Widgets Manipulation
   */
  interface IBoardWidgetsCommands {
    /**
     * Creates a widget in the board.
     * A `type` is required.
     *
     * See [[IWidget]] for more information about the different type of widgets and their properties.
     *
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for the current user
     *
     * **Example**
     * ```javascript
     * miro.board.widgets.create({type: "sticker", text: "Hello world"})
     * ```
     *
     * @returns A promise resolving into an array containing the newly created widgets.
     */
    create<T extends IWidget>(widgets: OneOrMany<WidgetToBeCreated>): Promise<T[]>

    /**
     * Get all the board widgets matching a filter `filterBy`.
     * filterBy uses https://lodash.com/docs/4.17.11#filter
     *
     * See [[IWidget]] for more information about the different type of widgets and their properties.
     *
     * Requires scope: BOARDS:READ
     *
     * **Example**
     * ```javascript
     * const stickers = miro.board.widgets.get({type: "sticker"})
     * ```
     * @returns A promise resolving into an array of widgets matching the filter
     *
     */
    get<T extends IWidget>(filterBy?: Record<string, unknown>): Promise<T[]>

    /**
     * Modify one or many widgets in the board.
     * An `id` is mandatory.
     *
     * See [[IWidget]] for more information about the different type of widgets and their properties.
     *
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     *
     * @returns A promise resolving into an array with the modified widgets.
     */
    update<T extends IWidget>(widgets: OneOrMany<{id: string; [index: string]: any}>): Promise<T[]>

    /**
     * Modifies the widgets position and rotation based on the passed parameters.
     *
     * @param widgetId Widgets to be affected
     * @param deltaX Translation on the X axis.
     * @param deltaY Translation on the Y axis
     * @param deltaRotation Rotation of the widget
     *
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     *
     * @returns A promise resolving into an array with the modified widgets.
     */
    transformDelta(
      widgetIds: InputWidgets,
      deltaX?: number,
      deltaY?: number,
      deltaRotation?: number,
    ): Promise<IWidget[]>

    /**
     * Deletes a single widget from the board
     *
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     *
     * @param widgetIds Widget to be deleted
     * @returns A promise resolving after the widget was deleted.
     */
    deleteById(widgetIds: InputWidgets): Promise<void>

    /**
     * Brings a widget forward in the board (above other widgets)
     *
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     *
     * @param widgetIds Widget to be affected.
     * @returns A promise resolving after the widget was brought forward.
     */
    bringForward(widgetId: InputWidgets): Promise<void>

    /**
     * Send a widget to the back (below other widgets).
     *
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     *
     * @param widgetIds Widget to be affected.
     * @returns A promise resolving after the widget was sent forward.
     */
    sendBackward(widgetId: InputWidgets): Promise<void>

    /**
     * Checks if all widgets on the board had been loaded.
     *
     * @returns A promise resolving after all the widgets in the board had been loaded.
     *
     */
    areAllWidgetsLoaded(): Promise<boolean>

    /**
     * Finds all widgets intersected in a specific area.
     *
     * Requires scope: BOARDS:READ
     *
     * @experimental
     *
     * @returns A Promise resolving with the widgets found in the requested area.
     */
    __getIntersectedObjects(pointOrRect: IPoint | IRect): Promise<IWidget[]>

    /**
     * Makes a widget perform a "blink" animation in the board.
     * @experimental
     *
     * @returns A promise resolving if the widget was found.
     */
    __blinkWidget(widgets: InputWidgets): Promise<void>
  }

  /**
   * Commands to interact and manipulate tags
   * @category Widgets Manipulation
   */
  type InputTags = string | string[] | {id: string} | {id: string}[]
  /**
   * Commands to interact and manipulate tags
   * @category Widgets Manipulation
   */
  type CreateTagRequest = {title: string; color: number | string; widgetIds?: InputWidgets}
  /**
   * Commands to interact and manipulate tags
   * @category Widgets Manipulation
   */
  type UpdateTagRequest = {id: string; title?: string; color?: number | string; widgetIds?: InputWidgets}

  /**
   * Commands to interact and manipulate tags
   * @category Widgets Manipulation
   */
  interface IBoardTagsCommands {
    /**
     * Gets all tags in the board, optionally filtered as specific in `filterBy`
     *
     * Requires scope: BOARDS:READ
     *
     * @param filterBy Conditions to filter tags.
     * @returns A promise resolving into the found tags.
     *
     */
    get(filterBy?: Record<string, unknown>): Promise<ITag[]>

    /**
     * Creates one or many tags as defined in the [[CreateTagRequest]].
     *
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     *
     * @param tags Details of the tag being created. It may include what widgets will have the tag. A `title` is always required.
     * @returns A promise resolving into the created tags.
     */
    create(tags: OneOrMany<CreateTagRequest>): Promise<ITag[]>

    /**
     * Update one or many tags as defined in the [[UpdateTagRequest]]
     *
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     *
     * @param tags The tags to be updated. An `id` is always required.
     * @returns A promise resolving into the updated tags.
     */
    update(tags: OneOrMany<UpdateTagRequest>): Promise<ITag[]>

    /**
     * Deletes one or many tags.
     *
     * Requires scope: BOARDS:WRITE
     * Requires BoardPermission.EDIT_CONTENT for current user
     *
     * @param tags The tags to be deleted.
     * @returns A promise resolving when the tags are deleted.
     */
    delete(tags: InputTags): Promise<void>
  }

  /**
   * @category Board Manipulation
   */
  interface IBoardCommentsCommands {
    /**
     * Requires scope: BOARDS:READ
     */
    get(): Promise<IComment[]>
  }

  /**
   * @category Board Manipulation
   */
  interface IBoardGroupsCommands {
    /**
     * Requires scope: BOARDS:READ
     */
    get(): Promise<IGroup[]>
  }

  /**
   * @category Board Manipulation
   */
  interface IGroup {
    id: string
    bounds: IBounds
    childrenIds: string[]
  }

  /**
   * Defines a tag and its properties
   * @category Widgets Manipulation
   */
  interface ITag {
    id: string
    title: string
    /**
     * The color of the tag
     */
    color: string | number
    /**
     * A list of ids with the assigned tag.
     */
    widgetIds: string[]
  }

  ////////////////////////////////////////////////////////////////////////
  // Widget data types
  ////////////////////////////////////////////////////////////////////////

  /**
   * @category Widgets Manipulation
   */
  type OneOrMany<T> = T | T[]

  /**
   * @category Widgets Manipulation
   */
  type WidgetMetadata = {[x: string]: any}

  /**
   * @category Widgets Manipulation
   */
  type WidgetCapabilities = {editable: boolean}

  /**
   * @category Widgets Manipulation
   */
  interface IWidgetNamespaces {
    metadata: WidgetMetadata
    capabilities: WidgetCapabilities
    clientVisible: boolean
  }

  /**
   * @category Widgets Manipulation
   */
  type WidgetNamespacesKeys = keyof IWidgetNamespaces

  /**
   * Defines a basic widget and its properties
   * @category Widgets Manipulation
   */
  interface IWidget extends IWidgetNamespaces {
    readonly id: string
    readonly type: string
    readonly bounds: IBounds
    readonly groupId?: string
    readonly createdUserId: string
    readonly lastModifiedUserId: string
  }

  /**
   * @category Widgets Manipulation
   */
  interface ITextWidget extends IWidget {
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
      borderStyle: BorderStyle
      borderOpacity: BorderOpacityStyle
      fontFamily: FontFamily
      textColor: TextColorStyle
      textAlign: TextAlign
      highlighting: HighlightingStyle
      italic: ItalicStyle
      strike: StrikeStyle
      underline: UnderlineStyle
      bold: BoldStyle
      /**
       * The default padding value will be changed to "0" in November 2020
       */
      padding: PaddingStyle
    }
  }

  /**
   * @category Widgets Manipulation
   */
  interface IImageWidget extends IWidget {
    type: 'IMAGE'
    x: number
    y: number
    rotation: number
    scale: number
    title: string
    url: string
  }

  /**
   * @category Widgets Manipulation
   */
  interface IStickerWidget extends IWidget {
    type: 'STICKER'
    x: number
    y: number
    scale: number

    /**
     * This text will include HTML characters if present.
     */
    text: string

    /**
     * This text does not include HTML characters.
     */
    plainText: string
    style: {
      stickerBackgroundColor: BackgroundColorStyle
      fontSize: FontSizeStyle
      textAlign: TextAlign
      textAlignVertical: TextAlignVertical
      stickerType: StickerType
      fontFamily: FontFamily
    }

    readonly tags: ITag[]
  }

  /**
   * @category Widgets Manipulation
   */
  interface IShapeWidget extends IWidget {
    type: 'SHAPE'
    x: number
    y: number
    width: number
    height: number
    rotation: number

    /**
     * This text will include HTML characters if present.
     */
    text: string

    /**
     * This text does not include HTML characters.
     */
    plainText: string
    style: {
      shapeType: ShapeType
      backgroundColor: BackgroundColorStyle
      backgroundOpacity: BackgroundOpacityStyle
      borderColor: BorderColorStyle
      borderWidth: BorderWidthStyle
      borderStyle: BorderStyle
      borderOpacity: BorderOpacityStyle
      fontSize: FontSizeStyle
      fontFamily: FontFamily
      textColor: TextColorStyle
      textAlign: TextAlign
      textAlignVertical: TextAlignVertical
      highlighting: HighlightingStyle
      italic: ItalicStyle
      strike: StrikeStyle
      underline: UnderlineStyle
      bold: BoldStyle
    }
  }

  /**
	 * Defines a widget of type `LINE`.
	 *
	 * Currently line widgets can only be created between two widget.
	// The `startWidgetId` and `endWidgetId` fields are required to create a line widget.
	 * @category Widgets Manipulation
	 */
  interface ILineWidget extends IWidget {
    type: 'LINE'
    /**
     * Mandatory field
     */
    startWidgetId: string | undefined
    /**
     * Mandatory field
     */
    endWidgetId: string | undefined
    readonly startPosition: IPoint
    readonly endPosition: IPoint
    readonly captions: {text: string}[]
    style: {
      lineColor: LineColorStyle
      lineThickness: LineThicknessStyle
      lineStyle: LineStyle
      lineType: LineType
      lineStartStyle: LineArrowheadStyle
      lineEndStyle: LineArrowheadStyle
    }
  }

  /**
   * @category Widgets Manipulation
   */
  interface IWebScreenshotWidget extends IWidget {
    type: 'WEBSCREEN'
    x: number
    y: number
    scale: number
    readonly url: string
  }

  /**
   * @category Widgets Manipulation
   */
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

  /**
   * @category Widgets Manipulation
   */
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

  /**
   * @category Widgets Manipulation
   */
  interface IEmbedWidget extends IWidget {
    type: 'EMBED'
    x: number
    y: number
    scale: number
    html: string
  }

  /**
   * @category Widgets Manipulation
   */
  interface IPreviewWidget extends IWidget {
    type: 'PREVIEW'
    x: number
    y: number
    scale: number
    readonly url: string
  }

  /**
   * @category Widgets Manipulation
   */
  interface IEmojiWidget extends IWidget {
    type: 'EMOJI'
    x: number
    y: number
    scale: number
    rotation: number
    readonly code: string
  }

  /**
   * @category Widgets Manipulation
   */
  interface ICardWidget extends IWidget {
    type: 'CARD'
    x: number
    y: number
    scale: number
    rotation: number
    title: string
    description: string
    /**
     * Date format: `YYYY-mm-dd`
     */
    date?: string
    assignee?: {
      userId: string
    }
    card: {
      customFields?: {
        value?: string
        mainColor?: string
        fontColor?: string
        iconUrl?: string
        roundedIcon?: boolean
      }[]
      logo?: {
        iconUrl: string
      }
    }
    style: {
      backgroundColor: BackgroundColorStyle
    }

    readonly tags: ITag[]
  }

  /**
   * @category Widgets Manipulation
   */
  interface IDocumentWidget extends IWidget {
    type: 'DOCUMENT'
    x: number
    y: number
    rotation: number
    scale: number
    title: string
  }

  /**
   * @category Widgets Manipulation
   */
  interface IMockupWidget extends IWidget {
    type: 'MOCKUP'
    x: number
    y: number
    rotation: number
    readonly mockupType: string
  }

  /**
   * @category Widgets Manipulation
   */
  interface IComment extends IWidget {
    type: 'COMMENT'
    color: number
    resolved: boolean
  }

  /**
   * @category Widgets Manipulation
   */
  interface IWidgetShortData {
    id: string
    type?: string
    metadata?: any
  }

  ////////////////////////////////////////////////////////////////////////
  // Helpers data
  ////////////////////////////////////////////////////////////////////////

  /**
   * @category Account and User
   */
  type BoardPermission = 'EDIT_INFO' | 'EDIT_CONTENT' | 'EDIT_COMMENTS'
  /**
   * @category Account and User
   */
  type AccountPermission = 'MANAGE_APPS'

  /**
   * @category Board Manipulation
   */
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

  /**
   * @category Account and User
   */
  interface IUserInfo {
    id: string
    name: string
    email: string
    picture: IPictureInfo
  }

  /**
   * @category Account and User
   */
  interface IAccountInfo {
    id: string
    title: string
    currentUserPermissions: AccountPermission[]
    createdAt: string
    picture: IPictureInfo
  }

  /**
   * @category Account and User
   */
  interface IPictureInfo {
    big: string
    medium: string
    small: string
    image: string //original picture
  }

  /**
   * @category General
   */
  interface IRect {
    x: number
    y: number
    width: number
    height: number
  }

  /**
   * @category General
   */
  interface IOffset {
    top: number
    left: number
    bottom: number
    right: number
  }

  /**
   * @category General
   */
  interface IPoint {
    x: number
    y: number
  }

  /**
   * @category General
   */
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
  /**
   * @category Styling
   */
  type BackgroundColorStyle = string | number
  /**
   * @category Styling
   */
  type BackgroundOpacityStyle = number
  /**
   * @category Styling
   */
  type BorderColorStyle = string | number
  /**
   * @category Styling
   */
  type BorderWidthStyle = number
  /**
   * @category Styling
   */
  type BorderOpacityStyle = number
  /**
   * @category Styling
   */
  type FontSizeStyle = number
  /**
   * @category Styling
   */
  type TextColorStyle = string | number
  /**
   * @category Styling
   */
  type HighlightingStyle = string | number
  /**
   * @category Styling
   */
  type ItalicStyle = 0 | 1
  /**
   * @category Styling
   */
  type StrikeStyle = 0 | 1
  /**
   * @category Styling
   */
  type UnderlineStyle = 0 | 1
  /**
   * @category Styling
   */
  type PaddingStyle = number
  /**
   * @category Styling
   */
  type BoldStyle = 0 | 1
  /**
   * @category Styling
   */
  type LineColorStyle = string | number
  /**
   * @category Styling
   */
  type LineThicknessStyle = number
  /**
   * @category Styling
   */

  /**
   * @category Styling
   */
  enum ShapeType {
    RECTANGLE = 3,
    CIRCLE = 4,
    TRIANGLE = 5,
    BUBBLE = 6,
    ROUNDER = 7,
    RHOMBUS = 8,
    PARALL = 10,
    STAR = 11,
    ARROW_RIGHT = 12,
    ARROW_LEFT = 13,
    TEXT_RECT = 14,
    PILL = 15,
    PENTAGON = 16,
    HEXAGON = 17,
    OCTAGON = 18,
    TRAPEZE = 19,
    PREDEFINED_PROCESS = 20,
    ARROW_LEFT_RIGHT = 21,
    CLOUD = 22,
    BRACE_LEFT = 23,
    BRACE_RIGHT = 24,
    CROSS = 25,
    BARREL = 26,
  }

  /**
   * @category Styling
   */
  enum StickerType {
    SQUARE = 0,
    RECTANGLE = 1,
  }

  /**
   * @category Styling
   */
  enum BorderStyle {
    DOTTED = 0,
    DASHED = 1,
    NORMAL = 2,
  }

  /**
   * @category Styling
   */
  enum FontFamily {
    ARIAL = 0,
    CURSIVE = 1,
    ABRIL_FATFACE = 2,
    BANGERS,
    EB_GARAMOND,
    GEORGIA,
    GRADUATE,
    GRAVITAS_ONE,
    FREDOKA_ONE,
    NIXIE_ONE,
    OPEN_SANS,
    PERMANENT_MARKER,
    PT_SANS,
    PT_SANS_NARROW,
    PT_SERIF,
    RAMMETTO_ONE,
    ROBOTO,
    ROBOTO_CONDENSED,
    ROBOTO_SLAB,
    CAVEAT,
    TIMES_NEW_ROMAN,
    TITAN_ONE,
    LEMON_TUESDAY,
    ROBOTO_MONO,
    NOTO_SANS,
    PLEX_SANS,
    PLEX_SERIF,
    PLEX_MONO,
  }

  /**
   * @category Styling
   */
  enum TextAlign {
    LEFT = 'l',
    CENTER = 'c',
    RIGHT = 'r',
  }

  /**
   * @category Styling
   */
  enum TextAlignVertical {
    TOP = 't',
    MIDDLE = 'm',
    BOTTOM = 'b',
  }

  /**
   * @category Styling
   */
  enum LineStyle {
    DASHED = 1,
    NORMAL = 2,
    STRONG = 3,
    DOTTED = 4,
  }

  /**
   * @category Styling
   */
  enum LineType {
    LINE = 1,
    ARROW = 2,
    ARROW_SKETCH = 9,
  }

  /**
   * @category Styling
   */
  enum LineArrowheadStyle {
    NONE = 0,
    ARC_ARROW = 1,
    RHOMBUS = 2,
    FILLED_RHOMBUS = 3,
    CIRCLE = 4,
    FILLED_CIRCLE = 5,
    ARROW = 6,
    OPEN_ARROW = 7,
    FILLED_ARROW = 8,
  }

  /**
   * @category Styling
   */
  interface IEnums {
    shapeType: typeof ShapeType
    stickerType: typeof StickerType
    borderStyle: typeof BorderStyle
    fontFamily: typeof FontFamily
    textAlign: typeof TextAlign
    textAlignVertical: typeof TextAlignVertical
    lineStyle: typeof LineStyle
    lineType: typeof LineType
    lineArrowheadStyle: typeof LineArrowheadStyle
  }
  /**
   * > **Note**: when creating a widget that requires a URL, if the URL has special characters. Make sure the URL is encoded properly.
   * @category Widgets Manipulation
   */
  type WidgetToBeCreated = {type: string; [index: string]: any}
}
