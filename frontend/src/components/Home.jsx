import React, { useState, useEffect } from 'react';
import { Phone, Star, MapPin, Clock, Mail, Menu, X, Stethoscope, Baby, Heart, Activity, Scan, Sparkles, Award, Building, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { clinicInfo, services, doctors, testimonials, whyChooseUs } from '../mock';

const iconMap = {
  stethoscope: Stethoscope,
  baby: Baby,
  heart: Heart,
  activity: Activity,
  scan: Scan,
  sparkles: Sparkles,
  star: Star,
  award: Award,
  building: Building,
  'shield-check': ShieldCheck
};

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className={`header-nav fixed top-0 left-0 right-0 z-50 border-b ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold text-[hsl(var(--clinic-mauve))]">
                {clinicInfo.name}
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link text-sm font-medium text-foreground hover:text-[hsl(var(--clinic-pink))]">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="nav-link text-sm font-medium text-foreground hover:text-[hsl(var(--clinic-pink))]">
                Services
              </button>
              <button onClick={() => scrollToSection('doctors')} className="nav-link text-sm font-medium text-foreground hover:text-[hsl(var(--clinic-pink))]">
                Doctors
              </button>
              <button onClick={() => scrollToSection('about')} className="nav-link text-sm font-medium text-foreground hover:text-[hsl(var(--clinic-pink))]">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-link text-sm font-medium text-foreground hover:text-[hsl(var(--clinic-pink))]">
                Contact
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href={`tel:${clinicInfo.phone}`}>
                <Button className="cta-button text-white border-0">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-base font-medium rounded-lg hover:bg-accent transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-base font-medium rounded-lg hover:bg-accent transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('doctors')} className="block w-full text-left px-4 py-2 text-base font-medium rounded-lg hover:bg-accent transition-colors">
                Doctors
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-base font-medium rounded-lg hover:bg-accent transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-base font-medium rounded-lg hover:bg-accent transition-colors">
                Contact
              </button>
              <a href={`tel:${clinicInfo.phone}`} className="block">
                <Button className="cta-button w-full text-white border-0">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section pt-32 pb-20 md:pt-40 md:pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="rating-badge mb-6 px-4 py-2 text-base bg-white border-2 border-[hsl(var(--clinic-pink))] text-[hsl(var(--clinic-mauve))]">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 inline mr-2" />
              {clinicInfo.rating} Rating · {clinicInfo.reviewCount}+ Happy Patients
            </Badge>

            <h1 className="mb-6 font-bold text-[hsl(var(--clinic-mauve))]">
              Compassionate Care for Every Woman
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Expert gynecological care in the heart of Koramangala. Your health, comfort, and well-being are our top priorities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={`tel:${clinicInfo.phone}`}>
                <Button size="lg" className="cta-button text-white border-0 text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="text-lg px-8 py-6 border-2 border-[hsl(var(--clinic-pink))] text-[hsl(var(--clinic-mauve))] hover:bg-[hsl(var(--accent))] transition-smooth"
              >
                Our Services
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[hsl(var(--clinic-pink))]" />
                <span>Koramangala, Bengaluru</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[hsl(var(--clinic-pink))]" />
                <span>Mon-Fri: 9 AM - 7 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 font-bold text-[hsl(var(--clinic-mauve))]">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive women's healthcare services tailored to your needs at every stage of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="service-card bg-white">
                  <CardHeader>
                    <div className="icon-container w-14 h-14 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center mb-4">
                      <IconComponent className="service-icon w-7 h-7 text-[hsl(var(--clinic-mauve))]" />
                    </div>
                    <CardTitle className="text-xl text-[hsl(var(--clinic-mauve))]">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 md:py-32 bg-[hsl(var(--clinic-cream))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 font-bold text-[hsl(var(--clinic-mauve))]">
              Our Expert Doctors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced and compassionate healthcare professionals dedicated to your well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="doctor-card bg-white">
                <div className="overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="doctor-image w-full h-64 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-[hsl(var(--clinic-mauve))]">{doctor.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-[hsl(var(--clinic-pink))]">
                    {doctor.qualification}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-muted-foreground">Specialization:</span> {doctor.specialization}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-muted-foreground">Experience:</span> {doctor.experience}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 font-bold text-[hsl(var(--clinic-mauve))]">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by hundreds of women in Bangalore for exceptional healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <Card key={item.id} className="why-choose-card text-center p-6 bg-[hsl(var(--clinic-cream))] border-2">
                  <CardContent className="pt-6">
                    <div className="icon-container w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-[hsl(var(--clinic-pink))]" />
                    </div>
                    <h4 className="font-bold mb-2 text-[hsl(var(--clinic-mauve))]">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-[hsl(var(--clinic-cream))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 font-bold text-[hsl(var(--clinic-mauve))]">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read experiences from our valued patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="testimonial-card p-6">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="star-icon w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold text-[hsl(var(--clinic-mauve))]">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 font-bold text-[hsl(var(--clinic-mauve))]">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to answer your questions and schedule your appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="contact-item p-6 rounded-xl border-2 border-[hsl(var(--border))] bg-[hsl(var(--clinic-cream))]">
                <div className="flex items-start gap-4">
                  <div className="icon-container w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[hsl(var(--clinic-pink))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-[hsl(var(--clinic-mauve))]">
                      Phone
                    </h4>
                    <a
                      href={`tel:${clinicInfo.phone}`}
                      className="text-[hsl(var(--clinic-pink))] hover:underline text-lg font-medium"
                    >
                      {clinicInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-item p-6 rounded-xl border-2 border-[hsl(var(--border))] bg-[hsl(var(--clinic-cream))]">
                <div className="flex items-start gap-4">
                  <div className="icon-container w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[hsl(var(--clinic-pink))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-[hsl(var(--clinic-mauve))]">
                      Address
                    </h4>
                    <p className="text-muted-foreground">{clinicInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="contact-item p-6 rounded-xl border-2 border-[hsl(var(--border))] bg-[hsl(var(--clinic-cream))]">
                <div className="flex items-start gap-4">
                  <div className="icon-container w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[hsl(var(--clinic-pink))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[hsl(var(--clinic-mauve))]">
                      Consultation Hours
                    </h4>
                    <div className="space-y-1">
                      {clinicInfo.hours.map((schedule, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{schedule.day}:</span> {schedule.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden border-2 border-[hsl(var(--border))] bg-[hsl(var(--clinic-cream))] h-[400px] lg:h-full flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-[hsl(var(--clinic-pink))]" />
                <h4 className="font-semibold mb-2 text-[hsl(var(--clinic-mauve))]">
                  Visit Us
                </h4>
                <p className="text-muted-foreground mb-4">{clinicInfo.address}</p>
                <a
                  href="https://maps.google.com/?q=851,8th+Cross+Rd,Koramangala,Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline" className="border-2 border-[hsl(var(--clinic-pink))] text-[hsl(var(--clinic-mauve))] hover:bg-[hsl(var(--accent))] transition-smooth">
                    <MapPin className="w-4 h-4 mr-2" />
                    Open in Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--clinic-mauve))] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{clinicInfo.name}</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Providing compassionate and professional women's healthcare in Koramangala, Bengaluru.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('doctors')} className="text-white/80 hover:text-white transition-colors">
                    Our Doctors
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <a href={`tel:${clinicInfo.phone}`} className="text-white/80 hover:text-white transition-colors">
                    {clinicInfo.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">{clinicInfo.address}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 {clinicInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;