import React from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Download,
} from 'lucide-react';
import { DENTAL_SERVICES } from '../data/dentalData';
import { TIME_SLOTS } from '../hooks/useAppointmentBooking';

interface AppointmentSectionProps {
  booking: ReturnType<typeof import('../hooks/useAppointmentBooking').useAppointmentBooking>;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ booking }) => {
  const {
    currentStep,
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
    handleNextStep,
    handlePrevStep,
    handleSubmitBooking,
    getWhatsAppBookingLink,
    downloadCalendarEvent,
    resetForm,
  } = booking;

  // Min date is tomorrow
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  return (
    <section id="agendamiento" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <CalendarIcon className="w-3.5 h-3.5 text-brand-600" />
            Sistema de Agendamiento en Línea
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Agenda tu Consulta con la Dra. Zubiri
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Selecciona tu tratamiento, el horario de tu preferencia y confirma tu lugar en 4 sencillos pasos.
          </p>
        </div>

        {/* Multi-Step Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
          
          {/* Step Progress Header */}
          <div className="bg-slate-900 text-white p-4 sm:p-6">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[
                { step: 1, label: 'Tratamiento' },
                { step: 2, label: 'Fecha y Hora' },
                { step: 3, label: 'Tus Datos' },
                { step: 4, label: 'Confirmación' },
              ].map((item, idx) => (
                <div key={item.step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${
                        currentStep === item.step
                          ? 'bg-brand-500 text-white ring-4 ring-brand-500/30'
                          : currentStep > item.step
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {currentStep > item.step ? '✓' : item.step}
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs font-semibold mt-1.5 hidden sm:block ${
                        currentStep === item.step ? 'text-brand-300' : 'text-slate-400'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {idx < 3 && (
                    <div
                      className={`w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 transition-colors ${
                        currentStep > item.step ? 'bg-emerald-500' : 'bg-slate-800'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content Area */}
          <div className="p-6 sm:p-10">
            
            {/* STEP 1: Select Service */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Paso 1: ¿Qué tratamiento deseas agendar?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Elige el motivo de tu visita médica para reservar el tiempo adecuado en el consultorio.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  {DENTAL_SERVICES.map((serv) => (
                    <button
                      key={serv.id}
                      type="button"
                      onClick={() => setServiceId(serv.id)}
                      className={`p-4 rounded-2xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        serviceId === serv.id
                          ? 'border-brand-600 bg-brand-50/50 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[11px] font-bold text-brand-600 uppercase tracking-wider block">
                            {serv.category}
                          </span>
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5">
                            {serv.title}
                          </h4>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            serviceId === serv.id
                              ? 'border-brand-600 bg-brand-600'
                              : 'border-slate-300'
                          }`}
                        >
                          {serviceId === serv.id && (
                            <span className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                        <span>Duración estimada: {serv.estimatedDuration}</span>
                        {serv.popular && (
                          <span className="text-amber-600 font-semibold">★ Más solicitado</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <span>Continuar a Fecha y Hora</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Date & Time */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Paso 2: Elige fecha y horario disponible
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Tratamiento seleccionado: <strong className="text-brand-600">{selectedServiceObj.title}</strong>
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Date picker */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Fecha de Consulta
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        min={minDateStr}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1.5">
                      Horarios de atención: Lunes a Sábado. Domingos únicamente emergencias.
                    </p>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Horarios Disponibles para {selectedDate}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            selectedTimeSlot === slot
                              ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          <span>{slot}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <button
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-semibold text-sm cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Regresar</span>
                  </button>

                  <button
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <span>Continuar a Datos</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Patient Info Form */}
            {currentStep === 3 && (
              <form onSubmit={handleSubmitBooking} className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Paso 3: Datos de contacto del paciente
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Cita: {selectedServiceObj.title} · {selectedDate} a las {selectedTimeSlot}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nombre Completo *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Ana García Méndez"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. 55 1234 5678"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Correo Electrónico (Opcional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      placeholder="nombre@correo.com"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Comentarios o Síntomas para la Doctora (Opcional)
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <textarea
                      rows={2}
                      placeholder="¿Tienes alguna molestia o duda particular que debamos saber?"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-semibold text-sm cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Regresar</span>
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-semibold text-sm px-7 py-3 rounded-xl shadow-md shadow-brand-600/30 transition-all cursor-pointer"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Confirmar Cita Médica</span>
                  </button>
                </div>
              </form>
            )}

            {/* STEP 4: Success & WhatsApp Direct Link */}
            {currentStep === 4 && confirmedAppointment && (
              <div className="text-center space-y-6 py-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-9 h-9" />
                </div>

                <div>
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                    ¡Cita Registrada Exitosamente!
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                    Te esperamos en Dental Zubiri
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-lg mx-auto">
                    Hemos generado tu reservación con el folio:{' '}
                    <strong className="text-brand-700 bg-brand-50 px-2 py-0.5 rounded font-mono">
                      {confirmedAppointment.id}
                    </strong>
                  </p>
                </div>

                {/* Summary Ticket Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-md mx-auto text-left space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-slate-200/80 pb-2">
                    <span className="text-slate-500">Paciente:</span>
                    <strong className="text-slate-900">{confirmedAppointment.patientName}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/80 pb-2">
                    <span className="text-slate-500">Tratamiento:</span>
                    <strong className="text-slate-900">{confirmedAppointment.serviceTitle}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/80 pb-2">
                    <span className="text-slate-500">Fecha y Hora:</span>
                    <strong className="text-brand-600">{confirmedAppointment.date} a las {confirmedAppointment.timeSlot}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Doctora asignada:</span>
                    <strong className="text-slate-900">Dra. Zubiri</strong>
                  </div>
                </div>

                {/* Direct WhatsApp Confirmation Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={getWhatsAppBookingLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Confirmar por WhatsApp con la Dra. Zubiri</span>
                  </a>

                  <button
                    onClick={downloadCalendarEvent}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm px-5 py-3.5 rounded-xl border border-slate-200 shadow-sm cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-brand-600" />
                    <span>Guardar en mi Calendario</span>
                  </button>
                </div>

                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="text-xs text-brand-600 hover:underline font-semibold cursor-pointer"
                  >
                    Agendar otra consulta o modificar
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
