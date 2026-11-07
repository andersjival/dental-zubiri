import React, { useState, useEffect } from 'react';
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
import { AdminPage } from './pages/AdminPage';
import { useAppointmentBooking } from './hooks/useAppointmentBooking';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);
  const booking = useAppointmentBooking();

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const scrollToBooking = (serviceId?: string) => {
    if (currentPath !== '/') {
      navigateTo('/');
      setTimeout(() => {
        if (serviceId) {
          booking.setServiceId(serviceId);
          booking.setCurrentStep(1);
        }
        const elem = document.getElementById('agendamiento');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    if (serviceId) {
      booking.setServiceId(serviceId);
      booking.setCurrentStep(1);
    }
    const elem = document.getElementById('agendamiento');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If URL is /admin, render the EXCLUSIVE ADMIN PAGE (not a popup)
  if (currentPath === '/admin' || currentPath.startsWith('/admin/')) {
    return (
      <AdminPage
        onNavigateHome={() => navigateTo('/')}
        appointments={booking.savedAppointments}
        onUpdateStatus={booking.updateAppointmentStatus}
        onDeleteAppointment={booking.deleteAppointment}
        onExportCSV={booking.exportAppointmentsToCSV}
        onAddManualAppointment={booking.addManualAppointment}
      />
    );
  }

  // Public Clinic Website
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Banner with Direct /admin Link */}
      <HeaderTopBar
        onOpenBooking={() => scrollToBooking()}
        onOpenAdmin={() => navigateTo('/admin')}
      />

      {/* Main Navbar */}
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
      <Footer onOpenAdmin={() => navigateTo('/admin')} />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default App;
