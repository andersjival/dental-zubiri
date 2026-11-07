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

export function useAppointmentBooking() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [serviceId, setServiceId] = useState<string>(DENTAL_SERVICES[0].id);
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    // Tomorrow as default
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
      }
    } catch {
      // ignore
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
  };
}
