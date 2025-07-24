# 🛡️ PhishShield

**PhishShield** is a modern, AI-powered phishing detection app built with Next.js, Tailwind CSS, shadcn/ui, and OpenRouter LLMs. Instantly check suspicious links and protect yourself from online scams with real-time, AI-driven verdicts.

---

## 🚀 Features

- **AI-Powered Detection**: Uses advanced LLMs (via OpenRouter) to analyze URLs for phishing threats.
- **Realtime Results**: Get instant, clear verdicts and explanations for every link you scan.
- **Beautiful UI**: Responsive, dark/light mode ready, and built with shadcn/ui and Tailwind CSS.
- **Modern UX**: Smooth animations, theme toggle, and a focused, user-friendly experience.

---

## ✨ Demo

![PhishShield Screenshot](public/phishshield-demo.png)

---

## 🛠️ Tech Stack

- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [OpenRouter LLM API](https://openrouter.ai/)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

## ⚡ Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/phishshield.git
   cd phishshield
   ```
2. **Install dependencies:**
   ```bash
   pnpm install
   # or yarn install / npm install
   ```
3. **Set up your OpenRouter API key:**
   - Create a `.env.local` file in the root:
     ```env
     OPENROUTER_API_KEY=sk-or-...
     ```
4. **Run the development server:**
   ```bash
   pnpm dev
   # or yarn dev / npm run dev
   ```
5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## 📝 Usage

- **Scan a Link:**
  - Go to `/scan` or click "Check a Link for Phishing" on the landing page.
  - Paste a suspicious URL and click **Scan Now**.
  - Instantly see if the link is safe or a phishing attempt, with a clear reason.

---

## 📦 Project Structure

- `app/` — Next.js App Router pages and layout
- `components/ui/` — shadcn/ui components
- `app/api/check-url/route.ts` — API route for AI phishing detection
- `public/` — Static assets and icons

---

## 💡 Customization

- Change the OpenRouter model or prompt in `app/api/check-url/route.ts`.
- Tweak the UI with Tailwind and shadcn/ui components.
- Add authentication, user history, or more features as needed!

---

## 🛡️ License

MIT. Use, modify, and share freely.

---

> Made with ❤️ and AI by [Your Name](https://github.com/yourusername)
