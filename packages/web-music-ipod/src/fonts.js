// Reconstructed from the supplied component; module and API names restored locally.
import { chicagoFont } from './assets/chicago-font.js';
import { createLogger } from './logging.js';
const fontLogger = createLogger("fonts"),
  fontDefinitions = [{
    family: "ChicagoKare",
    source: `url(${chicagoFont}) format('woff2')`,
    descriptors: {
      display: "block"
    }
  }, {
    // Installed with macOS, reads as Chicago, and covers Thai. The metric
    // overrides line its glyphs up with ChicagoKare's so falling back does
    // not shift the layout.
    family: "Krungthep",
    source: 'local("Krungthep")',
    descriptors: {
      display: "block",
      sizeAdjust: "79.5%",
      ascentOverride: "94.1%",
      descentOverride: "27.7%"
    }
  }];
let fontsRegistered = false;
function registerFonts() {
  if (!(fontsRegistered || typeof document > "u" || !document.fonts)) {
    fontsRegistered = true;
    for (const {
      family: e,
      source: t,
      descriptors: i
    } of fontDefinitions) try {
      const l = new FontFace(e, t, i);
      document.fonts.add(l);
      l.load().catch(a => {
        fontLogger.warn(`Could not load ${e}`, a);
      });
    } catch (l) {
      fontLogger.warn(`Could not register ${e}`, l);
    }
  }
}
export { registerFonts };
