'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, Send, CheckCircle, Download, CreditCard, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { downloadInvoice, generateOrderNumber, formatDate, BUSINESS_INFO } from '@/lib/invoiceGenerator';

const WinkelmandPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    getSubtotal, 
    getBTW, 
    getTotal,
    isLoaded 
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
  const [copiedField, setCopiedField] = useState(null);
  const [includeWhiteboard, setIncludeWhiteboard] = useState(false);
  
  const WHITEBOARD_PRICE = 150;

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
    
    if (!formData.naam.trim()) errors.naam = 'Naam is verplicht';
    if (!formData.email.trim()) {
      errors.email = 'E-mailadres is verplicht';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Voer een geldig e-mailadres in';
    }
    if (!formData.telefoon.trim()) errors.telefoon = 'Telefoonnummer is verplicht';
    if (!formData.straat.trim()) errors.straat = 'Straat is verplicht';
    if (!formData.huisnummer.trim()) errors.huisnummer = 'Huisnummer is verplicht';
    if (!formData.postcode.trim()) {
      errors.postcode = 'Postcode is verplicht';
    } else if (!/^\d{4}\s?[A-Za-z]{2}$/.test(formData.postcode.trim())) {
      errors.postcode = 'Voer een geldige postcode in (bijv. 1234 AB)';
    }
    if (!formData.plaats.trim()) errors.plaats = 'Plaats is verplicht';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    if (cartItems.length === 0) return;

    setIsSubmitting(true);

    // Generate order number and date
    const orderNumber = generateOrderNumber(formData.naam);
    const orderDate = formatDate(new Date());

    // Calculate totals including whiteboard if selected
    let orderItems = [...cartItems];
    let orderSubtotal = getSubtotal();
    
    if (includeWhiteboard) {
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

    // Simulate form submission (in real app, this would send to an API/email)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Here you would typically send the order to your backend
    console.log('Order submitted:', order);

    setOrderData(order);
    setIsSubmitting(false);
    setIsSubmitted(true);
    clearCart();
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Bedankt voor je bestelling!</h1>
              <p className="text-gray-600">
                Factuurnummer: <span className="font-semibold">{orderData.orderNumber}</span>
              </p>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Besteloverzicht</h2>
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
                  <span className="text-gray-600">Subtotaal</span>
                  <span>€{orderData.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">BTW (21%)</span>
                  <span>€{orderData.btw.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2">
                  <span>Totaal</span>
                  <span className="text-orange-500">€{orderData.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="w-5 h-5 text-yellow-600" />
                <h2 className="text-lg font-bold text-gray-900">Direct Betalen</h2>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Maak het bedrag over naar onderstaande rekening. Je bestelling wordt verwerkt zodra de betaling is ontvangen.
              </p>
              
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
                    <p className="text-xs text-gray-500">Ten name van</p>
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
                    <p className="text-xs text-gray-500">Omschrijving</p>
                    <p className="font-medium">Factuur {orderData.orderNumber}</p>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(`Factuur ${orderData.orderNumber}`, 'ref')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {copiedField === 'ref' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                  </button>
                </div>
                
                <div className="flex items-center justify-between bg-orange-100 rounded-lg p-3">
                  <div>
                    <p className="text-xs text-orange-600">Te betalen bedrag</p>
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
                Download Factuur (PDF)
              </Button>
              <Button asChild variant="outline" className="flex-1 py-6" size="lg">
                <Link href="/webshop">
                  Verder winkelen
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Vragen over je bestelling? Neem contact op:</p>
              <p className="font-medium text-gray-700">Tel: {BUSINESS_INFO.phone}</p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, rgba(251, 146, 60, 0.3), rgba(249, 115, 22, 0.4), rgba(234, 88, 12, 0.3))',
          }}
        />

        <div className="container mx-auto px-4 relative z-30 py-12">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <ShoppingCart className="w-8 h-8 text-orange-500" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-800"
            >
              Winkelmand
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600"
            >
              {cartItems.length > 0 
                ? `${cartItems.reduce((sum, item) => sum + item.quantity, 0)} product${cartItems.reduce((sum, item) => sum + item.quantity, 0) !== 1 ? 'en' : ''} in je mandje`
                : 'Je winkelmand is leeg'}
            </motion.p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,50 Q250,0 500,50 T1000,50 L1000,100 L0,100 Z" fill="#F9FAFB" />
          </svg>
        </div>
      </section>

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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Je winkelmand is leeg</h2>
            <p className="text-gray-600 mb-6">Voeg producten toe vanuit onze webshop om te beginnen.</p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/webshop" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Naar de webshop
              </Link>
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Je producten</h2>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Alles verwijderen
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
                      {item.extraName && (
                        <p className="text-orange-600 text-sm">+ {item.extraName}</p>
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
                          <p className="text-gray-500 text-xs">€{item.price.toFixed(2)} per stuk</p>
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

              {/* Whiteboard Upsell Banner */}
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
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">AANBEVOLEN</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Magnetisch Whiteboard (120 x 90 cm)
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Om het meeste uit het TOF programma te halen, raden we sterk aan om een magnetisch whiteboard te gebruiken. 
                      Heeft jouw tennisclub er nog geen? Wij kunnen er een voor je bestellen!
                    </p>
                    <p className="text-xs text-gray-500 italic mb-3">
                      * Whiteboard kleuren en stijl kunnen enigszins variëren op basis van beschikbaarheid
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
                        <span className="font-medium text-gray-900">Ja, voeg whiteboard toe aan mijn bestelling</span>
                      </div>
                      <span className="font-bold text-orange-500 text-lg">€{WHITEBOARD_PRICE.toFixed(2)}</span>
                    </label>
                  </div>
                </div>
              </motion.div>

              <div className="mt-4">
                <Button asChild variant="outline" className="w-full md:w-auto">
                  <Link href="/webshop" className="flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Verder winkelen
                  </Link>
                </Button>
              </div>
            </div>

            {/* Order Summary & Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
                {/* Price Summary */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">Overzicht</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotaal producten</span>
                    <span>€{getSubtotal().toFixed(2)}</span>
                  </div>
                  {includeWhiteboard && (
                    <div className="flex justify-between text-gray-600">
                      <span>Whiteboard (120x90cm)</span>
                      <span>€{WHITEBOARD_PRICE.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-600">
                    <span>BTW (21%)</span>
                    <span>€{((getSubtotal() + (includeWhiteboard ? WHITEBOARD_PRICE : 0)) * 0.21).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-xl font-bold text-gray-900">
                      <span>Totaal</span>
                      <span>€{((getSubtotal() + (includeWhiteboard ? WHITEBOARD_PRICE : 0)) * 1.21).toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Inclusief BTW</p>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 pt-4 border-t border-gray-200">Jouw gegevens</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Naam <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="naam"
                      value={formData.naam}
                      onChange={handleInputChange}
                      placeholder="Volledige naam"
                      className={formErrors.naam ? 'border-red-500' : ''}
                    />
                    {formErrors.naam && <p className="text-red-500 text-xs mt-1">{formErrors.naam}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-mailadres <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="voorbeeld@email.nl"
                      className={formErrors.email ? 'border-red-500' : ''}
                    />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefoonnummer <span className="text-red-500">*</span>
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
                        Straat <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="straat"
                        value={formData.straat}
                        onChange={handleInputChange}
                        placeholder="Straatnaam"
                        className={formErrors.straat ? 'border-red-500' : ''}
                      />
                      {formErrors.straat && <p className="text-red-500 text-xs mt-1">{formErrors.straat}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nr. <span className="text-red-500">*</span>
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
                        Postcode <span className="text-red-500">*</span>
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
                        Plaats <span className="text-red-500">*</span>
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
                      Tennisclub / Padelclub (optioneel)
                    </label>
                    <Input
                      type="text"
                      name="tennisclub"
                      value={formData.tennisclub}
                      onChange={handleInputChange}
                      placeholder="Naam van je club"
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
                        Bestelling versturen...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Bestelling plaatsen
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-2">
                    Na het plaatsen van je bestelling nemen we contact met je op voor de betaling.
                  </p>
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
