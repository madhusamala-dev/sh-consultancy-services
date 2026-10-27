# SH Consultancy Services — Official Website

> **Academic Excellence & Institutional Advisory**  
> Led by **Dr. V. Bhagya Raju** (B.E., M.Tech., Ph.D.)

A modern, fully responsive, production-grade single-page web application for **SH Consultancy Services**, specializing in institutional accreditation (NBA, NAAC), national rankings (NIRF), academic consultancy projects, and university establishment processes (Deemed and Private Universities).

---

## 🏛️ Project Overview

This website communicates trust, academic leadership, professionalism, and institutional credibility to educational leaders, college managements, principals, directors, IQAC coordinators, and accreditation teams across India.

### Key Sections & Features:
1. **Sticky Header & Brand Identity:** Custom SH monogram crest, company typography, smooth scroll navigation, and "Book a Consultation" action.
2. **Hero Section:** Authentic executive portrait of Dr. V. Bhagya Raju (`/images/bhagyaraju-sir.jpeg`), editorial frame, floating credential badge, and trust statements.
3. **About the Consultant:** Comprehensive overview of Dr. V. Bhagya Raju's advisory role and verified educational qualifications:
   - **B.E.** — Osmania University (OU)
   - **M.Tech.** — Jawaharlal Nehru Technological University Hyderabad (JNTUH)
   - **Ph.D.** — Jawaharlal Nehru Technological University Hyderabad (JNTUH)
4. **Our Services (6 Pillars):**
   - NBA Accreditation Consultancy
   - NAAC Accreditation Consultancy
   - NIRF Ranking Consultancy
   - Consultancy Projects
   - Deemed University Establishment
   - Private University Establishment
   *(Interactive service links automatically scroll to and preselect the service in the consultation form)*
5. **Why Choose SH Consultancy Services?:** Contrasting deep navy & gold aesthetic highlighting 4 core advisory values.
6. **Our Consulting Approach:** 5-stage advisory roadmap with responsive timeline (horizontal on desktop, vertical on mobile).
7. **Contact & Consultation Form:** High-conversion form with React Hook Form + Zod schema validation, honeypot spam protection, client rate limiting, and local persistence fallback.
8. **Office Location & Google Maps:** Embed of the Vanasthalipuram, Hyderabad headquarters with a direct "Get Directions" Google Maps integration.
9. **Newsletter Subscription:** Institutional advisory digest subscription with email validation, consent opt-in, and duplicate prevention.
10. **Footer & Legal Modals:** Multi-column corporate advisory footer with statutory disclaimers, configurable social channels, and accessible dialogs for Privacy Policy and Terms of Use.

---

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom academic luxury design tokens
- **Typography:** Playfair Display (Serif headings) & Inter (Sans-serif body)
- **Icons:** Lucide React & custom SVG crest components
- **Form Management:** React Hook Form
- **Schema Validation:** Zod
- **Maps:** Google Maps responsive embed

---

## 🎨 Brand Design Tokens

| Token | Hex Code | Purpose |
|---|---|---|
| **Deep Navy Blue** | `#102A43` / `#081421` | Primary brand background & corporate authority |
| **Royal Blue** | `#2457A7` | Accent links, badges, and secondary elements |
| **Premium Gold** | `#C7A45A` / `#DFBE76` | Highlights, crest borders, buttons, and callouts |
| **Warm Ivory** | `#FAF8F3` / `#F4EFE6` | Elegant background surface for readability |
| **Charcoal** | `#25313D` / `#52606D` | Crisp, accessible body typography |

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js** v18+ or v20+
- **npm** or **yarn** / **pnpm**

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Production Build
Compile TypeScript and generate optimized assets:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ Environment Variables & Backend Integration

Create a `.env` file in the project root:

```env
# Optional: External API endpoint for consultation requests (e.g. AWS Lambda / Express / Supabase)
VITE_API_ENDPOINT=https://your-api-domain.com/api/consultation

# Optional: External Newsletter subscription webhook (e.g. Mailchimp, ConvertKit, SendGrid)
VITE_NEWSLETTER_ENDPOINT=https://your-api-domain.com/api/newsletter
```

### Form Persistence Behavior:
- **With `VITE_API_ENDPOINT` configured:** The form sends an HTTP `POST` JSON request with `{ fullName, organization, email, phone, institutionType, serviceRequired, message, consent, reference, submittedAt }`.
- **Without `VITE_API_ENDPOINT`:** Inquiries are stored in browser `localStorage` under `sh_consultation_inquiries` so that inquiries are never lost. A pre-filled email client link is also provided on the confirmation screen.

---

## 📍 Contact & Consultancy Details

- **Consultant:** Dr. V. Bhagya Raju
- **Phone:** +91 99853 27001
- **Email:** drvbhagyaraju@shconsultancyservices.in
- **Office Address:** South Entrance Portion, Plot No. 136, First Floor, HIG Phase-IV, Gateway Colony, Vanasthalipuram, Hayathnagar Mandal, Ranga Reddy District, Telangana – 500070, India.

---

## 📜 Regulatory Disclaimer

*Consultancy services provide advisory and preparation support. Accreditation, ranking, and regulatory decisions remain subject to the relevant authorities and applicable regulations.*
