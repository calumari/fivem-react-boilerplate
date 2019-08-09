export const initialState = {
  hidden: true,
  characters: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECIEVE_CHARACTERS':
      return Object.assign({}, state, {
        characters: action.payload.characters,
      });
    case 'CHARACTERS_SHOW':
      return Object.assign({}, state, { hidden: false });
    case 'CHARACTERS_HIDE':
      return Object.assign({}, state, { hidden: true });
    default:
      return state;
  }
};

export default appReducer;
