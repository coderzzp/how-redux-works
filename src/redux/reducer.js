const defaultState={
  
}

const chatReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_CHAT_PENDING':
      return Object.assign({}, state, {
        chatLog: action.payload
      });
    case 'ADD_CHAT_FULFILLED':
      return Object.assign({}, state, {
        chatLog: action.payload
      });
    default: return state;
  }
};
export default chatReducer