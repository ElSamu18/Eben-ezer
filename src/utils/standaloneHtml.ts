/**
 * Generador del archivo HTML estático único con Tailwind CDN, Font Awesome y JS puro,
 * listo para copiar y pegar en cualquier hosting o abrir con doble clic.
 */
export function getStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eben-ezer | Impresiones y Variedades - San Fernando de Apure</title>
  <meta name="description" content="Donde la variedad encuentra la fe. Copias, impresiones a color y B/N, stickers, certificados y fotos tipo carnet en San Fernando de Apure. ¡Cotiza por WhatsApp!">
  
  <!-- Open Graph / Redes Sociales -->
  <meta property="og:title" content="Eben-ezer | Donde la variedad encuentra la fe">
  <meta property="og:description" content="Servicios de impresión, copias, stickers y certificados en San Fernando de Apure. Programa de referidos con 10% de descuento.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://picsum.photos/seed/eben1/800/600">
  <meta name="twitter:card" content="summary_large_image">

  <!-- Favicon -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖨️</text></svg>">

  <!-- Google Fonts: Poppins & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            heading: ['Poppins', 'sans-serif'],
            sans: ['Inter', 'sans-serif'],
          },
          colors: {
            brand: {
              blue: '#1e3a8a',
              orange: '#f97316',
              amber: '#f59e0b',
              teal: '#0d9488',
            }
          }
        }
      }
    }
  </script>

  <!-- Font Awesome CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    body { font-family: 'Inter', sans-serif; }
    h1, h2, h3, h4, h5, h6, .font-heading { font-family: 'Poppins', sans-serif; }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased selection:bg-amber-400 selection:text-slate-900">

  <!-- ========================================== -->
  <!-- 0. BANNER DE REFERIDO (Detecta ?ref=CODIGO) -->
  <!-- ========================================== -->
  <div id="referral-banner" class="hidden bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white py-2.5 px-4 sticky top-0 z-50 shadow-md border-b border-amber-300/30">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm">
      <div class="flex items-center gap-2 flex-wrap font-medium">
        <i class="fa-solid fa-gift text-amber-200"></i>
        <span>🎉 ¡Te recomendó <strong id="banner-referral-code" class="bg-white text-orange-950 font-bold px-2 py-0.5 rounded-full font-mono"></strong>! Obtén <strong>10% de descuento</strong> en tu primera compra en San Fernando de Apure.</span>
      </div>
      <div class="flex items-center gap-2">
        <a href="#contacto" class="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full hover:bg-slate-800 transition">Usar descuento</a>
        <button id="btn-close-banner" type="button" class="text-white/80 hover:text-white p-1" title="Quitar código de referido">&times;</button>
      </div>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- 1. HEADER FIJO CON MENÚ RESPONSIVE Y LOGO  -->
  <!-- ========================================== -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="#inicio" class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center font-black text-xl shadow-xs">
            <i class="fa-solid fa-print text-amber-400"></i>
          </div>
          <div>
            <span class="font-heading font-extrabold text-2xl text-blue-950 tracking-tight block">Eben-ezer</span>
            <span class="text-xs font-medium text-slate-500 tracking-wide hidden sm:block">Donde la variedad encuentra la fe</span>
          </div>
        </a>

        <!-- Menú Desktop -->
        <nav class="hidden lg:flex items-center space-x-2" aria-label="Navegación principal">
          <a href="#inicio" class="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-900 rounded-lg hover:bg-slate-100 transition">Inicio</a>
          <a href="#servicios" class="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-900 rounded-lg hover:bg-slate-100 transition">Servicios</a>
          <a href="#portafolio" class="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-900 rounded-lg hover:bg-slate-100 transition">Portafolio</a>
          <a href="#como-funciona" class="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-900 rounded-lg hover:bg-slate-100 transition">Cómo Funciona</a>
          <a href="#testimonios" class="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-900 rounded-lg hover:bg-slate-100 transition">Testimonios</a>
          <a href="#referidos" class="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-900 rounded-lg hover:bg-slate-100 transition">
            Referidos <span class="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-1">10% OFF</span>
          </a>
          <a href="#contacto" class="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-900 rounded-lg hover:bg-slate-100 transition">Contacto</a>
        </nav>

        <!-- Botón Cotizar Destacado -->
        <div class="hidden sm:flex items-center gap-3">
          <a href="#contacto" class="px-5 py-2.5 rounded-xl font-heading font-bold text-sm text-white bg-blue-900 hover:bg-blue-800 shadow-sm transition flex items-center gap-2">
            <i class="fa-solid fa-comment-dots text-amber-400"></i>
            <span>Cotizar</span>
          </a>
        </div>

        <!-- Botón Hamburguesa Móvil -->
        <div class="flex items-center gap-2 lg:hidden">
          <a href="#contacto" class="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-900">Cotizar</a>
          <button id="btn-toggle-menu" type="button" class="p-2 text-slate-700 hover:text-blue-900" aria-label="Abrir menú">
            <i class="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Menú Desplegable Móvil -->
    <div id="mobile-menu" class="hidden lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2">
      <a href="#inicio" class="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-100">Inicio</a>
      <a href="#servicios" class="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-100">Servicios</a>
      <a href="#portafolio" class="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-100">Portafolio</a>
      <a href="#como-funciona" class="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-100">Cómo Funciona</a>
      <a href="#testimonios" class="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-100">Testimonios</a>
      <a href="#referidos" class="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-100">Referidos (10% OFF)</a>
      <a href="#contacto" class="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-100">Contacto</a>
    </div>
  </header>

  <!-- ========================================== -->
  <!-- 2. HERO SECTION                            -->
  <!-- ========================================== -->
  <section id="inicio" class="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-blue-900 text-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-amber-300">
            <i class="fa-solid fa-sparkles text-amber-400"></i>
            <span>Donde la variedad encuentra la fe • San Fernando de Apure</span>
          </div>

          <h1 class="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Impresiones que hacen <span class="text-amber-400">crecer tu negocio</span>
          </h1>

          <p class="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Copias, impresiones a color y blanco y negro, stickers, certificados y fotos tipo carnet. Calidad profesional en San Fernando de Apure.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a href="https://wa.me/584262181760?text=Hola%20Eben-ezer,%20quiero%20cotizar%20un%20servicio%20de%20impresion" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading font-bold text-base text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/25 transition">
              <i class="fa-brands fa-whatsapp text-2xl"></i>
              <span>Cotiza por WhatsApp</span>
            </a>
            <a href="#servicios" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-heading font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition">
              <span>Ver servicios</span>
              <i class="fa-solid fa-arrow-down text-amber-400"></i>
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 flex justify-center">
          <div class="relative w-full max-w-md bg-slate-900/80 border border-white/20 rounded-3xl p-8 backdrop-blur-md shadow-2xl text-center space-y-4">
            <div class="w-24 h-24 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center text-4xl font-black mx-auto shadow-lg">
              <i class="fa-solid fa-print"></i>
            </div>
            <h2 class="font-heading font-bold text-2xl text-white">Eben-ezer</h2>
            <p class="text-amber-300 text-xs font-semibold uppercase tracking-wider">Donde la variedad encuentra la fe</p>
            <p class="text-slate-300 text-sm">Tu centro integral de impresión y diseño gráfico en el corazón de Apure.</p>
            <div class="pt-4 border-t border-white/10 flex justify-around text-xs text-slate-300">
              <div><strong class="block text-base text-amber-400">100%</strong> Nitidez</div>
              <div><strong class="block text-emerald-400 text-base">Rápido</strong> Mismo día</div>
              <div><strong class="block text-teal-400 text-base">-10%</strong> Con Referido</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 3. BARRA DE CONFIANZA                      -->
  <!-- ========================================== -->
  <section class="bg-white border-y border-slate-200 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-200">
        <div class="flex items-center justify-center md:justify-start gap-3">
          <i class="fa-solid fa-users text-amber-500 text-2xl"></i>
          <div>
            <div class="text-amber-400 text-xs mb-0.5">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <p class="font-heading font-bold text-slate-900 text-sm">Cientos de clientes satisfechos</p>
          </div>
        </div>
        <div class="flex items-center justify-center md:justify-start gap-3 md:pl-6 pt-4 md:pt-0">
          <i class="fa-solid fa-location-dot text-blue-700 text-2xl"></i>
          <div>
            <p class="font-heading font-bold text-slate-900 text-sm">San Fernando de Apure</p>
            <p class="text-xs text-slate-500">Atención directa y entregas coordinadas</p>
          </div>
        </div>
        <div class="flex items-center justify-center md:justify-start gap-3 md:pl-6 pt-4 md:pt-0">
          <i class="fa-solid fa-credit-card text-emerald-600 text-2xl"></i>
          <div>
            <p class="font-heading font-bold text-slate-900 text-sm">Pago Móvil, Efectivo y Transferencia</p>
            <p class="text-xs text-slate-500">Pagos cómodos y seguros</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 4. SERVICIOS                               -->
  <!-- ========================================== -->
  <section id="servicios" class="py-20 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">Nuestros Servicios</h2>
        <p class="text-slate-600">Trabajos con la mejor nitidez y materiales duraderos para tu proyecto o negocio.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- 1. Copias -->
        <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-lg transition flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-copy"></i>
            </div>
            <h3 class="font-heading font-bold text-xl text-slate-900 mb-2">Copias</h3>
            <p class="text-slate-600 text-sm mb-6">Copias de documentos en blanco y negro y a color, rápidas y nítidas.</p>
          </div>
          <button onclick="seleccionarServicio('Copias')" class="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-blue-900 transition">Cotizar Copias</button>
        </div>

        <!-- 2. Impresiones -->
        <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-lg transition flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-print"></i>
            </div>
            <h3 class="font-heading font-bold text-xl text-slate-900 mb-2">Impresiones a color y en blanco y negro</h3>
            <p class="text-slate-600 text-sm mb-6">Impresión de documentos, tareas, planos y más con la mejor calidad.</p>
          </div>
          <button onclick="seleccionarServicio('Impresiones a color y en blanco y negro')" class="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-blue-900 transition">Cotizar Impresiones</button>
        </div>

        <!-- 3. Stickers -->
        <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-lg transition flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-tags"></i>
            </div>
            <h3 class="font-heading font-bold text-xl text-slate-900 mb-2">Stickers</h3>
            <p class="text-slate-600 text-sm mb-6">Stickers y etiquetas personalizadas para tu negocio, evento o marca.</p>
          </div>
          <button onclick="seleccionarServicio('Stickers')" class="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-blue-900 transition">Cotizar Stickers</button>
        </div>

        <!-- 4. Certificados -->
        <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-lg transition flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-award"></i>
            </div>
            <h3 class="font-heading font-bold text-xl text-slate-900 mb-2">Diseño e impresión de certificados</h3>
            <p class="text-slate-600 text-sm mb-6">Certificados, diplomas y reconocimientos con diseño profesional.</p>
          </div>
          <button onclick="seleccionarServicio('Diseño e impresión de certificados')" class="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-blue-900 transition">Cotizar Certificados</button>
        </div>

        <!-- 5. Fotos tipo carnet -->
        <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-lg transition flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-id-card"></i>
            </div>
            <h3 class="font-heading font-bold text-xl text-slate-900 mb-2">Fotos tipo carnet</h3>
            <p class="text-slate-600 text-sm mb-6">Fotos tamaño carnet listas para trámites, con fondo y medidas correctas.</p>
          </div>
          <button onclick="seleccionarServicio('Fotos tipo carnet')" class="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-blue-900 transition">Cotizar Fotos Carnet</button>
        </div>

        <!-- 6. ¿Necesitas otra cosa? -->
        <div class="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-8 shadow-md flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-white/20 text-amber-400 flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h3 class="font-heading font-bold text-xl text-white mb-2">¿Necesitas otra cosa?</h3>
            <p class="text-slate-300 text-sm mb-6">Cuéntanos qué necesitas y te cotizamos sin compromiso.</p>
          </div>
          <button onclick="seleccionarServicio('Otro')" class="w-full py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition">Cotizar Proyecto Especial</button>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 5. PORTAFOLIO                              -->
  <!-- ========================================== -->
  <section id="portafolio" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">Portafolio</h2>
        <p class="text-slate-600">Muestra de trabajos realizados con la mayor dedicación.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Item 1 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <img src="https://picsum.photos/seed/eben1/400/300" alt="Certificados personalizados" class="w-full h-64 object-cover group-hover:scale-105 transition duration-300">
          <div class="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6 text-white">
            <h4 class="font-heading font-bold text-lg mb-2">Certificados personalizados</h4>
            <button onclick="seleccionarServicio('Diseño e impresión de certificados')" class="py-2 px-4 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs">Quiero algo así</button>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <img src="https://picsum.photos/seed/eben2/400/300" alt="Stickers para negocio" class="w-full h-64 object-cover group-hover:scale-105 transition duration-300">
          <div class="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6 text-white">
            <h4 class="font-heading font-bold text-lg mb-2">Stickers para negocio</h4>
            <button onclick="seleccionarServicio('Stickers')" class="py-2 px-4 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs">Quiero algo así</button>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <img src="https://picsum.photos/seed/eben3/400/300" alt="Fotos tipo carnet" class="w-full h-64 object-cover group-hover:scale-105 transition duration-300">
          <div class="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6 text-white">
            <h4 class="font-heading font-bold text-lg mb-2">Fotos tipo carnet</h4>
            <button onclick="seleccionarServicio('Fotos tipo carnet')" class="py-2 px-4 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs">Quiero algo así</button>
          </div>
        </div>

        <!-- Item 4 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <img src="https://picsum.photos/seed/eben4/400/300" alt="Impresiones a color" class="w-full h-64 object-cover group-hover:scale-105 transition duration-300">
          <div class="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6 text-white">
            <h4 class="font-heading font-bold text-lg mb-2">Impresiones a color</h4>
            <button onclick="seleccionarServicio('Impresiones a color y en blanco y negro')" class="py-2 px-4 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs">Quiero algo así</button>
          </div>
        </div>

        <!-- Item 5 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <img src="https://picsum.photos/seed/eben5/400/300" alt="Copias y documentos nítidos" class="w-full h-64 object-cover group-hover:scale-105 transition duration-300">
          <div class="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6 text-white">
            <h4 class="font-heading font-bold text-lg mb-2">Copias y documentos nítidos</h4>
            <button onclick="seleccionarServicio('Copias')" class="py-2 px-4 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs">Quiero algo así</button>
          </div>
        </div>

        <!-- Item 6 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <img src="https://picsum.photos/seed/eben6/400/300" alt="Material publicitario" class="w-full h-64 object-cover group-hover:scale-105 transition duration-300">
          <div class="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6 text-white">
            <h4 class="font-heading font-bold text-lg mb-2">Material publicitario</h4>
            <button onclick="seleccionarServicio('Otro')" class="py-2 px-4 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs">Quiero algo así</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 6. CÓMO FUNCIONA                           -->
  <!-- ========================================== -->
  <section id="como-funciona" class="py-20 bg-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">¿Cómo Funciona?</h2>
        <p class="text-slate-600">3 pasos sencillos para tener tus impresiones listas.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-3xl p-8 border border-slate-200 text-center">
          <div class="w-16 h-16 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
          <h3 class="font-heading font-bold text-xl text-slate-900 mb-2">Pides tu cotización</h3>
          <p class="text-slate-600 text-sm">Escríbenos por el formulario o WhatsApp con los detalles de tu trabajo.</p>
        </div>

        <div class="bg-white rounded-3xl p-8 border border-slate-200 text-center">
          <div class="w-16 h-16 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
          <h3 class="font-heading font-bold text-xl text-slate-900 mb-2">Apruebas el diseño o archivo</h3>
          <p class="text-slate-600 text-sm">Verificamos calidad y resolución para asegurar un resultado perfecto.</p>
        </div>

        <div class="bg-white rounded-3xl p-8 border border-slate-200 text-center">
          <div class="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
          <h3 class="font-heading font-bold text-xl text-slate-900 mb-2">Recibes tu impresión</h3>
          <p class="text-slate-600 text-sm">Retira tu pedido o coordina entrega en San Fernando de Apure.</p>
        </div>
      </div>

      <div class="mt-12 p-6 bg-blue-900 text-white rounded-2xl text-center">
        <p class="text-sm sm:text-base font-medium">Atención rápida por WhatsApp. Formas de pago: efectivo, Pago Móvil y transferencia.</p>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 7. TESTIMONIOS                             -->
  <!-- ========================================== -->
  <section id="testimonios" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">Testimonios</h2>
        <p class="text-slate-600">Lo que opinan nuestros clientes en San Fernando de Apure.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200">
          <div class="text-amber-400 mb-4"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <p class="text-slate-600 italic text-sm mb-6">"Los stickers para mi repostería quedaron hermosos y con corte perfecto. La atención por WhatsApp fue muy amable y rápida."</p>
          <p class="font-heading font-bold text-slate-900 text-sm">Yoselin Rivas</p>
          <p class="text-xs text-slate-500">Emprendedora • San Fernando de Apure</p>
        </div>

        <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200">
          <div class="text-amber-400 mb-4"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <p class="text-slate-600 italic text-sm mb-6">"Mandamos a imprimir certificados para un taller y la opalina tenía un acabado de lujo. Todo a tiempo y excelente precio."</p>
          <p class="font-heading font-bold text-slate-900 text-sm">Carlos Méndez</p>
          <p class="text-xs text-slate-500">Docente • San Fernando de Apure</p>
        </div>

        <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200">
          <div class="text-amber-400 mb-4"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <p class="text-slate-600 italic text-sm mb-6">"Me tomaron las fotos carnet y me las entregaron súper rápido con el tamaño exacto. Además el descuento por referido me sirvió mucho."</p>
          <p class="font-heading font-bold text-slate-900 text-sm">Andrea Castillo</p>
          <p class="text-xs text-slate-500">Estudiante • San Fernando de Apure</p>
        </div>
      </div>

      <div class="mt-12 text-center">
        <a href="https://wa.me/584262181760?text=Hola%20Eben-ezer,%20quiero%20dejarles%20mi%20opinion" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition">
          <i class="fa-brands fa-google text-amber-500"></i>
          <span>Déjanos tu reseña</span>
        </a>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 8. PROGRAMA DE REFERIDOS                   -->
  <!-- ========================================== -->
  <section id="referidos" class="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-orange-950 text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider">
        <i class="fa-solid fa-gift"></i>
        <span>Gana con nosotros</span>
      </div>

      <h2 class="font-heading font-extrabold text-3xl sm:text-5xl">Recomienda y gana 10%</h2>

      <p class="text-slate-200 max-w-2xl mx-auto text-base sm:text-lg">
        Comparte tu código con un amigo. Cuando haga su primera compra, esa persona recibe <strong>10% de descuento</strong> y tú también recibes <strong>10% en tu próxima compra</strong>.
      </p>

      <div class="bg-slate-900/90 border border-white/20 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-6 text-left">
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Escribe tu nombre o alias:</label>
          <div class="flex flex-col sm:flex-row gap-3">
            <input type="text" id="referral-input" placeholder="Ejemplo: MARIA, PEDRO..." class="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium focus:outline-none focus:ring-2 focus:ring-amber-400">
            <button type="button" id="btn-generate-code" class="px-6 py-3 rounded-xl font-heading font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition">Generar mi código</button>
          </div>
        </div>

        <div class="bg-slate-950/80 rounded-2xl p-6 border border-white/10 space-y-4">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <span class="text-xs text-slate-400 block uppercase">Tu código generado:</span>
              <span id="display-code" class="font-mono font-black text-3xl text-amber-400 tracking-wider">EBEN-AMIGO23</span>
            </div>
            <button type="button" id="btn-copy-code" class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2">
              <i class="fa-solid fa-copy"></i>
              <span id="copy-code-text">Copiar código</span>
            </button>
          </div>

          <div>
            <span class="text-xs text-slate-400 block uppercase mb-1">Enlace completo para compartir:</span>
            <div class="flex flex-col sm:flex-row gap-2">
              <input type="text" id="display-link" readonly value="https://eben-ezer.com/?ref=EBEN-AMIGO23" class="flex-1 px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-slate-300">
              <button type="button" id="btn-copy-link" class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center justify-center gap-2">
                <i class="fa-solid fa-link"></i>
                <span id="copy-link-text">Copiar link</span>
              </button>
            </div>
          </div>

          <a id="btn-share-whatsapp" href="#" target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-heading font-bold text-sm flex items-center justify-center gap-2 transition">
            <i class="fa-brands fa-whatsapp text-lg"></i>
            <span>Compartir código por WhatsApp</span>
          </a>
        </div>

        <p class="text-xs text-slate-400 italic">Nota: El descuento se aplica mencionando el código al cotizar.</p>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 9. FORMULARIO DE COTIZACIÓN                -->
  <!-- ========================================== -->
  <section id="contacto" class="py-20 bg-slate-50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 space-y-3">
        <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">Pide tu Cotización</h2>
        <p class="text-slate-600">Completa tus datos y te responderemos inmediatamente por WhatsApp.</p>
      </div>

      <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
        <form id="quote-form" class="space-y-5" onsubmit="enviarCotizacion(event)">
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Nombre completo *</label>
            <input type="text" id="input-name" required placeholder="Tu nombre y apellido" class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-blue-600">
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Teléfono / WhatsApp *</label>
            <input type="tel" id="input-phone" required placeholder="Ejemplo: 0426-1234567" class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-blue-600">
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Servicio de interés *</label>
            <select id="input-service" class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-blue-600">
              <option value="Copias">Copias</option>
              <option value="Impresiones a color y en blanco y negro" selected>Impresiones a color y en blanco y negro</option>
              <option value="Stickers">Stickers</option>
              <option value="Diseño e impresión de certificados">Diseño e impresión de certificados</option>
              <option value="Fotos tipo carnet">Fotos tipo carnet</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Cantidad aproximada</label>
            <input type="text" id="input-qty" placeholder="Ej: 50 hojas, 100 stickers..." class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-blue-600">
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Descripción del trabajo</label>
            <textarea id="input-desc" rows="3" placeholder="Detalles de papel, colores, medidas o requerimientos..." class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-blue-600"></textarea>
          </div>

          <div class="bg-amber-50 p-4 rounded-xl border border-amber-200">
            <label class="block text-xs font-bold text-amber-950 uppercase tracking-wider mb-1">Código de referido (10% de descuento)</label>
            <input type="text" id="input-referral" placeholder="Ej: EBEN-MARIA23" class="w-full px-4 py-2.5 rounded-xl border border-amber-300 bg-white font-mono uppercase">
            <span class="text-[11px] text-amber-800 mt-1 block">Si un amigo te recomendó o generaste un código, ingrésalo aquí.</span>
          </div>

          <button type="submit" class="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-heading font-extrabold text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 transition cursor-pointer">
            <i class="fa-brands fa-whatsapp text-2xl"></i>
            <span>Enviar por WhatsApp</span>
          </button>

          <p class="text-xs text-center text-slate-500">También puedes enviarnos tu archivo por WhatsApp después de cotizar.</p>

          <div class="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
            <span>Líneas de contacto:</span>
            <a href="https://wa.me/584262181760" target="_blank" rel="noopener noreferrer" class="font-bold text-blue-900 hover:underline">+58 426 218 1760</a>
            <span>•</span>
            <a href="https://wa.me/584264420257" target="_blank" rel="noopener noreferrer" class="font-bold text-blue-900 hover:underline">+58 426 442 0257</a>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 10. PREGUNTAS FRECUENTES (ACORDEÓN)       -->
  <!-- ========================================== -->
  <section id="faq" class="py-20 bg-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 space-y-3">
        <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">Preguntas Frecuentes</h2>
        <p class="text-slate-600">Resolvemos tus dudas al instante.</p>
      </div>

      <div class="space-y-4">
        <!-- FAQ 1 -->
        <div class="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
          <button type="button" onclick="toggleFaq(1)" class="w-full py-4 px-6 text-left flex justify-between items-center font-heading font-bold text-slate-900 hover:text-blue-900">
            <span>¿Hacen envíos?</span>
            <i id="faq-icon-1" class="fa-solid fa-chevron-down text-sm transition"></i>
          </button>
          <div id="faq-content-1" class="hidden px-6 pb-4 text-sm text-slate-600">
            Atendemos en San Fernando de Apure. Consulta por WhatsApp según tu ubicación para coordinar entregas o retiro céntrico.
          </div>
        </div>

        <!-- FAQ 2 -->
        <div class="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
          <button type="button" onclick="toggleFaq(2)" class="w-full py-4 px-6 text-left flex justify-between items-center font-heading font-bold text-slate-900 hover:text-blue-900">
            <span>¿Cuánto tarda mi pedido?</span>
            <i id="faq-icon-2" class="fa-solid fa-chevron-down text-sm transition"></i>
          </button>
          <div id="faq-content-2" class="hidden px-6 pb-4 text-sm text-slate-600">
            Depende del trabajo; los pedidos pequeños suelen estar listos el mismo día o al siguiente.
          </div>
        </div>

        <!-- FAQ 3 -->
        <div class="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
          <button type="button" onclick="toggleFaq(3)" class="w-full py-4 px-6 text-left flex justify-between items-center font-heading font-bold text-slate-900 hover:text-blue-900">
            <span>¿Cómo puedo pagar?</span>
            <i id="faq-icon-3" class="fa-solid fa-chevron-down text-sm transition"></i>
          </button>
          <div id="faq-content-3" class="hidden px-6 pb-4 text-sm text-slate-600">
            Efectivo (bolívares y divisas), Pago Móvil y transferencia.
          </div>
        </div>

        <!-- FAQ 4 -->
        <div class="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
          <button type="button" onclick="toggleFaq(4)" class="w-full py-4 px-6 text-left flex justify-between items-center font-heading font-bold text-slate-900 hover:text-blue-900">
            <span>¿Puedo pedir muestras?</span>
            <i id="faq-icon-4" class="fa-solid fa-chevron-down text-sm transition"></i>
          </button>
          <div id="faq-content-4" class="hidden px-6 pb-4 text-sm text-slate-600">
            Escríbenos por WhatsApp y te asesoramos con muestras digitales y pruebas de impresión.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 11. FOOTER                                 -->
  <!-- ========================================== -->
  <footer class="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
        <div class="lg:col-span-5 space-y-4">
          <span class="font-heading font-extrabold text-2xl text-white block">Eben-ezer</span>
          <p class="text-xs text-amber-400 font-semibold">"Donde la variedad encuentra la fe"</p>
          <p class="text-sm text-slate-400">Tu imprenta de confianza en San Fernando de Apure. Copias, stickers, certificados y fotos tipo carnet con calidad garantizada.</p>
          <div class="flex gap-3 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-xl bg-slate-900 hover:bg-pink-600 flex items-center justify-center text-white transition"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-600 flex items-center justify-center text-white transition"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://wa.me/584262181760" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-600 flex items-center justify-center text-white transition"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

        <div class="lg:col-span-3 space-y-3">
          <h4 class="font-heading font-bold text-white text-sm uppercase tracking-wider">Enlaces Rápidos</h4>
          <ul class="space-y-2 text-sm text-slate-400">
            <li><a href="#inicio" class="hover:text-amber-400">Inicio</a></li>
            <li><a href="#servicios" class="hover:text-amber-400">Servicios</a></li>
            <li><a href="#portafolio" class="hover:text-amber-400">Portafolio</a></li>
            <li><a href="#como-funciona" class="hover:text-amber-400">Cómo Funciona</a></li>
            <li><a href="#referidos" class="hover:text-amber-400">Programa de Referidos (10%)</a></li>
            <li><a href="#contacto" class="hover:text-amber-400">Cotizar</a></li>
          </ul>
        </div>

        <div class="lg:col-span-4 space-y-3">
          <h4 class="font-heading font-bold text-white text-sm uppercase tracking-wider">Contacto</h4>
          <p class="text-sm text-slate-400"><i class="fa-solid fa-location-dot text-amber-400 mr-2"></i> San Fernando de Apure, Venezuela</p>
          <p class="text-sm text-slate-400"><i class="fa-brands fa-whatsapp text-emerald-400 mr-2"></i> Principal: <a href="https://wa.me/584262181760" class="hover:text-white font-mono">+58 426 218 1760</a></p>
          <p class="text-sm text-slate-400"><i class="fa-brands fa-whatsapp text-teal-400 mr-2"></i> Secundario: <a href="https://wa.me/584264420257" class="hover:text-white font-mono">+58 426 442 0257</a></p>
          <p class="text-sm text-slate-400"><i class="fa-solid fa-envelope text-blue-400 mr-2"></i> 1variedades.eben.ezer1@gmail.com</p>
        </div>
      </div>

      <div class="pt-8 text-center text-xs text-slate-500">
        © 2025 Eben-ezer. Todos los derechos reservados. San Fernando de Apure, Venezuela.
      </div>
    </div>
  </footer>

  <!-- ========================================== -->
  <!-- 12. BOTÓN FLOTANTE DE WHATSAPP             -->
  <!-- ========================================== -->
  <a href="https://wa.me/584262181760?text=Hola%20Eben-ezer,%20quiero%20consultar%20por%20sus%20servicios%20de%20impresion" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center text-3xl sm:text-4xl shadow-2xl transition transform hover:scale-110 active:scale-95" aria-label="Escribir por WhatsApp">
    <i class="fa-brands fa-whatsapp"></i>
  </a>

  <!-- ========================================== -->
  <!-- 13. JAVASCRIPT EMBEBIDO                    -->
  <!-- ========================================== -->
  <script>
    // Configuración del negocio
    const CONFIG = {
      mainPhone: '584262181760',
      secondaryPhone: '584264420257',
      domain: 'https://eben-ezer.com'
    };

    // 1. Menú móvil hamburguesa
    const btnToggleMenu = document.getElementById('btn-toggle-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    btnToggleMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú móvil al hacer clic en enlaces
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // 2. Acordeón de FAQs
    function toggleFaq(id) {
      const content = document.getElementById('faq-content-' + id);
      const icon = document.getElementById('faq-icon-' + id);
      const isHidden = content.classList.contains('hidden');
      
      // Cerrar todos los demás
      for (let i = 1; i <= 4; i++) {
        document.getElementById('faq-content-' + i).classList.add('hidden');
        document.getElementById('faq-icon-' + i).classList.remove('rotate-180');
      }

      if (isHidden) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
      }
    }

    // 3. Sistema de Referidos: Detección de ?ref=CODIGO y LocalStorage
    document.addEventListener('DOMContentLoaded', () => {
      const urlParams = new URLSearchParams(window.location.search);
      const refParam = urlParams.get('ref');

      if (refParam) {
        const cleanRef = refParam.trim().toUpperCase().replace(/[^A-Z0-9\\-]/g, '');
        if (cleanRef) {
          localStorage.setItem('ebenezer_ref', cleanRef);
        }
      }

      // Verificar si hay código guardado
      const storedRef = localStorage.getItem('ebenezer_ref');
      if (storedRef) {
        mostrarBannerReferido(storedRef);
        const inputReferral = document.getElementById('input-referral');
        if (inputReferral) inputReferral.value = storedRef;
      }

      actualizarLinkWhatsAppReferido('EBEN-AMIGO23');
    });

    function mostrarBannerReferido(codigo) {
      const banner = document.getElementById('referral-banner');
      const bannerCode = document.getElementById('banner-referral-code');
      if (banner && bannerCode) {
        bannerCode.textContent = codigo;
        banner.classList.remove('hidden');
      }
    }

    // Botón para cerrar y limpiar banner
    document.getElementById('btn-close-banner').addEventListener('click', () => {
      document.getElementById('referral-banner').classList.add('hidden');
      localStorage.removeItem('ebenezer_ref');
      const inputReferral = document.getElementById('input-referral');
      if (inputReferral) inputReferral.value = '';
    });

    // 4. Generador de código de referido
    const btnGenerate = document.getElementById('btn-generate-code');
    const referralInput = document.getElementById('referral-input');
    const displayCode = document.getElementById('display-code');
    const displayLink = document.getElementById('display-link');

    btnGenerate.addEventListener('click', () => {
      let raw = referralInput.value.trim();
      let cleanAlias = raw
        .normalize('NFD')
        .replace(/[\\u0300-\\u036f]/g, '')
        .replace(/[^a-zA-Z0-9]/g, '')
        .toUpperCase();

      if (!cleanAlias) cleanAlias = 'AMIGO';
      cleanAlias = cleanAlias.substring(0, 10);

      const randomDigits = Math.floor(10 + Math.random() * 90);
      const code = 'EBEN-' + cleanAlias + randomDigits;
      const fullUrl = CONFIG.domain + '/?ref=' + code;

      displayCode.textContent = code;
      displayLink.value = fullUrl;

      // Actualizar enlace de compartir por WhatsApp
      actualizarLinkWhatsAppReferido(code);
    });

    function actualizarLinkWhatsAppReferido(code) {
      const link = CONFIG.domain + '/?ref=' + code;
      const text = '¡Hola! Te recomiendo Eben-ezer en San Fernando de Apure. Usa mi código de referido *' + code + '* o entra en ' + link + ' y recibe 10% de descuento en tus impresiones.';
      const whatsappShareUrl = 'https://wa.me/?text=' + encodeURIComponent(text);
      document.getElementById('btn-share-whatsapp').href = whatsappShareUrl;
    }

    // Copiar código
    document.getElementById('btn-copy-code').addEventListener('click', () => {
      const code = displayCode.textContent;
      navigator.clipboard.writeText(code).then(() => {
        const textSpan = document.getElementById('copy-code-text');
        textSpan.textContent = '¡Copiado!';
        setTimeout(() => textSpan.textContent = 'Copiar código', 2000);
      });
    });

    // Copiar link
    document.getElementById('btn-copy-link').addEventListener('click', () => {
      const link = displayLink.value;
      navigator.clipboard.writeText(link).then(() => {
        const textSpan = document.getElementById('copy-link-text');
        textSpan.textContent = '¡Copiado!';
        setTimeout(() => textSpan.textContent = 'Copiar link', 2000);
      });
    });

    // Función auxiliar para seleccionar servicio desde tarjetas o portafolio
    function seleccionarServicio(nombreServicio) {
      const select = document.getElementById('input-service');
      if (select) {
        select.value = nombreServicio;
      }
      document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
    }

    // 5. Envío del formulario a WhatsApp con datos prellenados
    function enviarCotizacion(e) {
      e.preventDefault();
      const nombre = document.getElementById('input-name').value.trim();
      const telefono = document.getElementById('input-phone').value.trim();
      const servicio = document.getElementById('input-service').value;
      const cantidad = document.getElementById('input-qty').value.trim();
      const descripcion = document.getElementById('input-desc').value.trim();
      const referido = document.getElementById('input-referral').value.trim();

      if (!nombre || !telefono) {
        alert('Por favor completa tu nombre y número de teléfono.');
        return;
      }

      let mensaje = '👋 *¡Hola Eben-ezer!* Quisiera cotizar un trabajo de impresión:\\n\\n';
      mensaje += '👤 *Nombre:* ' + nombre + '\\n';
      mensaje += '📱 *WhatsApp/Teléfono:* ' + telefono + '\\n';
      mensaje += '🖨️ *Servicio:* ' + servicio + '\\n';

      if (cantidad) {
        mensaje += '🔢 *Cantidad aproximada:* ' + cantidad + '\\n';
      }

      if (descripcion) {
        mensaje += '📝 *Detalles:* ' + descripcion + '\\n';
      }

      if (referido) {
        mensaje += '\\n🎁 *Código de Referido (10% OFF):* ' + referido.toUpperCase() + '\\n*(Aplica 10% de descuento en la compra)*\\n';
      }

      mensaje += '\\n📍 *Ubicación:* San Fernando de Apure';

      const url = 'https://wa.me/' + CONFIG.mainPhone + '?text=' + encodeURIComponent(mensaje);
      window.open(url, '_blank');
    }
  </script>
</body>
</html>`;
}
