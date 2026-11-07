import React, { useState, useEffect } from 'react';
import {
  Lock,
  ArrowLeft,
  Search,
  FileSpreadsheet,
  Plus,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  Trash2,
  AlertCircle,
  X,
} from 'lucide-react';
import { AppointmentData } from '../types/dental';
import { DENTAL_SERVICES, CLINIC_INFO } from '../data/dentalData';
import { TIME_SLOTS } from '../hooks/useAppointmentBooking';

interface AdminPageProps {
  onNavigateHome: () => void;
  appointments: AppointmentData[];
  onUpdateStatus: (id: string, status: AppointmentData['status']) => void;
  onDeleteAppointment: (id: string) => void;
  onExportCSV: () => void;
  onAddManualAppointment: (newAppt: AppointmentData) => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({
  onNavigateHome,
  appointments,
  onUpdateStatus,
  onDeleteAppointment,
  onExportCSV,
  onAddManualAppointment,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('dental_zubiri_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'Todas' | 'Pendiente' | 'Confirmada' | 'Atendida' | 'Cancelada'>('Todas');
  const [dateFilter, setDateFilter] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // New manual appointment form state
  const [manualName, setManualName] = useState('');
  const [manualPhone, setManualPhone] = useState('');
  const [manualEmail, setManualEmail] = useState('');
  const [manualServiceId, setManualServiceId] = useState(DENTAL_SERVICES[0].id);
  const [manualDate, setManualDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [manualSlot, setManualSlot] = useState(TIME_SLOTS[0]);
  const [manualNotes, setManualNotes] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === '1234' || pinInput.trim() === 'zubiri') {
      setIsAuthenticated(true);
      sessionStorage.setItem('dental_zubiri_admin_auth', 'true');
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('dental_zubiri_admin_auth');
    setPinInput('');
  };

  const handleCreateManualAppt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualName.trim() || !manualPhone.trim()) {
      alert('Nombre y teléfono son obligatorios');
      return;
    }
    const servObj = DENTAL_SERVICES.find((s) => s.id === manualServiceId) || DENTAL_SERVICES[0];
    const newAppt: AppointmentData = {
      id: 'DZ-' + Date.now().toString().slice(-6),
      serviceId: manualServiceId,
      serviceTitle: servObj.title,
      date: manualDate,
      timeSlot: manualSlot,
      patientName: manualName.trim(),
      patientPhone: manualPhone.trim(),
      patientEmail: manualEmail.trim(),
      notes: manualNotes.trim() ? `[Manual/Recepción] ${manualNotes.trim()}` : '[Manual/Recepción]',
      status: 'Confirmada',
      createdAt: new Date().toISOString(),
    };
    onAddManualAppointment(newAppt);
    setShowAddModal(false);
    setManualName('');
    setManualPhone('');
    setManualEmail('');
    setManualNotes('');
  };

  const filteredAppointments = appointments.filter((app) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      app.patientName.toLowerCase().includes(q) ||
      app.patientPhone.includes(q) ||
      (app.id && app.id.toLowerCase().includes(q)) ||
      app.serviceTitle.toLowerCase().includes(q);

    const matchesStatus = statusFilter === 'Todas' ? true : (app.status || 'Pendiente') === statusFilter;
    const matchesDate = dateFilter ? app.date === dateFilter : true;

    return matchesSearch && matchesStatus && matchesDate;
  });

  const getStatusBadgeClass = (status?: string) => {
    switch (status) {
      case 'Confirmada':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Atendida':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Cancelada':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'Pendiente':
      default:
        return 'bg-amber-100 text-amber-800 border-amber-200';
    }
  };

