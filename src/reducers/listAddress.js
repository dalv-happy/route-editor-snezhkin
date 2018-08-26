import { arrayMove } from 'react-sortable-hoc';

const initialState = {
  address: [],
};

export default function listAddress(state = initialState, action) {
  const value = action.payload;
  if (value === null || value === undefined) {
    return state;
  }

  switch (action.type) {
    case 'ADD_ADDRESS': {
      const newAddress = state.address.concat({
        name: value,
        coord: [54.317986, 48.404205],
      });
      return Object.assign({}, state, {
        address: newAddress,
      });
    }
    case 'DELETE_ADDRESS': {
      const array = [...state.address];
      array.splice(value, 1);
      return Object.assign({}, state, {
        address: array,
      });
    }
    case 'OVERWRITE_COORDINATES': {
      const array = [...state.address];
      array[value.index].coord = value.value;
      return Object.assign({}, state, {
        address: array,
      });
    }
    case 'DRAG_AND_DROP_ADDRESS':
      return Object.assign({}, state, {
        address: arrayMove(state.address, value.oldIndex, value.newIndex),
      });
    default:
  }
  return state;
}
