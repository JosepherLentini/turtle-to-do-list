export const mainReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO-DO":
      return [...state, action.payload];

    case "GET-STORAGE":
      return [...action.payload];

    case "DELETE_TO-DO":
      return state.filter((elem) => elem.id !== action.payload);

    case "COMPLETE_TO-DO":
      return state.map((el) =>
        el.id === action.payload.id
          ? { ...el, completed: action.payload.completed }
          : el
      );
    case "CHANGE":
      return state.map((el) =>
        el.id === action.payload.id
          ? { ...el, text: action.payload.text }
          : el
      );
  }
};