  const getWhatsAppPatientLink = (app: AppointmentData) => {
    const cleanPhone = app.patientPhone.replace(/\D/g, '');
    const message = encodeURIComponent(
      `Hola ${app.patientName}, te saluda la Dra. Zubiri de la Clínica Dental Zubiri. Te escribo con respecto a tu cita para *${app.serviceTitle}* programada para el *${app.date}* a las *${app.timeSlot}*.`
    );
    return `https://wa.me/${cleanPhone || CLINIC_INFO.whatsapp}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      
      {/* Top Admin Navbar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-xl transition-colors cursor-pointer border border-slate-700"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a la Web</span>
            </button>

            <div className="h-5 w-px bg-slate-800 hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-sm">
                DZ
              </div>
              <div>
                <span className="font-bold text-sm tracking-tight block leading-tight">
                  Dental Zubiri · Panel de Control
                </span>
                <span className="text-[10px] text-brand-400 font-semibold block">
                  Portal Exclusivo de Citas Médicas
                </span>
              </div>
            </div>
          </div>

          {/* Right Header User Info */}
          {isAuthenticated && (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">
                <img
                  src="/images/dra-zubiri-consultorio.png"
                  alt="Dra. Zubiri"
                  className="w-8 h-8 rounded-full object-cover border border-brand-500"
                />
                <div className="text-left">
                  <span className="text-xs font-bold block leading-tight">Dra. Zubiri</span>
                  <span className="text-[10px] text-emerald-400 block leading-tight">Sesión Activa</span>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="text-xs text-slate-400 hover:text-white hover:bg-slate-800 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
              >
                Bloquear / Salir
              </button>
            </div>
          )}

        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* LOGIN GATE */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto my-12 bg-white rounded-3xl shadow-xl border border-slate-200/90 p-8 sm:p-10 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-4 border border-brand-100">
              <Lock className="w-8 h-8" />
            </div>

            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Portal Médico Confidencial
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Esta sección es de uso exclusivo para la Dra. Zubiri y el personal de recepción médica para la administración de la agenda.
            </p>

            <form onSubmit={handlePinSubmit} className="mt-6 space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  PIN de Acceso
                </label>
                <input
                  type="password"
                  maxLength={10}
                  placeholder="Introduce el PIN (1234)"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="w-full text-center text-lg tracking-widest px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 font-mono font-bold"
                  autoFocus
                />
              </div>

              {pinError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>PIN incorrecto. El PIN por defecto es <strong>1234</strong></span>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#006fe6] hover:bg-[#005bb8] active:scale-95 text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                Ingresar al Panel Administrativo
              </button>

              <p className="text-[11px] text-slate-400 text-center pt-2">
                Seguridad HIPAA / Confidencialidad de Pacientes Dental Zubiri
              </p>
            </form>
          </div>
        ) : (
          /* AUTHENTICATED ADMIN DASHBOARD */
          <div className="space-y-6 animate-fadeIn">
            
            {/* Top Stat Summary Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Total de Citas
                </span>
                <p className="text-3xl font-extrabold text-slate-900 mt-1">
                  {appointments.length}
                </p>
                <span className="text-[11px] text-slate-500 mt-1 block">Historial registrado</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm bg-gradient-to-br from-white to-amber-50/30">
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                  Por Confirmar
                </span>
                <p className="text-3xl font-extrabold text-amber-600 mt-1">
                  {appointments.filter((a) => (a.status || 'Pendiente') === 'Pendiente').length}
                </p>
                <span className="text-[11px] text-amber-700/80 mt-1 block font-medium">Requieren atención</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm bg-gradient-to-br from-white to-emerald-50/30">
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                  Confirmadas
                </span>
                <p className="text-3xl font-extrabold text-emerald-600 mt-1">
                  {appointments.filter((a) => a.status === 'Confirmada').length}
                </p>
                <span className="text-[11px] text-emerald-700/80 mt-1 block font-medium">Turnos asegurados</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-blue-200 shadow-sm bg-gradient-to-br from-white to-blue-50/30">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                  Atendidas
                </span>
                <p className="text-3xl font-extrabold text-blue-600 mt-1">
                  {appointments.filter((a) => a.status === 'Atendida').length}
                </p>
                <span className="text-[11px] text-blue-700/80 mt-1 block font-medium">Consultas concluidas</span>
              </div>
            </div>

            {/* Control & Filter Toolbar */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-sm space-y-4">
              
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="Buscar por paciente, teléfono, folio o servicio..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
                  />
                </div>

                {/* Date Filter & Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs text-slate-600">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <input
                      type="date"
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                      className="bg-transparent text-xs font-semibold focus:outline-none text-slate-700"
                    />
                    {dateFilter && (
                      <button
                        onClick={() => setDateFilter('')}
                        className="text-slate-400 hover:text-slate-700 text-xs ml-1"
                        title="Limpiar fecha"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  <button
                    onClick={onExportCSV}
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>Exportar CSV</span>
                  </button>

                  <button
                    onClick={() => setShowAddModal(true)}
                    className="inline-flex items-center gap-1.5 bg-[#006fe6] hover:bg-[#005bb8] text-white text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>+ Nueva Cita Manual</span>
                  </button>
                </div>
              </div>

              {/* Status Tabs */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs font-semibold border-t border-slate-100 pt-3">
                <span className="text-slate-400 mr-2 text-[11px] uppercase tracking-wider">Estado:</span>
                {(['Todas', 'Pendiente', 'Confirmada', 'Atendida', 'Cancelada'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                      statusFilter === st
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

            </div>

            {/* Appointments Table / Cards */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
              
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <h2 className="font-bold text-slate-900 text-base">
                  Citas Agendadas ({filteredAppointments.length})
                </h2>
                <span className="text-xs text-slate-400">
                  Actualizado en tiempo real
                </span>
              </div>

              {filteredAppointments.length === 0 ? (
                <div className="p-12 text-center text-slate-400 space-y-2">
                  <Calendar className="w-12 h-12 mx-auto stroke-[1.2] text-slate-300" />
                  <p className="text-sm font-semibold text-slate-600">No hay citas registradas con los filtros seleccionados.</p>
                  <p className="text-xs text-slate-400">Prueba cambiando el estado o la fecha de búsqueda.</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {filteredAppointments.map((app) => (
                    <div
                      key={app.id || Math.random()}
                      className="p-5 hover:bg-slate-50/70 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                    >
                      {/* Left: Patient and Appointment Info */}
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className="font-mono text-xs font-extrabold bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded-lg border border-slate-200">
                            {app.id}
                          </span>
                          <h3 className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                            <User className="w-4 h-4 text-brand-600" />
                            {app.patientName}
                          </h3>
                          <span
                            className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getStatusBadgeClass(
                              app.status
                            )}`}
                          >
                            {app.status || 'Pendiente'}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                          <span className="font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                            🦷 {app.serviceTitle}
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-slate-700">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            {app.date}
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-slate-700">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {app.timeSlot}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Phone className="w-3.5 h-3.5 text-slate-400" />
                            {app.patientPhone}
                          </span>
                          {app.patientEmail && (
                            <span className="flex items-center gap-1">
                              <Mail className="w-3.5 h-3.5 text-slate-400" />
                              {app.patientEmail}
                            </span>
                          )}
                        </div>

