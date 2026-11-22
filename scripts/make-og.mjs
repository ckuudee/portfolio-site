// Renders the 1200x630 social preview image (public/og.png) from an inline SVG.
// Run with `npm run og` after changing the name or title; the PNG is committed.
import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#111214"/>
  <rect x="80" y="250" width="96" height="6" rx="3" fill="#f0b35a"/>
  <text x="80" y="210" font-family="Helvetica, Arial, sans-serif" font-size="92" font-weight="700" fill="#ece8e1">Cody Hoang</text>
  <text x="80" y="330" font-family="Helvetica, Arial, sans-serif" font-size="44" font-weight="600" fill="#f0b35a">Software Engineer</text>
  <text x="80" y="400" font-family="Helvetica, Arial, sans-serif" font-size="32" fill="#a8a49c">Backend systems that keep working when things fail.</text>
  <text x="80" y="550" font-family="Menlo, monospace" font-size="26" fill="#a8a49c">github.com/ckuudee</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("wrote public/og.png");
