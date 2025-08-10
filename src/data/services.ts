// src/data/services.ts

export interface Service {
    id: string;
    iconClass: string; // Clase de Font Awesome para el icono
    title: string;
    description: string;
    borderColor?: string; // Opcional, si quieres bordes de color diferentes
    details?: string[]; // Opcional, si quieres añadir una lista de detalles
    url?: string;
  }
  
  export const services: Service[] = [
    {
      id: 'gestion-redes-sociales',
      iconClass: 'fas fa-mobile-alt', // o 'fas fa-users' o 'fas fa-share-alt'
      title: 'Gestión de redes sociales',
      description: 'Creación, publicación y monitoreo de contenido en plataformas como Instagram, Facebook y TikTok para aumentar la presencia de marca.',
      borderColor: 'border-purple-600',
      url: 'gestion-redes-sociales'
    },
    {
      id: 'publicidad-google-ads',
      iconClass: 'fab fa-google', // Icono de Google
      title: 'Publicidad en Google Ads',
      description: 'Creación y optimización de campañas en Google para atraer clientes potenciales mediante anuncios de búsqueda, display y YouTube.',
      borderColor: 'border-blue-600',
      url: 'publicidad-google-ads'
    },
    {
      id: 'publicidad-meta-ads',
      iconClass: 'fas fa-chart-bar', // o 'fab fa-facebook-f'
      title: 'Publicidad en Meta (Facebook e Instagram Ads)',
      description: 'Diseño y administración de campañas pagadas para alcanzar audiencias específicas y generar conversiones.',
      borderColor: 'border-pink-600',
      url: 'publicidad-meta-ads'
    },
    {
      id: 'desarrollo-sitios-web',
      iconClass: 'fas fa-globe', // o 'fas fa-laptop-code'
      title: 'Desarrollo de sitios web',
      description: 'Diseño y programación de sitios web atractivos, funcionales y adaptados a dispositivos móviles.',
      borderColor: 'border-green-600',
      url: 'desarrollo-sitios-web'
    },
    {
      id: 'posicionamiento-seo',
      iconClass: 'fas fa-line-chart', // o 'fas fa-search'
      title: 'Posicionamiento SEO',
      description: 'Optimización de contenido y estructura web para mejorar la visibilidad en los resultados orgánicos de Google.',
      borderColor: 'border-yellow-600',
      url: 'posicionamiento-seo'
    },
    {
      id: 'diseno-grafico',
      iconClass: 'fas fa-pencil-ruler', // o 'fas fa-paint-brush'
      title: 'Diseño gráfico',
      description: 'Creación de piezas visuales como logos, banners, flyers y contenido para redes sociales, alineadas con la identidad de la marca.',
      borderColor: 'border-red-600',
      url: 'diseno-grafico'
    },
    {
      id: 'branding-identidad-visual',
      iconClass: 'fas fa-lightbulb', // o 'fas fa-eye'
      title: 'Branding e identidad visual',
      description: 'Desarrollo de la imagen corporativa, incluyendo logo, paleta de colores, tipografías y manual de marca.',
      borderColor: 'border-orange-600',
      url: 'branding-e-identidad-visual'
    },
    {
      id: 'consultoria-marketing-digital',
      iconClass: 'fas fa-question-circle', // o 'fas fa-comments'
      title: 'Consultoría en marketing digital',
      description: 'Asesoramiento personalizado para definir estrategias digitales y optimizar resultados.',
      borderColor: 'border-teal-600',
      url: 'consultoria-marketing-digital'
    },
];