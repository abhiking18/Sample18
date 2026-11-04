export type PropertyCategory = 'All' | 'Villas' | 'Apartments' | 'Houses' | 'Commercial';

export interface Property {
  id: string;
  name: string;
  tagline: string;
  category: 'Villas' | 'Apartments' | 'Houses' | 'Commercial';
  location: string;
  country: string;
  price: number;
  formattedPrice: string;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  yearBuilt: number;
  description: string;
  architecturalNotes: string;
  primaryImage: string;
  circularAccentImage: string;
  gallery: string[];
  amenities: string[];
  isFeatured?: boolean;
  coordinates?: { lat: number; lng: number };
}

export interface VisitBooking {
  propertyId: string;
  propertyName: string;
  date: string;
  timeSlot: string;
  tourType: 'in-person' | 'virtual';
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
  bookingRef: string;
}

export interface EnquirySubmission {
  fullName: string;
  phone: string;
  email: string;
  propertyInterest: string;
  message: string;
}