                        {app.notes && (
                          <p className="text-xs text-slate-600 bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl italic">
                            Nota del paciente: "{app.notes}"
                          </p>
                        )}
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-2 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100 justify-end">
                        {/* WhatsApp direct chat */}
                        <a
                          href={getWhatsAppPatientLink(app)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold px-3 py-2 rounded-xl transition-colors"
                          title="Contactar paciente por WhatsApp"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>

                        {/* Status switcher */}
                        <select
                          value={app.status || 'Pendiente'}
                          onChange={(e) =>
                            onUpdateStatus(app.id!, e.target.value as AppointmentData['status'])
                          }
                          className="bg-slate-50 border border-slate-300 text-xs font-bold rounded-xl px-2.5 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
                        >
                          <option value="Pendiente">Pendiente</option>
                          <option value="Confirmada">Confirmada</option>
                          <option value="Atendida">Atendida</option>
                          <option value="Cancelada">Cancelada</option>
                        </select>

                        {/* Delete */}
                        <button
                          onClick={() => {
                            if (confirm(`¿Eliminar la cita ${app.id} de ${app.patientName}?`)) {
                              onDeleteAppointment(app.id!);
                            }
                          }}
                          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                          title="Eliminar cita"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>
        )}

      </main>

      {/* Manual Appointment Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Registrar Cita Manual
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Para pacientes que agendan por llamada telefónica o en la recepción física.
            </p>

            <form onSubmit={handleCreateManualAppt} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Nombre del Paciente *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Roberto Morales"
                  value={manualName}
                  onChange={(e) => setManualName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 55 1234 5678"
                    value={manualPhone}
                    onChange={(e) => setManualPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Correo (Opcional)
                  </label>
                  <input
                    type="email"
                    placeholder="paciente@correo.com"
                    value={manualEmail}
                    onChange={(e) => setManualEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Tratamiento o Motivo
                </label>
                <select
                  value={manualServiceId}
                  onChange={(e) => setManualServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  {DENTAL_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.estimatedDuration})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Fecha
                  </label>
                  <input
                    type="date"
                    value={manualDate}
                    onChange={(e) => setManualDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Horario
                  </label>
                  <select
                    value={manualSlot}
                    onChange={(e) => setManualSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Notas Clínicas
                </label>
                <textarea
                  rows={2}
                  placeholder="Detalles sobre urgencia o valoración..."
                  value={manualNotes}
                  onChange={(e) => setManualNotes(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold bg-[#006fe6] hover:bg-[#005bb8] text-white rounded-xl shadow-md"
                >
                  Guardar Cita
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
