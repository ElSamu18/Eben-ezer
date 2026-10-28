import test from 'node:test';
import assert from 'node:assert/strict';
import {
  sanitizeAlias,
  generateReferralCode,
  buildReferralLink,
  extractReferralParam,
  buildWhatsAppQuoteUrl,
  buildWhatsAppShareUrl,
  BUSINESS_CONFIG,
} from './referral';

test('sanitizeAlias removes accents, spaces, and special characters', () => {
  assert.equal(sanitizeAlias('María Pérez'), 'MARIAPEREZ');
  assert.equal(sanitizeAlias('josé_ángel-123'), 'JOSEANGEL123');
  assert.equal(sanitizeAlias('   '), 'AMIGO');
  assert.equal(sanitizeAlias(''), 'AMIGO');
  assert.equal(sanitizeAlias('SUPERLONGNAMEWITHMANYLETTERS'), 'SUPERLONGNAM');
});

test('generateReferralCode creates formatted EBEN-NAME## codes', () => {
  const codeWithFixedSuffix = generateReferralCode('Carlos', 42);
  assert.equal(codeWithFixedSuffix, 'EBEN-CARLOS42');

  const randomCode = generateReferralCode('Ana');
  assert.match(randomCode, /^EBEN-ANA\d{2}$/);
});

test('buildReferralLink generates correct referral URL', () => {
  const link = buildReferralLink('EBEN-JUAN88');
  assert.equal(link, 'https://eben-ezer.com/?ref=EBEN-JUAN88');

  const customDomainLink = buildReferralLink('EBEN-SOFIA12', 'https://mi-tienda.com/');
  assert.equal(customDomainLink, 'https://mi-tienda.com/?ref=EBEN-SOFIA12');
});

test('extractReferralParam extracts code from search query strings', () => {
  assert.equal(extractReferralParam('?ref=EBEN-LUCAS99'), 'EBEN-LUCAS99');
  assert.equal(extractReferralParam('?other=1&ref=EBEN-TEST12&foo=bar'), 'EBEN-TEST12');
  assert.equal(extractReferralParam('?other=123'), null);
  assert.equal(extractReferralParam(''), null);
});

test('buildWhatsAppQuoteUrl builds valid URL with all fields and 10% discount notice', () => {
  const url = buildWhatsAppQuoteUrl({
    name: 'Samuel López',
    phone: '04261234567',
    service: 'Stickers',
    quantity: '100 unidades',
    description: 'Stickers circulares para frascos de mermelada',
    referralCode: 'EBEN-PEDRO22',
  });

  assert.ok(url.startsWith(`https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}?text=`));
  const decodedText = decodeURIComponent(url.replace(`https://wa.me/${BUSINESS_CONFIG.mainPhoneDigits}?text=`, ''));
  assert.ok(decodedText.includes('Samuel López'));
  assert.ok(decodedText.includes('Stickers'));
  assert.ok(decodedText.includes('100 unidades'));
  assert.ok(decodedText.includes('EBEN-PEDRO22'));
  assert.ok(decodedText.includes('10% OFF'));
});

test('buildWhatsAppShareUrl builds valid sharing link', () => {
  const shareUrl = buildWhatsAppShareUrl('EBEN-MARIA23', 'https://eben-ezer.com/?ref=EBEN-MARIA23');
  assert.ok(shareUrl.startsWith('https://wa.me/?text='));
  const decoded = decodeURIComponent(shareUrl.replace('https://wa.me/?text=', ''));
  assert.ok(decoded.includes('EBEN-MARIA23'));
  assert.ok(decoded.includes('10% de descuento'));
});
