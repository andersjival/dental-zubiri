import React from 'react';
import { HeaderTopBar } from './components/HeaderTopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { AppointmentSection } from './components/AppointmentSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { AdminAppointmentsModal } from './components/AdminAppointmentsModal';
import { useAppointmentBooking } from './hooks/useAppointmentBooking';

export const App: React.FC = () => {
  const booking = useAppointmentBooking();

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      booking.setServiceId(serviceId);
      booking.setCurrentStep(1);
    }
    const elem = document.getElementById('agendamiento');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Banner & Navigation */}
      <HeaderTopBar onOpenAdmin={() => booking.setIsAdminOpen(true)} />
      <Navbar onOpenBooking={() => scrollToBooking()} />

      {/* Main Page Flow */}
      <main className="flex-1">
        <HeroSection onOpenBooking={() => scrollToBooking()} />
        <ServicesSection onSelectServiceToBook={(id) => scrollToBooking(id)} />
        <AboutSection onOpenBooking={() => scrollToBooking()} />
        <BeforeAfterSection onSelectServiceToBook={(id) => scrollToBooking(id)} />
        <AppointmentSection booking={booking} />
        <TestimonialsSection />
        <CtaBanner onOpenBooking={() => scrollToBooking()} />
      </main>

      {/* Footer & Floating Actions */}
      <Footer onOpenAdmin={() => booking.setIsAdminOpen(true)} />
      <WhatsAppFloatingButton />

      {/* Doctor Admin Modal */}
      <AdminAppointmentsModal
        isOpen={booking.isAdminOpen}
        onClose={() => booking.setIsAdminOpen(false)}
        appointments={booking.savedAppointments}
        onUpdateStatus={booking.updateAppointmentStatus}
        onDeleteAppointment={booking.deleteAppointment}
        onExportCSV={booking.exportAppointmentsToCSV}
      />
    </div>
  );
};

export default App;
