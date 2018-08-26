const initialState = {
  address: '',
};

export default function address(state = initialState, action) {
  const value = action.payload;
  if (value === null || value === undefined) {
    return state;
  }

  switch (action.type) {
    case 'SET_ADDRESS':
      return Object.assign({}, state, {
        address: value,
      });
    case 'ADDRESS_CLEAR':
      return Object.assign({}, state, {
        address: value,
      });
    default:
  }
  return state;
}
