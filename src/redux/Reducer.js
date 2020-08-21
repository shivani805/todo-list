const initialState = {
  value: "",
  data: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEXT":
      return {
        ...state,
        value: action.newtext,
      };
    case "CHANGETEXT":
      return {
        ...state,
        data: [...state.data, action.changetext],
      };

    case "TOGGLEONE":
      const newTodos = state.data.map((todo, i) => {
        if (todo.id === action.id) {
          todo.isCompleted = true;
        }

        return todo;
      });
      return {
        ...state,
        data: newTodos,
      };

    case "TOGGLETWO":
      const newtodo = state.data.map((todo, i) => {
        if (todo.id === action.id) {
          todo.isCompleted = false;
        }
        return todo;
      });
      return {
        ...state,
        data: newtodo,
      };
    default:
      return state;
  }
};
