import React, { useReducer } from "react";

export default function CountClicks() {
    const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state; // always return state
  }
};

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>

  <div className="grid grid-cols-2 gap-4 "> 
        <button className="bg-blue-300" onClick={() => dispatch({ type: "INCREMENT" })}>
        +
      </button>

      <button className="bg-purple-300" onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </button>
  </div>

      <button className="bg-red-300 px-6 my-4" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}
