# Redux Lifecycle

1. User clicks on a button, say an item in a list
2. An action creator is called
   1. an action creator is a function that returns an object
   2. the object has a type that describes the type of action that was just triggered
   3. the object can also have some data that further describes the action
3. The action careator returns that object
   1. the actual object itself is the actual action
4. The called action is automatically sent to all of the reducers
5. In the reducer, there are switch statements and if the `action.type` is the selected, then it will return action
   1. if the reducer doesn't care about the action, it can return current state and no status change
   2. if the reducer does care about the action, it can return something and that value will be the new value of state
6. All reducers processed the action and return new state, new state is then assembled
7. Then notfiy containers of the changes to state, which then the containers will rerender with new data

click action > call an action creator > action creator returns an action > action flows to reducers > reducers assemble new state > new state flows into all containers

# React Router

Purpose is to completely circumvent the process to request web page from server, it intercepts changes to the url.

Idea of Single Page Application (SPA) - no longer navigating between distinct HTML docs that are being created by some remote web server.
Instead, always dealing with a single HTML doc and rely upon some javascript to change the set of components that a user sees appearing on screen.
Shows user different sets of components.

1. User changes url (by clicking)
2. React Router pings History library (a package) to notify of new url
3. History library does some parsing and figures out what exactly changed and then passes it to the React Router library
4. React Router receives new route and decides what to show, a new set of components based on exactly what that new route is
5. Tells React to re-render based on new set of components
