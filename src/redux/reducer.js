const defaultState={
  
}

const chatReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_CHAT':
      return Object.assign({}, state, {
        chatLog: state.chatLog+payload
      });
    default: return state;
  }
};
export default chatReducer