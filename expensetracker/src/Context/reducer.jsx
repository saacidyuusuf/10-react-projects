/* eslint-disable */

export default (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((tran) => tran.id !== action.payload);
    default:
      state;
  }
};
