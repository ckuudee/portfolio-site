import { defineConfig } from "astro/config";

// Vercel sets VERCEL_PROJECT_PRODUCTION_URL at build time, so canonical and social-preview
// URLs are absolute in production without hard-coding a domain. Set SITE_URL to override
// (for example after adding a custom domain).
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:4321");

export default defineConfig({
  site,
  output: "static",
});
