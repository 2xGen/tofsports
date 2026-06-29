/** Bouwt een leesbare bestelsamenvatting vanuit een pakket-quote (checkout). */
export function buildPackageDetailsFromQuote(quote) {
  return {
    youthLabel: quote.youth.label,
    levelLabel: quote.levelLabel,
    formats: quote.formatLines.map((line) => ({
      name: line.name,
      players: line.players || null,
    })),
    included: quote.bundleLines.map((line) => ({
      name: line.name,
      description: line.description || null,
      price: line.price || 0,
    })),
    buttons:
      quote.buttonCount > 0
        ? { count: quote.buttonCount, packs: Math.round(quote.buttonCount / 10) }
        : null,
    whiteboardChoice: quote.whiteboardChoice,
    declinedFreeWhiteboard: quote.whiteboardChoice === 'decline',
    noWhiteboard: quote.whiteboardChoice === 'none' || quote.whiteboardChoice === 'decline',
  };
}

export function hasPackageDetails(item) {
  return Boolean(item.metadata?.packageDetails);
}

/** Regels voor factuur en bestel-e-mail. */
export function formatPackageDetailLines(item) {
  const details = item.metadata?.packageDetails;
  if (!details) return [];

  const lines = [];

  if (details.levelLabel) {
    lines.push(`Pakket: ${details.levelLabel}`);
  }
  if (details.youthLabel) {
    lines.push(`Jeugdgroep: ${details.youthLabel}`);
  }

  if (details.formats?.length) {
    lines.push('');
    lines.push('Formats in pakket:');
    details.formats.forEach((format) => {
      const size = format.players ? ` (${format.players})` : '';
      lines.push(`  • ${format.name}${size}`);
    });
  }

  if (details.included?.length) {
    lines.push('');
    lines.push('Ook inbegrepen:');
    details.included.forEach((inc) => {
      const priceNote = inc.price > 0 ? ` [+€${inc.price.toFixed(2)} ex. btw]` : '';
      const desc = inc.description ? ` — ${inc.description}` : '';
      lines.push(`  • ${inc.name}${desc}${priceNote}`);
    });
  }

  if (details.declinedFreeWhiteboard) {
    lines.push('');
    lines.push('Magneetbord: klant wil geen gratis magneetbord (niet meesturen)');
  } else if (details.noWhiteboard && !details.included?.some((i) => i.name?.includes('Magneetbord'))) {
    lines.push('');
    lines.push('Magneetbord: geen');
  }

  if (details.buttons) {
    lines.push('');
    lines.push(
      `Magneetbuttons: ${details.buttons.count} stuks (${details.buttons.packs}× per 10)`,
    );
  } else {
    lines.push('');
    lines.push('Magneetbuttons: klant heeft eigen buttons');
  }

  return lines;
}
