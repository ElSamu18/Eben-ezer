/**
 * Utilitarios puros para el sistema de referidos y generación de enlaces de WhatsApp
 * para "Eben-ezer - Donde la variedad encuentra la fe"
 */

export interface QuoteFormState {
  name: string;
  phone: string;
  service: string;
  quantity: string;
  description: string;
  referralCode?: string;
}

export const BUSINESS_CONFIG = {
  name: 'Eben-ezer',
  slogan: 'Donde la variedad encuentra la fe',
  location: 'San Fernando de Apure, Venezuela',
  mainPhone: '+58 426 218 1760',
  mainPhoneDigits: '584262181760',
  secondaryPhone: '+58 426 442 0257',
  secondaryPhoneDigits: '584264420257',
  email: '1variedades.eben.ezer1@gmail.com',
  instagram: 'https://instagram.com/eben_ezer_variedades',
  instagramHandle: '@eben_ezer_variedades',
  facebook: 'https://facebook.com',
  domainPlaceholder: 'https://eben-ezer.com',
  catalogChannelUrl: 'https://whatsapp.com/channel/0029VbDSCML5fM5S4aTWJ92y',
  discountPercentage: 10,
};

/**
 * Sanitiza un alias para que sea seguro y limpio:
 * sin acentos, sin espacios, solo mayúsculas y números (máx 12 caracteres).
 */
export function sanitizeAlias(input: string): string {
  if (!input) return 'AMIGO';
  const clean = input
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Quita acentos y tildes
    .replace(/[^a-zA-Z0-9]/g, '') // Solo caracteres alfanuméricos
    .toUpperCase();

  return clean.length > 0 ? clean.slice(0, 12) : 'AMIGO';
}

/**
 * Genera un código de referido tipo EBEN-MARIA23
 */
export function generateReferralCode(rawNameOrAlias: string, forcedSuffix?: number): string {
  const sanitized = sanitizeAlias(rawNameOrAlias);
  const suffix =
    forcedSuffix !== undefined
      ? forcedSuffix
      : Math.floor(10 + Math.random() * 90); // 2 dígitos (10 a 99)
  return `EBEN-${sanitized}${suffix}`;
}

/**
 * Construye el enlace de referido completo
 */
export function buildReferralLink(code: string, domain = BUSINESS_CONFIG.domainPlaceholder): string {
  const cleanDomain = domain.replace(/\/+$/, '');
  const encodedCode = encodeURIComponent(code.trim().toUpperCase());
  return `${cleanDomain}/?ref=${encodedCode}`;
}

/**
 * Extrae el código de referido del search string de la URL (ej: "?ref=EBEN-JUAN45")
 */
export function extractReferralParam(searchString: string): string | null {
  if (!searchString) return null;
  try {
    const params = new URLSearchParams(searchString);
    const ref = params.get('ref');
    if (!ref) return null;
    const sanitized = ref.trim().toUpperCase().replace(/[^A-Z0-9\-]/g, '');
    return sanitized.length >= 3 ? sanitized : null;
  } catch {
    return null;
  }
}

/**
 * Construye el mensaje prellenado para cotización por WhatsApp
 */
export function buildWhatsAppQuoteUrl(
  data: QuoteFormState,
  targetPhoneDigits = BUSINESS_CONFIG.mainPhoneDigits
): string {
  const lines: string[] = [
    `👋 *¡Hola, equipo de Eben-ezer!* Quisiera solicitar una cotización:`,
    ``,
    `👤 *Nombre:* ${data.name.trim()}`,
    `📱 *WhatsApp / Teléfono:* ${data.phone.trim()}`,
    `🖨️ *Servicio de interés:* ${data.service}`,
  ];

  if (data.quantity && data.quantity.trim()) {
    lines.push(`🔢 *Cantidad aproximada:* ${data.quantity.trim()}`);
  }

  if (data.description && data.description.trim()) {
    lines.push(`📝 *Detalles del trabajo:* ${data.description.trim()}`);
  }

  if (data.referralCode && data.referralCode.trim()) {
    lines.push(``);
    lines.push(`🎁 *Código de Referido (10% OFF):* ${data.referralCode.trim().toUpperCase()}`);
    lines.push(`*(Por favor aplicar el descuento del 10% por referido)*`);
  }

  lines.push(``);
  lines.push(`📍 *Ubicación:* San Fernando de Apure`);
  lines.push(`¡Muchas gracias, quedo atento(a)!`);

  const messageText = lines.join('\n');
  return `https://wa.me/${targetPhoneDigits}?text=${encodeURIComponent(messageText)}`;
}

/**
 * Construye el enlace de WhatsApp para compartir el código de referido con un amigo
 */
export function buildWhatsAppShareUrl(code: string, referralLink: string): string {
  const message = `✨ *¡Hola! Te recomiendo Eben-ezer en San Fernando de Apure* ✨
Copias, impresiones a color, stickers, certificados y fotos tipo carnet con la mejor calidad.

🎁 Usa mi código de referido *${code}* o entra en este enlace:
${referralLink}

¡Recibirás un *10% de descuento* en tu primer pedido y a mí me ayudas a ganar 10% también! 🙌🖨️`;

  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
