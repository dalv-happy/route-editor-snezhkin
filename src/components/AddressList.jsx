import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';

import DragIcon from '../img/drag.svg';
import { IconDragStyle } from '../styles/listStyle';

const AddressList = ({ address, onDeleteAddress, onSortEnd }) => {
  const DragHandle = SortableHandle(() => (
    <img src={DragIcon} alt="" className={IconDragStyle} />
  ));
  const SortableItem = SortableElement(({ value, id }) => (
    <li className="list-group-item">
      <div className="d-flex justify-content-between">
        <div>
          <DragHandle id={`#${id + 1}`} />
          <strong>{` ${id + 1} `}</strong>
          {`– ${value.name}`}
        </div>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => onDeleteAddress(id)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </li>
  ));
  const SortableList = SortableContainer(({ items }) => (
    <ul className="list-group list-group-flush">
      {items.map((value, index) => {
        const id = index;
        return (
          <SortableItem
            key={`item-${id}`}
            index={index}
            id={index}
            value={value}
            onDeleteAddress={onDeleteAddress}
          />
        );
      })}
    </ul>
  ));
  return <SortableList items={address} useDragHandle onSortEnd={onSortEnd} />;
};

AddressList.propTypes = {
  address: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onDeleteAddress: PropTypes.func.isRequired,
  onSortEnd: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    address: state.listAddress.address,
  }),
  dispatch => ({
    onDeleteAddress: index => {
      dispatch({ type: 'DELETE_ADDRESS', payload: index });
    },
    onSortEnd: ({ oldIndex, newIndex }) => {
      dispatch({
        type: 'DRAG_AND_DROP_ADDRESS',
        payload: { oldIndex, newIndex },
      });
    },
  })
)(AddressList);
