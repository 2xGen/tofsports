'use client';

import React, { useMemo, useState } from 'react';
import Link from '@/i18n/Link';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, Send, CheckCircle, Download, CreditCard, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { downloadInvoice, generateOrderNumber, formatDate, BUSINESS_INFO } from '@/lib/invoiceGenerator';
import PageHero, { PageHeroTitle, PageHeroSubtitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';
import { useLocale } from '@/i18n/LocaleProvider';

const WinkelmandPage = () => {
  const { locale, t } = useLocale();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getSubtotal,
    getBTW,
    getTotal,
    isLoaded,
  } = useCart();

  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    straat: '',
    huisnummer: '',
    postcode: '',
    plaats: '',
    tennisclub: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [submitError, setSubmitError] = useState('');
  const [copiedField, setCopiedField] = useState(null);
  const [includeWhiteboard, setIncludeWhiteboard] = useState(false);
  
  const WHITEBOARD_PRICE = 150;

  /** Clubpakketten bevatten al een whiteboard — geen losse upsell tonen */
  const hasClubPackage = useMemo(
    () => cartItems.some((item) => String(item.productId).startsWith('hoofdpakket-')),
    [cartItems]
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.naam.trim()) errors.naam = t('cart.errors.nameRequired');
    if (!formData.email.trim()) {
      errors.email = t('cart.errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = t('cart.errors.emailInvalid');
    }
    if (!formData.telefoon.trim()) errors.telefoon = t('cart.errors.phoneRequired');
    if (!formData.straat.trim()) errors.straat = t('cart.errors.streetRequired');
    if (!formData.huisnummer.trim()) errors.huisnummer = t('cart.errors.houseNumberRequired');
    if (!formData.postcode.trim()) {
      errors.postcode = t('cart.errors.postalRequired');
    } else if (!/^\d{4}\s?[A-Za-z]{2}$/.test(formData.postcode.trim())) {
      errors.postcode = t('cart.errors.postalInvalid');
    }
    if (!formData.plaats.trim()) errors.plaats = t('cart.errors.cityRequired');

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    if (cartItems.length === 0) return;

    setSubmitError('');
    setIsSubmitting(true);

    // Generate order number and date
    const orderNumber = generateOrderNumber(formData.naam);
    const orderDate = formatDate(new Date());

    // Calculate totals including whiteboard if selected
    let orderItems = [...cartItems];
    let orderSubtotal = getSubtotal();
    
    if (includeWhiteboard && !hasClubPackage) {
      orderItems.push({
        id: 'whiteboard',
        productId: 'whiteboard',
        productName: 'Magnetisch Whiteboard',
        formatId: 'whiteboard',
        formatName: '120 x 90 cm',
        packageType: 'standard',
        packageLabel: 'Rijdend whiteboard',
        extraName: null,
        price: WHITEBOARD_PRICE,
        quantity: 1
      });
      orderSubtotal += WHITEBOARD_PRICE;
    }
    
    const orderBtw = orderSubtotal * 0.21;
    const orderTotal = orderSubtotal + orderBtw;

    // Store order data for invoice generation
    const order = {
      items: orderItems,
      customer: { ...formData },
      subtotal: orderSubtotal,
      btw: orderBtw,
      total: orderTotal,
      orderNumber,
      orderDate,
      includeWhiteboard
    };

    try {
      const saveResponse = await fetch('/api/save-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });
      const saveResult = await saveResponse.json().catch(() => ({}));
      if (!saveResponse.ok || !saveResult.ok) {
        throw new Error(saveResult.error || 'Opslaan van bestelling is mislukt');
      }

      // Notify TOF Sports of the new order (email to info@tofsports.nl)
      fetch('/api/notify-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      }).catch((err) => console.warn('Order notification failed:', err));

      await new Promise(resolve => setTimeout(resolve, 1500));

      setOrderData(order);
      setIsSubmitting(false);
      setIsSubmitted(true);
      clearCart();
    } catch (err) {
      console.error('Order save failed:', err);
      setSubmitError(t('cart.orderSaveFailed'));
      setIsSubmitting(false);
    }
  };

  const handleDownloadInvoice = () => {
    if (orderData) {
      downloadInvoice(orderData);
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (isSubmitted && orderData) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            {/* Success Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('cart.thankYou')}</h1>
              <p className="text-gray-600">
                {t('cart.invoiceNumber')}: <span className="font-semibold">{orderData.orderNumber}</span>
              </p>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">{t('cart.orderSummary')}</h2>
              <div className="space-y-2 mb-4">
                {orderData.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.quantity}x {item.productName} - {item.formatName}
                    </span>
                    <span className="font-medium">€{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-3 space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t('cart.subtotal')}</span>
                  <span>€{orderData.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t('cart.vat')}</span>
                  <span>€{orderData.btw.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2">
                  <span>{t('cart.total')}</span>
                  <span className="text-orange-500">€{orderData.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="w-5 h-5 text-yellow-600" />
                <h2 className="text-lg font-bold text-gray-900">{t('cart.payDirect')}</h2>
              </div>
              <p className="text-gray-600 text-sm mb-4">{t('cart.payInstructions')}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white rounded-lg p-3">
                  <div>
                    <p className="text-xs text-gray-500">IBAN</p>
                    <p className="font-mono font-medium">{BUSINESS_INFO.iban}</p>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(BUSINESS_INFO.iban, 'iban')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {copiedField === 'iban' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                  </button>
                </div>
                
                <div className="flex items-center justify-between bg-white rounded-lg p-3">
                  <div>
                    <p className="text-xs text-gray-500">BIC</p>
                    <p className="font-mono font-medium">{BUSINESS_INFO.bic}</p>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(BUSINESS_INFO.bic, 'bic')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {copiedField === 'bic' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                  </button>
                </div>
                
                <div className="flex items-center justify-between bg-white rounded-lg p-3">
                  <div>
                    <p className="text-xs text-gray-500">{t('cart.accountName')}</p>
                    <p className="font-medium">{BUSINESS_INFO.name}</p>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(BUSINESS_INFO.name, 'name')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {copiedField === 'name' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                  </button>
                </div>
                
                <div className="flex items-center justify-between bg-white rounded-lg p-3">
                  <div>
                    <p className="text-xs text-gray-500">{t('cart.description')}</p>
                    <p className="font-medium">{t('cart.invoiceRef')} {orderData.orderNumber}</p>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(`${t('cart.invoiceRef')} ${orderData.orderNumber}`, 'ref')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {copiedField === 'ref' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                  </button>
                </div>
                
                <div className="flex items-center justify-between bg-orange-100 rounded-lg p-3">
                  <div>
                    <p className="text-xs text-orange-600">{t('cart.amountToPay')}</p>
                    <p className="font-bold text-lg text-orange-600">€{orderData.total.toFixed(2)}</p>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(orderData.total.toFixed(2), 'amount')}
                    className="p-2 hover:bg-orange-200 rounded-lg transition-colors"
                  >
                    {copiedField === 'amount' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-orange-400" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Download Invoice Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleDownloadInvoice}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-6"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                {t('cart.downloadInvoice')}
              </Button>
              <Button asChild variant="outline" className="flex-1 py-6" size="lg">
                <Link href="/webshop">
                  {t('cart.continueShopping')}
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>{t('cart.questionsContact')}</p>
              <p className="font-medium text-gray-700">Tel: {BUSINESS_INFO.phone}</p>
              <p>{t('cart.orEmail')} <a href="mailto:info@tofsports.nl" className="text-orange-500 hover:underline font-medium">info@tofsports.nl</a></p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/winkelmand')} minHeight="40vh">
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg"
            >
              <ShoppingCart className="h-8 w-8 text-orange-500" />
            </motion.div>
            <PageHeroTitle heroInView={heroInView} className="text-4xl md:text-6xl">
              {t('cart.title')}
            </PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView} className="text-lg md:text-xl">
              {cartItems.length > 0
                ? t(itemCount === 1 ? 'cart.itemsInCartOne' : 'cart.itemsInCartOther', { count: itemCount })
                : t('cart.empty')}
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cart.empty')}</h2>
            <p className="text-gray-600 mb-6">{t('cart.emptyBody')}</p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/webshop" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t('cart.goToShop')}
              </Link>
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{t('cart.yourProducts')}</h2>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  {t('cart.removeAll')}
                </Button>
              </div>

              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md border border-gray-100 p-4 md:p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900">{item.productName}</h3>
                      <p className="text-gray-600 text-sm">{item.formatName}</p>
                      <p className="text-gray-500 text-sm">{item.packageLabel}</p>
                      {item.extraName && (item.extraQuantity ?? 0) > 0 && (
                        <p className="text-orange-600 text-sm">
                          + {item.extraName} x {item.extraQuantity}
                          {item.extraPrice != null && (
                            <span className="text-gray-500"> (€{(item.extraPrice * item.extraQuantity).toFixed(2)})</span>
                          )}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right min-w-[80px]">
                        <p className="font-bold text-lg text-gray-900">
                          €{(item.price * item.quantity).toFixed(2)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-gray-500 text-xs">€{item.price.toFixed(2)} {t('cart.perItem')}</p>
                        )}
                      </div>

                      {/* Remove button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-10 h-10 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Whiteboard upsell — alleen bij losse webshop-producten, niet bij clubpakket */}
              {!hasClubPackage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl border-2 border-blue-200 p-4 md:p-6 mt-6"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Whiteboard Image */}
                  <div className="w-full md:w-48 h-36 bg-white rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                    <img 
                      src="https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/whiteboard%20tof.png"
                      alt="Magnetisch Whiteboard"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">{t('cart.whiteboardBadge')}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {t('cart.whiteboardTitle')}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {t('cart.whiteboardBody')}
                    </p>
                    <p className="text-xs text-gray-500 italic mb-3">
                      {t('cart.whiteboardNote')}
                    </p>
                    
                    {/* Checkbox */}
                    <label className="flex items-center gap-3 cursor-pointer bg-white p-3 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                      <input
                        type="checkbox"
                        checked={includeWhiteboard}
                        onChange={(e) => setIncludeWhiteboard(e.target.checked)}
                        className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <div className="flex-1">
                        <span className="font-medium text-gray-900">{t('cart.whiteboardCheckbox')}</span>
                      </div>
                      <span className="font-bold text-orange-500 text-lg">€{WHITEBOARD_PRICE.toFixed(2)}</span>
                    </label>
                  </div>
                </div>
              </motion.div>
              )}

              {hasClubPackage && (
                <p className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                  {t('cart.clubPackageNote')}
                </p>
              )}

              <div className="mt-4">
                <Button asChild variant="outline" className="w-full md:w-auto">
                  <Link href="/webshop" className="flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    {t('cart.continueShopping')}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Order Summary & Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
                {/* Price Summary */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('cart.summary')}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>{t('cart.subtotalProducts')}</span>
                    <span>€{getSubtotal().toFixed(2)}</span>
                  </div>
                  {includeWhiteboard && !hasClubPackage && (
                    <div className="flex justify-between text-gray-600">
                      <span>{t('cart.whiteboardLine')}</span>
                      <span>€{WHITEBOARD_PRICE.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-600">
                    <span>{t('cart.vat')}</span>
                    <span>
                      €
                      {(
                        (getSubtotal() +
                          (includeWhiteboard && !hasClubPackage ? WHITEBOARD_PRICE : 0)) *
                        0.21
                      ).toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-xl font-bold text-gray-900">
                      <span>{t('cart.total')}</span>
                      <span>
                        €
                        {(
                          (getSubtotal() +
                            (includeWhiteboard && !hasClubPackage ? WHITEBOARD_PRICE : 0)) *
                          1.21
                        ).toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{t('cart.inclVat')}</p>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 pt-4 border-t border-gray-200">{t('cart.yourDetails')}</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('cart.name')} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="naam"
                      value={formData.naam}
                      onChange={handleInputChange}
                      placeholder={t('cart.fullName')}
                      className={formErrors.naam ? 'border-red-500' : ''}
                    />
                    {formErrors.naam && <p className="text-red-500 text-xs mt-1">{formErrors.naam}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('cart.emailAddress')} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={locale === 'en' ? 'example@email.com' : 'voorbeeld@email.nl'}
                      className={formErrors.email ? 'border-red-500' : ''}
                    />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('cart.phone')} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      name="telefoon"
                      value={formData.telefoon}
                      onChange={handleInputChange}
                      placeholder="06-12345678"
                      className={formErrors.telefoon ? 'border-red-500' : ''}
                    />
                    {formErrors.telefoon && <p className="text-red-500 text-xs mt-1">{formErrors.telefoon}</p>}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('cart.street')} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="straat"
                        value={formData.straat}
                        onChange={handleInputChange}
                        placeholder={locale === 'en' ? 'Street name' : 'Straatnaam'}
                        className={formErrors.straat ? 'border-red-500' : ''}
                      />
                      {formErrors.straat && <p className="text-red-500 text-xs mt-1">{formErrors.straat}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('cart.number')} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="huisnummer"
                        value={formData.huisnummer}
                        onChange={handleInputChange}
                        placeholder="12a"
                        className={formErrors.huisnummer ? 'border-red-500' : ''}
                      />
                      {formErrors.huisnummer && <p className="text-red-500 text-xs mt-1">{formErrors.huisnummer}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('cart.postalCode')} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleInputChange}
                        placeholder="1234 AB"
                        className={formErrors.postcode ? 'border-red-500' : ''}
                      />
                      {formErrors.postcode && <p className="text-red-500 text-xs mt-1">{formErrors.postcode}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('cart.city')} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="plaats"
                        value={formData.plaats}
                        onChange={handleInputChange}
                        placeholder="Amsterdam"
                        className={formErrors.plaats ? 'border-red-500' : ''}
                      />
                      {formErrors.plaats && <p className="text-red-500 text-xs mt-1">{formErrors.plaats}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('cart.club')}
                    </label>
                    <Input
                      type="text"
                      name="tennisclub"
                      value={formData.tennisclub}
                      onChange={handleInputChange}
                      placeholder={t('cart.clubPlaceholder')}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || cartItems.length === 0}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 text-lg mt-4"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        {t('cart.submitting')}
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        {t('cart.placeOrder')}
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-2">
                    {t('cart.afterOrderNote')}
                  </p>
                  {submitError && (
                    <p className="text-sm text-red-600 text-center">{submitError}</p>
                  )}

                  <div className="mt-4 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
                    <p className="font-medium text-gray-700">{t('cart.questionsContact')}</p>
                    <p>Tel: 06 13 25 25 59</p>
                    <p>{t('cart.orEmail')} <a href="mailto:info@tofsports.nl" className="text-orange-500 hover:underline font-medium">info@tofsports.nl</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WinkelmandPage;
