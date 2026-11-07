import React, { useState } from 'react';
import {
  Lock,
  X,
  Search,
  Calendar,
  Clock,
  User,
  Phone,
  MessageSquare,
  Trash2,
  AlertCircle,
  FileSpreadsheet,
} from 'lucide-react';
import { AppointmentData } from '../types/dental';
import { CLINIC_INFO } from '../data/dentalData';

interface AdminAppointmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: AppointmentData[];
  onUpdateStatus: (id: string, status: AppointmentData['status']) => void;
  onDeleteAppointment: (id: string) => void;
  onExportCSV: () => void;
}

export const AdminAppointmentsModal: React.FC<AdminAppointmentsModalProps> = ({
  isOpen,
  onClose,
  appointments,
  onUpdateStatus,
  onDeleteAppointment,
  onExportCSV,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'Todas' | 'Pendiente' | 'Confirmada' | 'Atendida'>('Todas');

  if (!isOpen) return null;

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === '1234' || pinInput.trim() === 'zubiri') {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const filteredAppointments = appointments.filter((app) => {
    const matchesSearch =
      app.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.patientPhone.includes(searchQuery) ||
      (app.id && app.id.toLowerCase().includes(searchQuery.toLowerCase())) ||
      app.serviceTitle.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'Todas' ? true : app.status === statusFilter;

    return matchesSearch && matchesStatus;
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
      `Hola ${app.patientName}, te saluda la Dra. Zubiri de la Clínica Dental Zubiri. Te escribo con respecto a tu cita para *${app.serviceTitle}* agendada para el *${app.date}* a las *${app.timeSlot}*.`
    );
    return `https://wa.me/${cleanPhone || CLINIC_INFO.whatsapp}?text=${message}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-base sm:text-lg">
                Panel Administrativo de Citas — Dra. Zubiri
              </h2>
              <p className="text-xs text-slate-400">
                Gestión de reservaciones y control de agenda clínica
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PIN Security Check if not authenticated */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto border border-brand-100">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Acceso Exclusivo de Doctora
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
                Ingresa el PIN de seguridad del consultorio para acceder al historial confidencial de pacientes.
              </p>
            </div>

            <form onSubmit={handlePinSubmit} className="space-y-4">
              <input
                type="password"
                maxLength={10}
                placeholder="PIN (por defecto: 1234)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full text-center text-lg tracking-widest px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 font-mono"
                autoFocus
              />
              {pinError && (
                <p className="text-xs font-semibold text-rose-600 flex items-center justify-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  PIN incorrecto. Intenta con 1234
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-brand-600/20 cursor-pointer"
              >
                Ingresar al Panel
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Top Metrics & Actions Bar */}
            <div className="bg-slate-50 border-b border-slate-200/80 p-4 sm:p-6 space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Total Citas</span>
                  <p className="text-2xl font-extrabold text-slate-900">{appointments.length}</p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <span className="text-[11px] font-bold text-amber-600 uppercase">Pendientes</span>
                  <p className="text-2xl font-extrabold text-amber-600">
                    {appointments.filter((a) => (a.status || 'Pendiente') === 'Pendiente').length}
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <span className="text-[11px] font-bold text-emerald-600 uppercase">Confirmadas</span>
                  <p className="text-2xl font-extrabold text-emerald-600">
                    {appointments.filter((a) => a.status === 'Confirmada').length}
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <span className="text-[11px] font-bold text-blue-600 uppercase">Atendidas</span>
                  <p className="text-2xl font-extrabold text-blue-600">
                    {appointments.filter((a) => a.status === 'Atendida').length}
                  </p>
                </div>
              </div>

              {/* Filters and Search Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="Buscar paciente, teléfono, folio..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1 text-xs font-semibold">
                    {(['Todas', 'Pendiente', 'Confirmada', 'Atendida'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => setStatusFilter(st)}
                        className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                          statusFilter === st
                            ? 'bg-brand-600 text-white'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={onExportCSV}
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Exportar</span> CSV
                  </button>
                </div>
              </div>
            </div>

            {/* Appointments List / Table */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
              {filteredAppointments.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <Calendar className="w-12 h-12 mx-auto stroke-[1.5] mb-2 text-slate-300" />
                  <p className="text-sm font-semibold">No se encontraron citas con este criterio.</p>
                </div>
              ) : (
                filteredAppointments.map((app) => (
                  <div
                    key={app.id || Math.random()}
                    className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                  >
                    {/* Patient & Service Info */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200">
                          {app.id}
                        </span>
                        <h4 className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                          <User className="w-4 h-4 text-brand-600" />
                          {app.patientName}
                        </h4>
                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${getStatusBadgeClass(
                            app.status
                          )}`}
                        >
                          {app.status || 'Pendiente'}
                        </span>
                      </div>

                      <div className="text-xs text-slate-600 flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-brand-700">
                          🦷 {app.serviceTitle}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {app.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {app.timeSlot}
                        </span>
                      </div>

                      <div className="text-xs text-slate-500 flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          {app.patientPhone}
                        </span>
                        {app.patientEmail && (
                          <span>| {app.patientEmail}</span>
                        )}
                      </div>

                      {app.notes && (
                        <p className="text-xs text-slate-500 bg-slate-50 p-2 rounded-lg italic">
                          Nota: "{app.notes}"
                        </p>
                      )}
                    </div>

                    {/* Actions and Status Selector */}
                    <div className="flex items-center gap-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100 justify-end">
                      {/* WhatsApp contact */}
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

                      {/* Status Dropdown */}
                      <select
                        value={app.status || 'Pendiente'}
                        onChange={(e) =>
                          onUpdateStatus(app.id!, e.target.value as AppointmentData['status'])
                        }
                        className="bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl px-2.5 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
                      >
                        <option value="Pendiente">Pendiente</option>
                        <option value="Confirmada">Confirmada</option>
                        <option value="Atendida">Atendida</option>
                        <option value="Cancelada">Cancelada</option>
                      </select>

                      {/* Delete button */}
                      <button
                        onClick={() => {
                          if (confirm(`¿Eliminar la cita de ${app.patientName}?`)) {
                            onDeleteAppointment(app.id!);
                          }
                        }}
                        className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition-colors cursor-pointer"
                        title="Eliminar cita"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer with lock session */}
            <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>PIN actual de la clínica: <strong>1234</strong></span>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-slate-600 hover:text-slate-900 font-semibold cursor-pointer underline"
              >
                Bloquear Panel
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
