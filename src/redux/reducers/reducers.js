import { ADD_NOTE, UPDATE_NOTE, REMOVE_NOTE } from '../actions/actions';

const initialState = {
  notes: []
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NOTE:
      return {
        notes: [
          ...state.notes,
          {
            title: action.title,
            content: action.content,
            key: action.key
          }
        ]
      };
    case UPDATE_NOTE:
      return {
        notes: state.notes.map((currentValue) => {
          if (currentValue.key === action.key) {
            currentValue.title = action.title;
            currentValue.content = action.content;
          }
          return currentValue;
        })
      };
    case REMOVE_NOTE:
      return {
        notes: state.notes.filter((note, index) => index !== action.id)
      };

    default:
      return state;
  };
}

export default rootReducer;