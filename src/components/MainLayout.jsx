import React from 'react';

import AddAddress from './AddAddress';
import AddressList from './AddressList';
import YandexMap from './YandexMap';

const MainLayout = () => (
  <div className="container">
    <div className="row mt-3">
      <div className="col col-md-4 mb-3">
        <div className="card shadow-sm">
          <div className="card-body">
            <AddAddress />
          </div>
          <AddressList />
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="card shadow-sm">
          <div className="card-body">
            <YandexMap />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MainLayout;
