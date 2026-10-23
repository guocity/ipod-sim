# Original Apple Music iPod experience
A local reproduction of the interactive iPod on https://music.apple.com/us/jfdsalkfavsd.

Run `npm run dev` and open http://localhost:5173.

The iPod uses the original public `web-music-ipod` web component from the supplied reference, including its embedded ChicagoKare font, wheel behavior, menu transitions, lighting, reflection, and audio crossfades. Adobe Garamond Pro is hosted locally for the page heading. The surrounding Apple Music page shell is reproduced responsively.

The original US song/artist/playlist data is bundled locally. Music plays through Apple’s public preview URLs, which require an internet connection and may expire or vary by region; these are previews, not full subscription tracks. No sign-in credentials are collected: Apple Music links open the real service.

Original reference component: https://music.apple.com/includes/ipod/web-music-ipod.esm.js
Original reference styles: https://music.apple.com/assets/NotFoundPage~fd10aec657.css
Apple assets and branding belong to their respective owners. Independent reference reproduction.
