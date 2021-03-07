import { PropertyType } from '../enums/property-type.enum';

export interface IProperty {
  id: string;
  image: string;
  rating: number;
  title: string;
  description: string;
  price: number;
  type: PropertyType;
  comments: string;
  avatar: string;
  username: string;
  country: string;
  city?: string;
}
