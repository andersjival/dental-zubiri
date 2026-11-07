import { useState, useEffect } from 'react';
import { AppointmentData } from '../types/dental';
import { DENTAL_SERVICES, CLINIC_INFO } from '../data/dentalData';

export const TIME_SLOTS = [
  '09:00 AM',
  '10:15 AM',
  '11:30 AM',
  '01:00 PM',
  '03:30 PM',
  '04:45 PM',
  '06:00 PM',
];

const INITIAL_DEMO_APPOINTMENTS: AppointmentData[] = [
  {
    id: 'DZ-849201',
    serviceId: 'blanqueamiento',
    serviceTitle: 'Blanqueamiento Dental Philips Zoom',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '10:15 AM',
    patientName: 'Valeria Gómez',
    patientPhone: '+52 55 4912 3841',
    patientEmail: 'valeria.gomez@gmail.com',
    notes: 'Interesada en blanqueamiento para evento social el fin de semana.',
    status: 'Confirmada',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'DZ-630192',
    serviceId: 'ortodoncia',
    serviceTitle: 'Ortodoncia & Alineadores Invisibles',
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    timeSlot: '03:30 PM',
    patientName: 'Carlos Ramos',
    patientPhone: '+52 55 8392 1092',
    patientEmail: 'carlos.ramos@outlook.com',
    notes: 'Primera valoración para alineadores transparentes.',
    status: 'Pendiente',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'DZ-518290',
    serviceId: 'odontologia-general',
    serviceTitle: 'Odontología General & Preventiva',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '11:30 AM',
    patientName: 'Sofía Morales',
    patientPhone: '+52 55 2019 4432',
    patientEmail: 'sofia.morales@gmail.com',
    notes: 'Limpieza dental ultrasónica anual.',
    status: 'Confirmada',
    createdAt: new Date().toISOString(),
  },
];

