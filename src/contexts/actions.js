import { SELECTED_FILE, SET_FILE } from "./types";

export const fileActions = (state, action) => {
  switch (action.type) {
    case SELECTED_FILE: {
      console.log(action.payload);
      let file = action.payload.file;
      action.dispatch({
        type: SET_FILE,
        payload: file,
        key: "file"
      });
      return state;
    }
    default:
      return state;
  }
};
