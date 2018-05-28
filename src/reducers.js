import * as actions from "./actions";
import getRandomColor from "./RandomColors";

function appReducer(state = { color: [] }, action) {
  switch (action.type) {
    case actions.RANDOM_COLOR:
      return {
        ...state,
        color: [...state.color, getRandomColor()]
      };

    default:
      return state;
  }
}

export default appReducer;
