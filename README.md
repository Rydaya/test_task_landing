# Mini Landing Page — Frontend Test

One-page promo landing built with React and Tailwind.  
On page load, it triggers a PageView in Facebook Pixel.  
Clicking the CTA button sends a Lead event to Facebook Pixel and a POST request to a mock (used test url: 'https://httpbin.org/post', not from Keitaro API!) with click_id (from URL), event: "cta_click", and timestamp.  
Fully responsive on desktop and mobile.  
No real Pixel ID or Keitaro backend is required.  

---

## Run

```bash
yarn install
yarn start

Open in browser:
http://localhost:3000/?click_id=abc123

