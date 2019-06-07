- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
PropTypes allow us to validate our props, ensuring that each props is of the type that is expected for it's purpose and whether or not that prop is required for the app to function as expected. (e.g. if a prop is supposed to be an array of objects, the proptype ensures that what is being passed to it is in fact an array of objects).
This helps with debugging and allows us to find the source of any prop related issues quicker, by either pointing out an issue with the type of prop being passed or by allowing us to eliminate that as a possible cause of the error.

- [ ] Describe a life-cycle event in React?
In React, each component has a lifecycle including 3 phases:
Mounting Phase: This phase is when the component is being build and the render method is invoked, rendering the component to the DOM.
An example of a lifecycle event that here is componentDidMount, indicating that the component has been mounted.

Updating Phase
This phase is when the components props or state is updated through something like setState. This will cause the render method to be invoked again, re-rendering the component to the DOM.

Un-mounting Phase
This phase is when the component is removed from the screen.
An example of a lifecycle event that can be used for this phase is componentWillUnmount, allowing us to perform any clean up necessary before the component is removed from the screen.

- [ ] Explain the details of a Higher Order Component?
HOCs allow us create re-usable component logic and takes a component as an argument and returns a new component which uses that logic.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
External CSS files - This allows for the styling of components to be done with CSS knowledge alone and without the need to understand the inner workings of the React components themselves. This can be good if working on a team containing a dedicated CSS specialist who doesn't have knowledge of JS/React.
Inline Styles - This allows us to style components within the components themselves through either short styling phrases or style objects. This prevents the need to call external files to style our components and keeps the component and styling in one place, however this can cause our code to lose readability we lose some functionality of CSS pre-processing.

React Libraries - There are numerous react libraries dedicated to styling components. An example is styled-components which allows us to write plain CSS in the react component pages themselves as well as make use of a number of extremely useful functionalities normally granted through CSS pre-processors.
