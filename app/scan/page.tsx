"use client"

import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle, CheckCircle, Loader2, ShieldX } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

export default function ScanPage() {
  const [url, setUrl] = React.useState("")
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<null | { safe: boolean; reason: string }>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  function validateUrl(value: string) {
    if (!value) return "URL is required"
    if (!/^https?:\/\//.test(value)) return "URL must start with http:// or https://"
    return ""
  }

  async function handleScan(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setResult(null)
    const validation = validateUrl(url)
    if (validation) {
      setError(validation)
      inputRef.current?.focus()
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/check-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })
      if (!res.ok) throw new Error("API error")
      const data = await res.json()
      setResult({ safe: data.safe, reason: data.reason })
    } catch (err: any) {
      setError("Failed to scan the link. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-lg border-muted-foreground/10 bg-card text-card-foreground">
          <div className="flex justify-between items-center px-6 pt-4">
            <Button asChild variant="ghost" size="sm" className="px-3">
              <Link href="/">← Back to Home</Link>
            </Button>
            <ThemeToggle />
          </div>
          <CardHeader className="text-center flex flex-col items-center gap-2 pb-0 relative mt-[-16px]">
            <ShieldX className="mx-auto mb-2 w-10 h-10 text-primary" />
            <CardTitle>Scan a suspicious link</CardTitle>
            <CardDescription>Paste a URL below to check if it's safe.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleScan} className="flex flex-col gap-4">
              <Input
                ref={inputRef}
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={e => setUrl(e.target.value)}
                disabled={loading}
                required
                pattern="https?://.*"
                className={error ? "border-destructive focus-visible:ring-destructive" : ""}
                autoFocus
                aria-invalid={!!error}
                aria-describedby={error ? "url-error" : undefined}
              />
              <Button type="submit" size="lg" disabled={loading} className="w-full font-semibold">
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin w-5 h-5" />
                    Scanning...
                  </span>
                ) : (
                  "Scan Now"
                )}
              </Button>
            </form>
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="mt-4"
                >
                  <div className="flex items-center gap-2 text-destructive bg-destructive/10 rounded-md px-3 py-2 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span id="url-error">{error}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="mt-6"
                >
                  <Card className={`border-2 bg-card text-card-foreground ${result.safe ? "border-green-500 dark:border-green-400 bg-green-500/10 dark:bg-green-400/10" : "border-red-500 dark:border-red-400 bg-red-500/10 dark:bg-red-400/10"} transition-colors`}> 
                    <CardHeader className="flex flex-col items-center gap-2 pb-0">
                      {result.safe ? (
                        <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                      ) : (
                        <ShieldX className="w-8 h-8 text-red-600 dark:text-red-400" />
                      )}
                      <CardTitle className={`text-center ${result.safe ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`}>
                        {result.safe ? "This link is safe" : "Phishing detected"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-base">
                        {result.reason}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
} 