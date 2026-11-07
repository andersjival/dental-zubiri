import { DentalService, Testimonial, BeforeAfterCase } from '../types/dental';

export const CLINIC_INFO = {
  name: 'Dental Zubiri',
  tagline: 'Sonrisas Sanas, Futuro Brillante',
  doctorName: 'Dra. Zubiri',
  doctorTitle: 'Especialista en Odontología Integral & Estética Dental',
  phone: '+52 55 1234 5678',
  phoneDisplay: '+52 (55) 1234-5678',
  whatsapp: '525512345678',
  email: 'contacto@dentalzubiri.com',
  address: 'Av. Principal Médica 450, Consultorio 302, Ciudad de México',
  hoursWeekday: 'Lunes a Viernes: 9:00 AM – 7:00 PM',
  hoursSaturday: 'Sábados: 9:00 AM – 3:00 PM',
  hoursSunday: 'Domingos: Cerrado (Solo Urgencias)',
};

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 'blanqueamiento',
    title: 'Blanqueamiento Dental Philips Zoom',
    category: 'Estética Dental',
    shortDesc: 'Aclara hasta 8 tonos en una sola sesión con tecnología de luz LED fría segura para tu esmalte.',
    fullDesc: 'Tratamiento clínico avanzado de blanqueamiento con tecnología WhiteSpeed / Philips. Elimina manchas profundas y devuelve el tono natural blanco y radiante a tus dientes sin dañar encías ni sensibilidad prolongada.',
    iconName: 'Sparkles',
    estimatedDuration: '60 min',
    popular: true,
  },
  {
    id: 'ortodoncia',
    title: 'Ortodoncia & Alineadores Invisibles',
    category: 'Alineación Dental',
    shortDesc: 'Alineadores transparentes y brackets de última generación para una sonrisa perfecta y discreta.',
    fullDesc: 'Corrección de mordida y alineamiento estético mediante férulas invisibles removibles y ortodoncia biomecánica de baja fricción.',
    iconName: 'Smile',
    estimatedDuration: '45 min',
    popular: true,
  },
  {
    id: 'implantes',
    title: 'Implantes Dentales de Titanio',
    category: 'Rehabilitación',
    shortDesc: 'Solución definitiva y fija para reemplazar piezas dentales perdidas con máxima biocompatibilidad.',
    fullDesc: 'Rehabilitación con implantes de titanio oseointegrables de grado médico y coronas de circonio personalizadas que lucen y funcionan como dientes 100% naturales.',
    iconName: 'ShieldCheck',
    estimatedDuration: '60 min',
  },
  {
    id: 'odontologia-general',
    title: 'Odontología General & Preventiva',
    category: 'Cuidado Integral',
    shortDesc: 'Limpiezas profundas por ultrasonido, resinas estéticas y valoraciones integrales con cámara intraoral.',
    fullDesc: 'Prevención integral de caries, remoción de sarro supragingival con ultrasonido Piezon, pulido con pasta profiláctica y resinas nanohíbridas del color exacto de tu diente.',
    iconName: 'Stethoscope',
    estimatedDuration: '40 min',
  },
  {
    id: 'diseno-sonrisa',
    title: 'Diseño de Sonrisa & Carillas',
    category: 'Alta Estética',
    shortDesc: 'Carillas ultra delgadas de porcelana y resina inyectada diseñadas a la medida de tu rostro.',
    fullDesc: 'Planificación digital del diseño de tu sonrisa considerando proporciones faciales, forma de labios y tono de piel para un resultado armónico y natural.',
    iconName: 'HeartHandshake',
    estimatedDuration: '90 min',
    popular: true,
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatría Amigable',
    category: 'Cuidado Infantil',
    shortDesc: 'Atención cálida, sin miedos y preventiva para el cuidado de los dientes de niños y adolescentes.',
    fullDesc: 'Enfoque lúdico y sin estrés para los pequeños: selladores de fosetas y fisuras, aplicación de flúor barniz y técnicas de cepillado preventivo.',
    iconName: 'Baby',
    estimatedDuration: '30 min',
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'caso-1',
    title: 'Blanqueamiento Clínico con Guía A1',
    subtitle: 'Aclaramiento profundo de 6 tonos alcanzando el nivel de blancura A1 en una sola sesión de 45 minutos.',
    image: '/images/blanqueamiento-caso1.png',
    technique: 'Philips WhiteSpeed LED + Gel Desensibilizante',
    shadeResult: 'Tono A1 (Máxima luminosidad)',
  },
  {
    id: 'caso-2',
    title: 'Aclaramiento y Limpieza de Esmalte',
    subtitle: 'Eliminación completa de pigmentaciones por café y té, devolviendo brillo y simetría al arco dental.',
    image: '/images/blanqueamiento-caso2.png',
    technique: 'Profilaxis Ultrasónica + Blanqueamiento de Consultorio',
    shadeResult: 'Uniformidad estética 100%',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carolina Mendiola',
    role: 'Paciente de Blanqueamiento',
    comment: 'La Dra. Zubiri es sumamente profesional y delicada. Me realicé el blanqueamiento antes de mi boda y el resultado superó todas mis expectativas, ¡mis dientes quedaron blanquísimos sin dolor!',
    rating: 5,
    treatment: 'Blanqueamiento Philips',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Roberto Valenzuela',
    role: 'Paciente de Ortodoncia Invisible',
    comment: 'Las instalaciones son impecables y el trato es inmejorable. Los alineadores invisibles fueron la mejor decisión para corregir mis dientes sin que nadie lo notara en mi trabajo.',
    rating: 5,
    treatment: 'Alineadores Invisibles',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Mariana Fuentes',
    role: 'Mamá de Paciente Infantil',
    comment: 'Llevé a mis dos hijos para su revisión y limpieza. La doctora tiene una paciencia increíble y logró que mis pequeños perdieran por completo el miedo al dentista. 100% recomendada.',
    rating: 5,
    treatment: 'Odontopediatría & Prevención',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
];

export const CLINIC_STATS = [
  { label: 'Pacientes Satisfechos', value: '+3,500' },
  { label: 'Años de Experiencia', value: '10+' },
  { label: 'Tecnología Clínica', value: '100% Digital' },
  { label: 'Calificación Pacientes', value: '4.9 ★★★★★' },
];
