# Feedback

- We don't have capability to enter select mode with the WebSDK.
- We don't return user avatars from the WebSDK.
- We need to release a new types package.
- We are missing state in the session (if it's already finished)
- Constantly getting the following error when working with collections but I have no idea of what it is: "Error: 1# Invalid input - Path: value at responseHandler"
- When calling session.end() the inviations and current sessions modals are not dismissed
- Collection.remove does not trigger onValue
- We don't show the name of the app in the session modals
- Timer docs are still hidden

- If the timer is already started in Miro, there's no way for the developer to receive its current state (current time, remaining time, etc), the "experimental:timer:update" doesn't get dispatched, we might need a method like `miro.board.experimental.timer.getCurrent()`

# TODO

- [x] Implement timer and control session with it
- [ ] The room starting point selector might need more love.
- [ ] Should a facilitator be able to zoom to starting point or even remove it?
- [ ] Make main scrollable and toolbar sitcky to the bottom of the viewport
- [x] Address typography/styles issues
