import React, { useState } from 'react';
import { Phone, Mail, MapPin, Home, Shield, TrendingUp, CheckCircle, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import SEO from '../components/SEO';
import '../styles/landing.css';

// Centralizado para fácil actualización de imágenes - IMÁGENES REALES DEL PROYECTO
const BASE = process.env.PUBLIC_URL || '';
const IMAGES = {
  hero: `${BASE}/images/entrada-1.jpg`,
  entrada2: `${BASE}/images/entrada-2.jpg`,
  vistaAerea: `${BASE}/images/vista-aerea.jpg`,
  entradaNoche: `${BASE}/images/entrada-noche.jpg`,
  amenidadesAerea: `${BASE}/images/amenidades-aerea.jpg`,
  logo: `${BASE}/images/guayacanes-logo.png`,
  logoOscuro: `${BASE}/images/logo-oscuro.png`,
};

const LandingPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setFormData({ nombre: '', telefono: '', email: '', mensaje: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/526691987570', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:6691987570';
  };

  return (
    <div className="landing-container">
      <SEO />
      
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src={IMAGES.logo} alt="Guayacanes Residencial" className="logo-image" />
          </div>
          <div className="header-actions">
            <Button onClick={handleCall} variant="outline" className="btn-call">
              <Phone size={18} />
              <span className="btn-text">669-198-7570</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${IMAGES.hero})` }}>
        <div className="hero-overlay">
          <div className="hero-content-centered">
            <h1 className="hero-title">
              Invierte en tu <span className="highlight">Patrimonio</span>
            </h1>
            <p className="hero-subtitle">
              Lotes residenciales desde 144m² en la zona de mayor crecimiento de Mazatlán.
              Seguridad, tranquilidad y plusvalía garantizada.
            </p>
            <div className="hero-features">
              <div className="hero-feature-item">
                <CheckCircle className="hero-feature-icon" />
                <span>Ubicación Privilegiada</span>
              </div>
              <div className="hero-feature-item">
                <CheckCircle className="hero-feature-icon" />
                <span>Seguridad 24/7</span>
              </div>
              <div className="hero-feature-item">
                <CheckCircle className="hero-feature-icon" />
                <span>Plusvalía Garantizada</span>
              </div>
            </div>
            <div className="hero-cta-buttons">
              <Button onClick={handleWhatsApp} size="lg" className="btn-cta-whatsapp">
                Chatear por WhatsApp
              </Button>
              <Button 
                onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })} 
                size="lg" 
                className="btn-cta-contact"
              >
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon feature-icon-location">
              <MapPin size={32} />
            </div>
            <h3>Ubicación Privilegiada</h3>
            <p>En el corazón de la zona con mayor proyección de Mazatlán</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon-security">
              <Shield size={32} />
            </div>
            <h3>Seguridad Total</h3>
            <p>Caseta de monitoreo 24/7 y acceso controlado</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon-value">
              <TrendingUp size={32} />
            </div>
            <h3>Plusvalía Garantizada</h3>
            <p>Inversión segura en zona de alto crecimiento</p>
          </div>
        </div>
      </section>

      {/* Lotes Section */}
      <section id="lotes" className="lotes-section">
        <div className="section-header">
          <h2 className="section-title">Tipos de Lotes Disponibles</h2>
          <p className="section-subtitle">Elige el terreno perfecto para tu próximo hogar</p>
        </div>

        <div className="lotes-grid">
          {/* Estándar Regular */}
          <Card className="lote-card">
            <div className="lote-badge">Más Popular</div>
            <CardContent className="lote-content">
              <h3 className="lote-title">Estándar Regular</h3>
              <p className="lote-code">G2 12 L5</p>
              <div className="lote-surface">
                <span className="surface-number">144</span>
                <span className="surface-unit">m²</span>
              </div>
              <div className="lote-price">
                <span className="price-label">Valor del Terreno</span>
                <div className="price-main">
                  <span className="price-currency">$</span>
                  <span className="price-amount">806,400</span>
                </div>
                <span className="price-mxn">MXN</span>
              </div>
              <div className="lote-details">
                <div className="detail-row">
                  <span>Enganche</span>
                  <span className="detail-value">$100,000</span>
                </div>
                <div className="detail-row">
                  <span>A Financiar</span>
                  <span className="detail-value">$706,400</span>
                </div>
                <div className="detail-row financing">
                  <span>60 MSI</span>
                  <span className="detail-value">$11,773.33/mes</span>
                </div>
              </div>
              <Button onClick={handleWhatsApp} className="btn-lote">Más Información</Button>
            </CardContent>
          </Card>

          {/* Preferencial */}
          <Card className="lote-card lote-featured">
            <div className="lote-badge lote-badge-premium">Premium</div>
            <CardContent className="lote-content">
              <h3 className="lote-title">Preferencial</h3>
              <p className="lote-code">G2 M13 L10</p>
              <div className="lote-surface">
                <span className="surface-number">144</span>
                <span className="surface-unit">m²</span>
              </div>
              <div className="lote-price">
                <span className="price-label">Valor del Terreno</span>
                <div className="price-main">
                  <span className="price-currency">$</span>
                  <span className="price-amount">864,000</span>
                </div>
                <span className="price-mxn">MXN</span>
              </div>
              <div className="lote-details">
                <div className="detail-row">
                  <span>Enganche</span>
                  <span className="detail-value">$100,000</span>
                </div>
                <div className="detail-row">
                  <span>A Financiar</span>
                  <span className="detail-value">$764,000</span>
                </div>
                <div className="detail-row financing">
                  <span>60 MSI</span>
                  <span className="detail-value">$12,733.33/mes</span>
                </div>
              </div>
              <Button onClick={handleWhatsApp} className="btn-lote btn-lote-premium">Más Información</Button>
            </CardContent>
          </Card>

          {/* Estándar Perimetral */}
          <Card className="lote-card">
            <div className="lote-badge">Mejor Precio</div>
            <CardContent className="lote-content">
              <h3 className="lote-title">Estándar Perimetral</h3>
              <p className="lote-code">G2 16 L27</p>
              <div className="lote-surface">
                <span className="surface-number">144</span>
                <span className="surface-unit">m²</span>
              </div>
              <div className="lote-price">
                <span className="price-label">Valor del Terreno</span>
                <div className="price-main">
                  <span className="price-currency">$</span>
                  <span className="price-amount">777,600</span>
                </div>
                <span className="price-mxn">MXN</span>
              </div>
              <div className="lote-details">
                <div className="detail-row">
                  <span>Enganche</span>
                  <span className="detail-value">$100,000</span>
                </div>
                <div className="detail-row">
                  <span>A Financiar</span>
                  <span className="detail-value">$677,600</span>
                </div>
                <div className="detail-row financing">
                  <span>60 MSI</span>
                  <span className="detail-value">$11,293.33/mes</span>
                </div>
              </div>
              <Button onClick={handleWhatsApp} className="btn-lote">Más Información</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Amenidades */}
      <section className="amenidades-section">
        <div className="section-header">
          <h2 className="section-title">Amenidades Exclusivas</h2>
          <p className="section-subtitle">Todo lo que necesitas para disfrutar cada momento</p>
        </div>

        <div className="amenidades-showcase">
          <div className="amenidades-image" style={{ backgroundImage: `url(${IMAGES.amenidadesAerea})` }}></div>
          <div className="amenidades-list">
            <div className="amenidad-item">
              <CheckCircle className="amenidad-icon" />
              <span>Alberca y Chapoteadero</span>
            </div>
            <div className="amenidad-item">
              <CheckCircle className="amenidad-icon" />
              <span>Salón Climatizado</span>
            </div>
            <div className="amenidad-item">
              <CheckCircle className="amenidad-icon" />
              <span>Terraza Club</span>
            </div>
            <div className="amenidad-item">
              <CheckCircle className="amenidad-icon" />
              <span>Áreas Deportivas</span>
            </div>
            <div className="amenidad-item">
              <CheckCircle className="amenidad-icon" />
              <span>Área de Juegos Infantiles</span>
            </div>
            <div className="amenidad-item">
              <CheckCircle className="amenidad-icon" />
              <span>Jardines Escénicos</span>
            </div>
            <div className="amenidad-item">
              <CheckCircle className="amenidad-icon" />
              <span>Estacionamiento</span>
            </div>
            <div className="amenidad-item">
              <CheckCircle className="amenidad-icon" />
              <span>Caseta de Monitoreo 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Financiamiento */}
      <section className="financing-section">
        <div className="section-header">
          <h2 className="section-title">Planes de Financiamiento</h2>
          <p className="section-subtitle">Opciones flexibles adaptadas a ti</p>
        </div>

        <div className="financing-grid">
          <Card className="financing-card">
            <CardContent className="financing-content">
              <h3 className="financing-title">Plan 1</h3>
              <div className="financing-detail">
                <span className="financing-label">Enganche</span>
                <span className="financing-value">20%</span>
              </div>
              <div className="financing-detail">
                <span className="financing-label">Financiamiento</span>
                <span className="financing-value">60 MSI</span>
              </div>
              <div className="financing-detail">
                <span className="financing-label">Opcional</span>
                <span className="financing-value">5 anualidades de $20,000</span>
              </div>
            </CardContent>
          </Card>

          <Card className="financing-card financing-featured">
            <div className="financing-badge">5% Descuento</div>
            <CardContent className="financing-content">
              <h3 className="financing-title">Plan 2</h3>
              <div className="financing-detail">
                <span className="financing-label">Enganche</span>
                <span className="financing-value">50%</span>
              </div>
              <div className="financing-detail">
                <span className="financing-label">Financiamiento</span>
                <span className="financing-value">60 MSI</span>
              </div>
              <div className="financing-detail">
                <span className="financing-label">Opcional</span>
                <span className="financing-value">5 anualidades de $20,000</span>
              </div>
            </CardContent>
          </Card>

          <Card className="financing-card">
            <div className="financing-badge financing-badge-best">10% Descuento</div>
            <CardContent className="financing-content">
              <h3 className="financing-title">Plan 3</h3>
              <div className="financing-detail">
                <span className="financing-label">Pago</span>
                <span className="financing-value">De Contado</span>
              </div>
              <div className="financing-detail financing-highlight">
                <span className="financing-label">Ahorro</span>
                <span className="financing-value">Hasta $86,400</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="financing-note">*Todos los esquemas de financiamiento sujetos a cambio</p>
      </section>

      {/* Ubicación */}
      <section className="location-section">
        <div className="section-header">
          <h2 className="section-title">Ubicación Estratégica</h2>
          <p className="section-subtitle">En la zona de mayor crecimiento de Mazatlán</p>
        </div>

        <div className="location-content">
          <div className="location-info">
            <MapPin className="location-icon" />
            <div>
              <h3>Carretera Internacional Libre Mazatlán-Culiacán</h3>
              <p>Km. 7, Colonia El Venadillo</p>
              <p>Esquina con calle Elpidio Osuna</p>
              <p className="location-highlight">Cerca de Galerías Mazatlán, Marina Mazatlán y principales vialidades</p>
            </div>
          </div>
          <div className="location-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.4986641892973!2d-106.4127!3d23.2494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE0JzU3LjgiTiAxMDbCsDI0JzQ1LjciVw!5e0!3m2!1ses!2smx!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Guayacanes II"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contacto con Formulario */}
      <section id="contacto" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>¿Listo para hacer crecer tu patrimonio?</h2>
            <p>Comunícate con nosotros y descubre por qué somos tu opción segura</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <Phone className="contact-method-icon" />
                <div>
                  <span className="contact-method-label">Teléfono</span>
                  <a href="tel:6691987570" className="contact-method-value">669-198-7570</a>
                </div>
              </div>
              <div className="contact-method">
                <Mail className="contact-method-icon" />
                <div>
                  <span className="contact-method-label">Email</span>
                  <a href="mailto:ventasguayacanesresidencial@gmail.com" className="contact-method-value">ventasguayacanesresidencial@gmail.com</a>
                </div>
              </div>
            </div>

            <Button onClick={handleWhatsApp} size="lg" className="btn-contact-whatsapp">
              Chatear por WhatsApp
            </Button>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Solicita Información</h3>
              <Input
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
              />
              <Input
                type="tel"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Textarea
                placeholder="Mensaje (opcional)"
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                rows={4}
              />
              <Button type="submit" className="btn-submit">Enviar Solicitud</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={IMAGES.logoOscuro} alt="Guayacanes II Residencial" className="footer-logo-image" />
          </div>
          <p className="footer-text">
            El comienzo de tus mejores momentos en Mazatlán, Sinaloa
          </p>
          <p className="footer-legal">
            © 2025 Guayacanes Residencial. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <X size={24} />
            </button>
            <div className="modal-content">
              <CheckCircle className="modal-icon" size={64} />
              <h3>¡Gracias por tu interés!</h3>
              <p>Hemos recibido tu solicitud. Uno de nuestros asesores se pondrá en contacto contigo muy pronto.</p>
              <Button onClick={() => setShowModal(false)} className="btn-modal">Entendido</Button>
            </div>
          </div>
        </div>
      )}


      {/* Botón Flotante de WhatsApp */}
      <button onClick={handleWhatsApp} className="whatsapp-float" aria-label="Contactar por WhatsApp">
        <div className="whatsapp-float-content">
          <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
          </svg>
          <span className="whatsapp-text">¿Te interesa?<br />Contáctame</span>
        </div>
      </button>
    </div>
  );
};

export default LandingPage;