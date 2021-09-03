# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
a stateful component contains state, while functional component does not. stateful components keep track of the changes in data, while functional component just simply accept data and display them in some form and are mainly responsible for rendering UI.


2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount function is called before the render method is executed; setting the state in this phase will not trigger a re-rendering.
componentWillUpdate is called right before the component renders and right after shouldComponentUpdate

3. Define stateful logic.
stateful logic is logic built inside of a component. It can be a function that handles a click event or a function that sets toggle state, or even a function that formats data before it gets displayed.

4. What are the three step of creating a successful test? What is done in each phase?
arrange, act and assert
- arrange: set up the test case. for instance, before the test, we need to render the target component.
- act: simulate behavior of UI users
- assert: what is the expected outcome? predict the result of the interacting between users and the webpage.
