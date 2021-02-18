Tool used for making diagrams: draw.io VSCode extension

Currently I'm making diagrams from [this article](https://spin.atomicobject.com/2017/06/07/react-state-vs-redux-state/#:~:text=The%20more%20state%20needs%20to,may%20be%20a%20better%20option.).

Good notes from [redux fundamentals](https://redux.js.org/tutorials/fundamentals/part-5-ui-react)
Basic Redux and UI Integration#
Using Redux with any UI layer requires a few consistent steps:

Create a Redux store
Subscribe to updates
Inside the subscription callback:
Get the current store state
Extract the data needed by this piece of UI
Update the UI with the data
If necessary, render the UI with initial state
Respond to UI inputs by dispatching Redux actions


#Design Decision
Ultimately, there just doesn't appear to be a need to employ Redux on our application.

As our application grows, I could see a need for it, but as of right now, it's just a few pages.

If state is beginning to get shared more and more between components, then I'd see a need for this.

Some things to consider:
1. Breadth of use -
A lot of components needing to share state - Then consider Redux
A small amount of components needing to share state - then stick with state

2. Depth of passing down props
When there are 1 or 2 levels accessing 