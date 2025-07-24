import { ShieldCheck, ClipboardCheck, BrainCircuit, Zap, UserCircle, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold tracking-tight">PhishShield</span>
        </div>
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 gap-6">
        <ShieldCheck className="w-16 h-16 text-primary mb-4" />
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">Defend Against Phishing in Seconds</h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-6">
          Instantly analyze suspicious links with AI. Stay safe online with real-time verdicts and history tracking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" size="lg" className="px-8 text-base font-semibold flex items-center gap-2 shadow-lg shadow-green-500/30 hover:shadow-green-500/60 focus:shadow-green-500/60">
            <Link href="/scan">
              <ShieldCheck className="w-5 h-5" />
              Check a Link for Phishing
            </Link>
          </Button>
        </div>
      </section>

      {/* How it Works */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center">
          <span className="inline-block w-2 h-8 rounded bg-green-500 dark:bg-green-700 mr-3"></span>
          How it Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card className="transition-transform hover:scale-[1.03] hover:shadow-lg border-muted-foreground/10 hover:border-primary/40 focus-within:shadow-lg">
            <CardHeader className="flex flex-col items-center gap-2 pb-0">
              <ClipboardCheck className="w-10 h-10 text-green-500 dark:text-green-400 mb-2" />
              <CardTitle className="text-center">1. Paste the suspicious link</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">Copy and paste any link you think might be a phishing attempt.</CardDescription>
            </CardContent>
          </Card>
          <Card className="transition-transform hover:scale-[1.03] hover:shadow-lg border-muted-foreground/10 hover:border-primary/40 focus-within:shadow-lg">
            <CardHeader className="flex flex-col items-center gap-2 pb-0">
              <BrainCircuit className="w-10 h-10 text-blue-500 dark:text-blue-400 mb-2" />
              <CardTitle className="text-center">2. Let our AI analyze it</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">Our advanced AI scans the link for phishing indicators in real time.</CardDescription>
            </CardContent>
          </Card>
          <Card className="transition-transform hover:scale-[1.03] hover:shadow-lg border-muted-foreground/10 hover:border-primary/40 focus-within:shadow-lg">
            <CardHeader className="flex flex-col items-center gap-2 pb-0">
              <Zap className="w-10 h-10 text-purple-500 dark:text-purple-400 mb-2" />
              <CardTitle className="text-center">3. Instantly get the verdict</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">Receive a clear verdict and stay protected from scams.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center">
          <span className="inline-block w-2 h-8 rounded bg-purple-500 dark:bg-purple-700 mr-3"></span>
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center place-items-center">
          <Card className="transition-transform hover:scale-[1.03] hover:shadow-lg border-muted-foreground/10 hover:border-primary/40 focus-within:shadow-lg">
            <CardHeader className="flex flex-col items-center gap-2 pb-0">
              <BrainCircuit className="w-10 h-10 text-purple-500 dark:text-purple-400 mb-2" />
              <CardTitle className="text-center">AI-Powered Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">Cutting-edge AI for accurate phishing detection.</CardDescription>
            </CardContent>
          </Card>
          <Card className="transition-transform hover:scale-[1.03] hover:shadow-lg border-muted-foreground/10 hover:border-primary/40 focus-within:shadow-lg">
            <CardHeader className="flex flex-col items-center gap-2 pb-0">
              <Zap className="w-10 h-10 text-red-500 dark:text-red-400 mb-2" />
              <CardTitle className="text-center">Realtime Results</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">Get instant feedback on every link you check.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 gap-6 bg-muted">
        <h2 className="text-3xl font-bold mb-2">Ready to protect yourself?</h2>
        <p className="text-lg text-muted-foreground max-w-xl mb-6">
          Start using PhishShield for free and experience AI-powered phishing protection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" size="lg" className="px-8 text-base font-semibold">
            <Link href="/scan">Scan a Link</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-center py-6 border-t mt-auto text-sm text-muted-foreground">
        <span>PhishShield &copy; {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
