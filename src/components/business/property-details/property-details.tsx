import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../common/layout/layout';
import { selectedPropertyId } from '../propertiesSlice';

const PropertyDetails = () => {
  const propertyId = useSelector(selectedPropertyId);

  return (
    <Layout>
      <div>Selected property id: {propertyId}</div>
    </Layout>
  );
};

export default PropertyDetails;
