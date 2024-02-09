1. what is the difference between Props and State? explore (https://reactjs.org/)
   
   Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.
   State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.

- Both props and state are plain JS objects
- Both props and state changes trigger a render update
- Both props and state are deterministic. If your Component generates different outputs for the same combination of props and state then you're doing something wrong.

2. Explain the useState API? explore (https://reactjs.org/)
useState is basic hook which is used to manage the state of react components.

`` const [state, setState] = useState(initialState);``
Returns a stateful value, and a function to update it.

During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).

The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
`` setState(newState);``
During subsequent re-renders, the first value returned by useState will always be the most recent state after applying updates.

3. Explain the how map, filter, reduce work (https://reactjs.org/)

4. Create your own map, filter, reducer methods and attach it to an array using prototype chain ( Unit 3 / JS-201 concept ) use this as reference