export function useAppointmentBooking() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [serviceId, setServiceId] = useState<string>(DENTAL_SERVICES[0].id);
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(TIME_SLOTS[0]);
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmedAppointment, setConfirmedAppointment] = useState<AppointmentData | null>(null);
  const [savedAppointments, setSavedAppointments] = useState<AppointmentData[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('dental_zubiri_appointments');
      if (stored) {
        setSavedAppointments(JSON.parse(stored));
      } else {
        setSavedAppointments(INITIAL_DEMO_APPOINTMENTS);
        localStorage.setItem('dental_zubiri_appointments', JSON.stringify(INITIAL_DEMO_APPOINTMENTS));
      }
    } catch {
      setSavedAppointments(INITIAL_DEMO_APPOINTMENTS);
    }
  }, []);

  const openBookingWithService = (id?: string) => {
    if (id) setServiceId(id);
    setCurrentStep(1);
    setIsOpen(true);
  };

  const selectedServiceObj = DENTAL_SERVICES.find((s) => s.id === serviceId) || DENTAL_SERVICES[0];

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleSubmitBooking = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      alert('Por favor completa tu nombre y teléfono de contacto.');
      return;
    }

    const newAppt: AppointmentData = {
      id: 'DZ-' + Date.now().toString().slice(-6),
      serviceId,
      serviceTitle: selectedServiceObj.title,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      patientName: patientName.trim(),
      patientPhone: patientPhone.trim(),
      patientEmail: patientEmail.trim(),
      notes: notes.trim(),
      status: 'Pendiente',
      createdAt: new Date().toISOString(),
    };

    const updated = [newAppt, ...savedAppointments];
    setSavedAppointments(updated);
    try {
      localStorage.setItem('dental_zubiri_appointments', JSON.stringify(updated));
    } catch {
      // ignore
    }

    setConfirmedAppointment(newAppt);
    setCurrentStep(4);
  };

  const addManualAppointment = (newAppt: AppointmentData) => {
    const updated = [newAppt, ...savedAppointments];
    setSavedAppointments(updated);
    try {
      localStorage.setItem('dental_zubiri_appointments', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const updateAppointmentStatus = (id: string, newStatus: AppointmentData['status']) => {
    const updated = savedAppointments.map((app) =>
      app.id === id ? { ...app, status: newStatus } : app
    );
    setSavedAppointments(updated);
    try {
      localStorage.setItem('dental_zubiri_appointments', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const deleteAppointment = (id: string) => {
    const updated = savedAppointments.filter((app) => app.id !== id);
    setSavedAppointments(updated);
    try {
      localStorage.setItem('dental_zubiri_appointments', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const getWhatsAppBookingLink = () => {
    if (!confirmedAppointment) return '';
    const text = `¡Hola Dra. Zubiri! 👋 Acabo de agendar una consulta médica en Dental Zubiri:
📋 *Folio:* ${confirmedAppointment.id}
🦷 *Tratamiento:* ${confirmedAppointment.serviceTitle}
📅 *Fecha:* ${confirmedAppointment.date}
⏰ *Horario:* ${confirmedAppointment.timeSlot}
👤 *Paciente:* ${confirmedAppointment.patientName}
📱 *Teléfono:* ${confirmedAppointment.patientPhone}
${confirmedAppointment.notes ? `📝 *Motivo:* ${confirmedAppointment.notes}` : ''}

Por favor, confirmen mi turno. ¡Muchas gracias!`;

    return `https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const downloadCalendarEvent = () => {
    if (!confirmedAppointment) return;
    const cleanDate = confirmedAppointment.date.replace(/-/g, '');
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Dental Zubiri//Sistema de Citas//ES
BEGIN:VEVENT
SUMMARY:Cita Dental Zubiri - ${confirmedAppointment.serviceTitle}
DESCRIPTION:Cita odontológica para ${confirmedAppointment.patientName} en Dental Zubiri. Doctora: Dra. Zubiri.
LOCATION:${CLINIC_INFO.address}
DTSTART:${cleanDate}T150000Z
DTEND:${cleanDate}T160000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Cita-DentalZubiri-${confirmedAppointment.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportAppointmentsToCSV = () => {
    if (savedAppointments.length === 0) {
      alert('No hay citas registradas para exportar.');
      return;
    }
    const headers = ['Folio', 'Paciente', 'Telefono', 'Email', 'Tratamiento', 'Fecha', 'Hora', 'Estado', 'Notas'];
    const rows = savedAppointments.map((app) => [
      `"${app.id || ''}"`,
      `"${app.patientName.replace(/"/g, '""')}"`,
      `"${app.patientPhone}"`,
      `"${app.patientEmail || ''}"`,
      `"${app.serviceTitle.replace(/"/g, '""')}"`,
      `"${app.date}"`,
      `"${app.timeSlot}"`,
      `"${app.status || 'Pendiente'}"`,
      `"${(app.notes || '').replace(/"/g, '""')}"`,
    ]);
    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Citas-Dental-Zubiri-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setPatientName('');
    setPatientPhone('');
    setPatientEmail('');
    setNotes('');
    setConfirmedAppointment(null);
    setIsOpen(false);
  };

  return {
    isOpen,
    setIsOpen,
    currentStep,
    setCurrentStep,
    serviceId,
    setServiceId,
    selectedServiceObj,
    selectedDate,
    setSelectedDate,
    selectedTimeSlot,
    setSelectedTimeSlot,
    patientName,
    setPatientName,
    patientPhone,
    setPatientPhone,
    patientEmail,
    setPatientEmail,
    notes,
    setNotes,
    confirmedAppointment,
    openBookingWithService,
    handleNextStep,
    handlePrevStep,
    handleSubmitBooking,
    getWhatsAppBookingLink,
    downloadCalendarEvent,
    resetForm,
    savedAppointments,
    updateAppointmentStatus,
    deleteAppointment,
    exportAppointmentsToCSV,
    addManualAppointment,
  };
}
