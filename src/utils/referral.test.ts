import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppQuoteUrl,
  BUSINESS_CONFIG,
} from './referral';

test('BUSINESS_CONFIG contains verified contact numbers and channel catalog link', () => {
  assert.equal(BUSINESS_CONFIG.mainPhoneDigits, '584262181760');
  assert.equal(BUSINESS_CONFIG.secondaryPhoneDigits, '584264420257');
  assert.equal(BUSINESS_CONFIG.catalogChannelUrl, 'https://whatsapp.com/channel/0029VbDSCML5fM5S4aTWJ92y');
});

test('buildWhatsAppQuoteUrl builds valid URL with optional phone field', () => {
  const urlWithPhone = buildWhatsAppQuoteUrl({
    name: 'Samuel López',
    phone: '04261234567',
    service: 'Stickers',
    quantity: '100 unidades',
    description: 'Stickers circulares para frascos de mermelada',
  });

  assert.ok(urlWithPhone.startsWith(`https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}?text=`));
  const decodedText = decodeURIComponent(urlWithPhone.replace(`https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}?text=`, ''));
  assert.ok(decodedText.includes('Samuel López'));
  assert.ok(decodedText.includes('04261234567'));
  assert.ok(decodedText.includes('Stickers'));
  assert.ok(decodedText.includes('100 unidades'));
  assert.ok(decodedText.includes('San Fernando de Apure'));

  // Test without phone (optional)
  const urlWithoutPhone = buildWhatsAppQuoteUrl({
    name: 'Ana Mendoza',
    service: 'Copias',
    quantity: '50',
    description: 'Documentos tamaño carta blanco y negro',
  });
  const decodedWithoutPhone = decodeURIComponent(urlWithoutPhone.replace(`https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}?text=`, ''));
  assert.ok(decodedWithoutPhone.includes('Ana Mendoza'));
  assert.ok(!decodedWithoutPhone.includes('WhatsApp / Teléfono:'));
  assert.ok(decodedWithoutPhone.includes('Copias'));
});
