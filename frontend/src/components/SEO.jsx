import { Helmet } from 'react-helmet';

const SEO = () => {
  const siteUrl = 'https://guayacanes-promo.preview.emergentagent.com';
  const imageUrl = `${siteUrl}/images/entrada-1.jpg`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Guayacanes II Residencial - Lotes en Mazatlán | Inversión Segura</title>
      <meta name="title" content="Guayacanes II Residencial - Lotes en Mazatlán | Inversión Segura" />
      <meta 
        name="description" 
        content="Invierte en tu patrimonio con lotes residenciales desde 144m² en la zona de mayor crecimiento de Mazatlán. Seguridad 24/7, amenidades exclusivas y plusvalía garantizada. Financiamiento hasta 60 MSI." 
      />
      <meta 
        name="keywords" 
        content="lotes mazatlán, terrenos residenciales mazatlán, inversión inmobiliaria mazatlán, guayacanes residencial, lotes urbanizados mazatlán, terrenos venta mazatlán, desarrollo residencial mazatlán, plusvalía mazatlán" 
      />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="author" content="Guayacanes Residencial" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content="Guayacanes II Residencial - Invierte en tu Patrimonio" />
      <meta 
        property="og:description" 
        content="Lotes residenciales desde 144m² en Mazatlán. Seguridad, amenidades exclusivas y financiamiento flexible. ¡Agenda tu visita hoy!" 
      />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Guayacanes Residencial" />
      <meta property="og:locale" content="es_MX" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content="Guayacanes II Residencial - Invierte en tu Patrimonio" />
      <meta 
        property="twitter:description" 
        content="Lotes residenciales desde 144m² en Mazatlán. Seguridad, amenidades exclusivas y financiamiento flexible." 
      />
      <meta property="twitter:image" content={imageUrl} />

      {/* Geo Tags */}
      <meta name="geo.region" content="MX-SIN" />
      <meta name="geo.placename" content="Mazatlán" />
      <meta name="geo.position" content="23.2494;-106.4127" />
      <meta name="ICBM" content="23.2494, -106.4127" />

      {/* Business Info */}
      <meta name="contact" content="ventasguayacanesresidencial@gmail.com" />
      <meta name="phone" content="+52-669-198-7570" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "Guayacanes II Residencial",
          "image": imageUrl,
          "description": "Desarrollo residencial de lotes urbanizados en Mazatlán, Sinaloa. Ofrecemos lotes desde 144m² con amenidades exclusivas, seguridad 24/7 y opciones de financiamiento.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Carretera Internacional Libre Mazatlán-Culiacán Km. 7",
            "addressLocality": "Mazatlán",
            "addressRegion": "Sinaloa",
            "postalCode": "82100",
            "addressCountry": "MX"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "23.2494",
            "longitude": "-106.4127"
          },
          "telephone": "+52-669-198-7570",
          "email": "ventasguayacanesresidencial@gmail.com",
          "url": siteUrl,
          "priceRange": "$$$",
          "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 09:00-18:00",
          "areaServed": {
            "@type": "City",
            "name": "Mazatlán"
          },
          "sameAs": [
            "https://www.guayacanes.com.mx"
          ]
        })}
      </script>

      {/* Additional Product Schema for Lots */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Lotes Residenciales Guayacanes II",
          "description": "Lotes residenciales urbanizados desde 144m² hasta 250m² en Mazatlán, Sinaloa. Incluye amenidades completas y seguridad 24/7.",
          "image": imageUrl,
          "brand": {
            "@type": "Brand",
            "name": "Guayacanes Residencial"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "777600",
            "highPrice": "864000",
            "priceCurrency": "MXN",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Guayacanes II Residencial"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
