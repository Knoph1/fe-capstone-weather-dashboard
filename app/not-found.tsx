"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sun, CloudRain, ArrowLeft } from "lucide-react"

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 space-y-6">
      {/* Animated Weather Icons */}
      <motion.div
        className="flex items-center justify-center gap-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Sun className="h-14 w-14 text-yellow-400 dark:text-yellow-300" />
        <CloudRain className="h-14 w-14 text-blue-400 dark:text-blue-300" />
      </motion.div>

      {/* 404 Heading */}
      <motion.h1
        className="text-6xl font-extrabold tracking-tight sm:text-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        className="text-lg text-muted-foreground max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Oops! It looks like the page you’re looking for has drifted into another climate zone.
        <br />
        Let’s get you back to clearer skies.
      </motion.p>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Link href="/" passHref>
          <Button variant="default" size="lg" className="gap-2">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </main>
  )
}
