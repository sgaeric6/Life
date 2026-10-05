export interface Location {
  id: string;
  name: string;
  type: 'residential' | 'commercial' | 'education' | 'entertainment' | 'transport' | 'business';
  description: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export const LAGOS_LOCATIONS: Location[] = [
  { id: 'vi', name: 'Victoria Island', type: 'commercial', description: 'Business district', coordinates: { latitude: 6.4281, longitude: 3.4219 } },
  { id: 'lekki', name: 'Lekki', type: 'residential', description: 'Residential and nightlife', coordinates: { latitude: 6.4541, longitude: 3.5015 } },
  { id: 'ikoyi', name: 'Ikoyi', type: 'residential', description: 'Upscale neighborhoods', coordinates: { latitude: 6.4542, longitude: 3.4396 } },
  { id: 'surulere', name: 'Surulere', type: 'business', description: 'Bustling community zone', coordinates: { latitude: 6.4993, longitude: 3.3594 } },
  { id: 'yaba', name: 'Yaba', type: 'education', description: 'Student and tech hub', coordinates: { latitude: 6.5125, longitude: 3.3667 } },
  { id: 'ikeja', name: 'Ikeja', type: 'commercial', description: 'Commercial and government center', coordinates: { latitude: 6.6018, longitude: 3.3515 } },
  { id: 'ajah', name: 'Ajah', type: 'residential', description: 'Growing suburb', coordinates: { latitude: 6.4698, longitude: 3.5852 } },
  { id: 'airport', name: 'Airport', type: 'transport', description: 'Travel hub', coordinates: { latitude: 6.5774, longitude: 3.3212 } },
  { id: 'beach', name: 'Beach', type: 'entertainment', description: 'Rest, fun, and social meetups', coordinates: { latitude: 6.4308, longitude: 3.6003 } },
  { id: 'school', name: 'School', type: 'education', description: 'Academic center', coordinates: { latitude: 6.5208, longitude: 3.3866 } },
];
