export interface DentalService {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  estimatedDuration: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  treatment: string;
  avatarUrl: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface AppointmentData {
  id?: string;
  serviceId: string;
  serviceTitle: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  notes?: string;
  createdAt?: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  technique: string;
  shadeResult: string;
}
