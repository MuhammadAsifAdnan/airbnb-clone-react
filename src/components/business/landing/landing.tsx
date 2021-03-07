import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../common/layout/layout';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProperties,
  selectAllProperties,
  selectPropertiesStatus,
  setSelectedPropertyId,
} from '../propertiesSlice';
import { ApiStatus } from '../../../enums/api-status.enum';
import { IProperty } from '../../../models/property';
import PropertyCard from '../../common/property/property-card';

import './landing.scss';

const Landing = () => {
  const properties = useSelector(selectAllProperties);
  const propertiesStatus = useSelector(selectPropertiesStatus);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (propertiesStatus === ApiStatus.IDLE) {
      dispatch(fetchProperties());
    }
  }, [propertiesStatus, dispatch]);

  const handleSelectProperty = (id: string) => {
    dispatch(setSelectedPropertyId(id));
    history.push(`/property-details/${id}`);
  };

  return (
    <Layout>
      <div className="propertiesWrapper">
        {properties.map((property: IProperty) => (
          <div
            key={property.id}
            onClick={() => {
              handleSelectProperty(property.id);
            }}
          >
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Landing;
