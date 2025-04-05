"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { VolumeIcon as VolumeUp, Volume2, VolumeX } from "lucide-react"

export function ReadAloudButton() {
  const [isReading, setIsReading] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    // Create speech synthesis utterance
    const synth = window.speechSynthesis
    const newUtterance = new SpeechSynthesisUtterance()

    // Set properties
    newUtterance.rate = 0.9 // Slightly slower than default
    newUtterance.pitch = 1
    newUtterance.volume = isMuted ? 0 : 1

    // Get text from the prescription results
    const text =
      document.querySelector(".prescription-results")?.textContent ||
      "Your prescription includes medications for high blood pressure, type 2 diabetes, and high cholesterol. " +
        "Take Lisinopril 10mg once daily to lower your blood pressure. " +
        "Take Metformin 500mg twice daily with meals to control your blood sugar. " +
        "Take Atorvastatin 20mg once daily at bedtime to lower your cholesterol. " +
        "Monitor your blood pressure and blood sugar regularly, and follow a heart-healthy diet."

    newUtterance.text = text

    // Set up event handlers
    newUtterance.onend = () => {
      setIsReading(false)
    }

    setUtterance(newUtterance)

    // Clean up
    return () => {
      synth.cancel()
    }
  }, [isMuted])

  const toggleReadAloud = () => {
    const synth = window.speechSynthesis

    if (isReading) {
      synth.cancel()
      setIsReading(false)
    } else if (utterance) {
      synth.speak(utterance)
      setIsReading(true)
    }
  }

  const toggleMute = () => {
    const synth = window.speechSynthesis
    setIsMuted(!isMuted)

    if (utterance) {
      utterance.volume = isMuted ? 1 : 0

      // If currently reading, restart with new volume
      if (isReading) {
        synth.cancel()
        synth.speak(utterance)
      }
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute" : "Mute"}
        className="relative"
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>

      <Button variant="outline" onClick={toggleReadAloud} className="flex items-center gap-2" aria-pressed={isReading}>
        <VolumeUp className="h-4 w-4" />
        {isReading ? "Stop Reading" : "Read Aloud"}
      </Button>
    </div>
  )
}

