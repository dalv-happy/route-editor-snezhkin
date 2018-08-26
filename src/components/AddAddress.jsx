import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AddAddress = ({ address, onSetAddress, onAddAddressToMap }) => {
  const onSumbit = event => {
    event.preventDefault();
    const addressValue = event.target[0].value;
    onAddAddressToMap(addressValue);
  };
  return (
    <form onSubmit={onSumbit}>
      <input
        className="form-control form-control-lg"
        placeholder="Новая точка маршрута"
        value={address}
        onChange={onSetAddress}
      />
    </form>
  );
};

AddAddress.propTypes = {
  address: PropTypes.string.isRequired,
  onSetAddress: PropTypes.func.isRequired,
  onAddAddressToMap: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    address: state.address.address,
  }),
  dispatch => ({
    onSetAddress: event => {
      dispatch({ type: 'SET_ADDRESS', payload: event.target.value });
    },
    onAddAddressToMap: address => {
      dispatch({ type: 'ADD_ADDRESS', payload: address });
      dispatch({ type: 'ADDRESS_CLEAR', payload: '' });
    },
  })
)(AddAddress);
