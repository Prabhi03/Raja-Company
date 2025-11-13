import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PropertyCalculatorPage from './pages/PropertyCalculatorPage';
import GetAQuotePage from './pages/GetAQuotePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import BlogPage from './pages/BlogPage';
import { services } from './constants';


const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-white text-gray-800">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/property-value-calculator" element={<PropertyCalculatorPage />} />
            <Route path="/get-a-quote" element={<GetAQuotePage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage services={services} />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </HashRouter>
  );
};

export default App;
