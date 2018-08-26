/* eslint-disable no-underscore-dangle */
import React from 'react';
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapState = { center: [54.317986, 48.404205], zoom: 12 };

const YandexMap = ({ address, onOverwriteCoord }) => {
  const onGeometryChange = (value, index) => {
    onOverwriteCoord(value, index);
  };
  return (
    <YMaps>
      <Map state={mapState} width="100%">
        {address.map((value, index) => {
          const id = index;
          return (
            <div key={id}>
              <Placemark
                geometry={{
                  coordinates: value.coord,
                }}
                properties={{
                  hintContent: value.name,
                  balloonContent: value.name,
                  iconContent: index + 1,
                }}
                options={{
                  draggable: true,
                }}
                onGeometryChange={e =>
                  onGeometryChange(
                    e.originalEvent.target.geometry._coordinates,
                    index
                  )
                }
              />
            </div>
          );
        })}
        <Polyline
          geometry={{
            coordinates: address.map(value => value.coord),
          }}
          options={{
            strokeWidth: 2,
          }}
        />
      </Map>
    </YMaps>
  );
};

YandexMap.propTypes = {
  address: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onOverwriteCoord: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    address: state.listAddress.address,
  }),
  dispatch => ({
    onOverwriteCoord: (value, index) => {
      dispatch({ type: 'OVERWRITE_COORDINATES', payload: { value, index } });
    },
  })
)(YandexMap);
