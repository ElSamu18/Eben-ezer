/**
 * Configuración del negocio y generación de enlaces de WhatsApp
 * para "Eben-ezer - Donde la variedad encuentra la fe"
 */

export interface QuoteFormState {
  name: string;
  phone?: string;
  service: string;
  quantity: string;
  description: string;
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
  domainPlaceholder: 'https://eben-ezer.com',
  catalogChannelUrl: 'https://whatsapp.com/channel/0029VbDSCML5fM5S4aTWJ92y',
};

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
  ];

  if (data.phone && data.phone.trim()) {
    lines.push(`📱 *WhatsApp / Teléfono:* ${data.phone.trim()}`);
  }

  lines.push(`🖨️ *Servicio de interés:* ${data.service}`);

  if (data.quantity && data.quantity.trim()) {
    lines.push(`🔢 *Cantidad aproximada:* ${data.quantity.trim()}`);
  }

  if (data.description && data.description.trim()) {
    lines.push(`📝 *Detalles del trabajo:* ${data.description.trim()}`);
  }

  lines.push(``);
  lines.push(`📍 *Ubicación:* San Fernando de Apure`);
  lines.push(`¡Muchas gracias, quedo atento(a)!`);

  const messageText = lines.join('\n');
  return `https://wa.me/${targetPhoneDigits}?text=${encodeURIComponent(messageText)}`;
}
