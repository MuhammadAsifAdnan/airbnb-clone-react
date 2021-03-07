import React from 'react';
import { IProperty } from '../../../models/property';

import './property-card.scss';

interface IPropertyCardProps {
  property: IProperty;
}

const PropertyCard = ({ property }: IPropertyCardProps) => {
  return (
    <div className="propertyCardWrapper">
      <h4 className="title">{property.title}</h4>
      <img className="photo" src={property.image} alt="property"></img>
      <p className="comment">{property.comments}</p>
    </div>
  );
};

export default PropertyCard;
