import { jsPDF } from 'jspdf';

// Business details
const BUSINESS_INFO = {
  name: 'TOF Sports',
  address: 'M. van Nispenstraat 16',
  postcode: '3201KC',
  city: 'Spijkenisse',
  phone: '06 13 25 25 59',
  kvk: '70507929',
  btw: 'NL858349954B01',
  iban: 'NL56KNAB0257029400',
  bic: 'KNABNL2H'
};

export const generateInvoice = (orderData) => {
  const { items, customer, subtotal, btw, total, orderNumber, orderDate } = orderData;
  
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Colors
  const orangeColor = [249, 115, 22]; // Orange-500
  const grayColor = [107, 114, 128]; // Gray-500
  const darkColor = [31, 41, 55]; // Gray-800
  
  let yPos = 20;
  
  // Header - Company name
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...orangeColor);
  doc.text('TOF Sports', 20, yPos);
  
  // Factuur label
  doc.setFontSize(28);
  doc.setTextColor(...darkColor);
  doc.text('FACTUUR', pageWidth - 20, yPos, { align: 'right' });
  
  yPos += 15;
  
  // Company details (left side)
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...grayColor);
  doc.text(BUSINESS_INFO.address, 20, yPos);
  doc.text(`${BUSINESS_INFO.postcode} ${BUSINESS_INFO.city}`, 20, yPos + 4);
  doc.text(`Tel: ${BUSINESS_INFO.phone}`, 20, yPos + 8);
  
  // Invoice details (right side)
  doc.setTextColor(...darkColor);
  doc.text(`Factuurnummer: ${orderNumber}`, pageWidth - 20, yPos, { align: 'right' });
  doc.text(`Datum: ${orderDate}`, pageWidth - 20, yPos + 5, { align: 'right' });
  
  yPos += 25;
  
  // Divider line
  doc.setDrawColor(...orangeColor);
  doc.setLineWidth(0.5);
  doc.line(20, yPos, pageWidth - 20, yPos);
  
  yPos += 15;
  
  // Customer details
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...darkColor);
  doc.text('Factuuradres', 20, yPos);
  
  yPos += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(customer.naam, 20, yPos);
  yPos += 5;
  doc.text(`${customer.straat} ${customer.huisnummer}`, 20, yPos);
  yPos += 5;
  doc.text(`${customer.postcode} ${customer.plaats}`, 20, yPos);
  yPos += 5;
  doc.text(customer.email, 20, yPos);
  yPos += 5;
  doc.text(`Tel: ${customer.telefoon}`, 20, yPos);
  
  if (customer.tennisclub) {
    yPos += 5;
    doc.text(`Club: ${customer.tennisclub}`, 20, yPos);
  }
  
  yPos += 20;
  
  // Products table header
  doc.setFillColor(249, 250, 251); // Gray-50
  doc.rect(20, yPos - 5, pageWidth - 40, 10, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...darkColor);
  doc.text('Product', 25, yPos);
  doc.text('Aantal', 120, yPos);
  doc.text('Prijs', 145, yPos);
  doc.text('Totaal', pageWidth - 25, yPos, { align: 'right' });
  
  yPos += 8;
  
  // Products
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  
  items.forEach((item) => {
    // Check if we need a new page
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }
    
    const itemTotal = (item.price * item.quantity).toFixed(2);
    
    // Product name (may need wrapping for long names)
    const productText = `${item.productName} - ${item.formatName}`;
    const packageText = item.packageLabel + (item.extraName ? ` + ${item.extraName}` : '');
    
    doc.setTextColor(...darkColor);
    doc.text(productText.substring(0, 45), 25, yPos);
    yPos += 4;
    doc.setTextColor(...grayColor);
    doc.text(packageText.substring(0, 45), 25, yPos);
    
    doc.setTextColor(...darkColor);
    doc.text(item.quantity.toString(), 125, yPos - 2);
    doc.text(`€${item.price.toFixed(2)}`, 145, yPos - 2);
    doc.text(`€${itemTotal}`, pageWidth - 25, yPos - 2, { align: 'right' });
    
    yPos += 10;
  });
  
  yPos += 5;
  
  // Divider
  doc.setDrawColor(229, 231, 235); // Gray-200
  doc.setLineWidth(0.3);
  doc.line(100, yPos, pageWidth - 20, yPos);
  
  yPos += 10;
  
  // Totals
  doc.setFontSize(10);
  doc.setTextColor(...grayColor);
  doc.text('Subtotaal:', 130, yPos);
  doc.setTextColor(...darkColor);
  doc.text(`€${subtotal.toFixed(2)}`, pageWidth - 25, yPos, { align: 'right' });
  
  yPos += 6;
  doc.setTextColor(...grayColor);
  doc.text('BTW (21%):', 130, yPos);
  doc.setTextColor(...darkColor);
  doc.text(`€${btw.toFixed(2)}`, pageWidth - 25, yPos, { align: 'right' });
  
  yPos += 8;
  doc.setDrawColor(229, 231, 235);
  doc.line(100, yPos, pageWidth - 20, yPos);
  
  yPos += 8;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Totaal:', 130, yPos);
  doc.setTextColor(...orangeColor);
  doc.text(`€${total.toFixed(2)}`, pageWidth - 25, yPos, { align: 'right' });
  
  yPos += 25;
  
  // Payment details box
  doc.setFillColor(254, 243, 199); // Yellow-100
  doc.roundedRect(20, yPos, pageWidth - 40, 45, 3, 3, 'F');
  
  yPos += 10;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...darkColor);
  doc.text('Betaalgegevens', 30, yPos);
  
  yPos += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(`IBAN: ${BUSINESS_INFO.iban}`, 30, yPos);
  yPos += 5;
  doc.text(`BIC: ${BUSINESS_INFO.bic}`, 30, yPos);
  yPos += 5;
  doc.text(`T.n.v.: ${BUSINESS_INFO.name}`, 30, yPos);
  yPos += 5;
  doc.text(`O.v.v.: Factuur ${orderNumber}`, 30, yPos);
  
  // Footer
  yPos = 270;
  doc.setFontSize(8);
  doc.setTextColor(...grayColor);
  doc.text(`KVK: ${BUSINESS_INFO.kvk}  |  BTW: ${BUSINESS_INFO.btw}  |  Tel: ${BUSINESS_INFO.phone}`, pageWidth / 2, yPos, { align: 'center' });
  yPos += 4;
  doc.text(`${BUSINESS_INFO.name}  |  ${BUSINESS_INFO.address}  |  ${BUSINESS_INFO.postcode} ${BUSINESS_INFO.city}`, pageWidth / 2, yPos, { align: 'center' });
  
  return doc;
};

export const downloadInvoice = (orderData) => {
  const doc = generateInvoice(orderData);
  doc.save(`TOF-Sports-Factuur-${orderData.orderNumber}.pdf`);
};

export const generateOrderNumber = (customerName = '') => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  
  // Clean up customer name: remove special characters, replace spaces with dashes
  const cleanName = customerName
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9\s]/gi, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .substring(0, 20); // Limit length
  
  return `${cleanName}-${day}`;
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

export { BUSINESS_INFO };
