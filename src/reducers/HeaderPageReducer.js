import { SHOW_HOME, SHOW_USER } from "../constants/actionTypes.js";

const initialstate = {
  show: false,
  slide: false,
};
export default (state = { show: true, slide: false }, action) => {
  switch (action.type) {
    case "SHOW_USER":
      console.log(action.payload);
      return {
        ...state,
        show: false,
        slide: true,
      };
    case "SHOW_HOME":
      return {
        ...state,
        show: true,
        slide: true,
      };
    default:
      return state;
  }
};
