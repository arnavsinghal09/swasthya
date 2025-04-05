"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Square, Play, Trash2, Send } from "lucide-react"
import { useRouter } from "next/navigation"
import { Progress } from "@/components/ui/progress"

export function VoiceRecorder() {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingProgress, setProcessingProgress] = useState(0)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Create audio element for playback
    audioRef.current = new Audio()

    return () => {
      // Clean up
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorderRef.current = new MediaRecorder(stream)
      audioChunksRef.current = []

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" })
        setAudioBlob(audioBlob)

        if (audioRef.current) {
          const audioUrl = URL.createObjectURL(audioBlob)
          audioRef.current.src = audioUrl
        }

        // Stop all tracks on the stream
        stream.getTracks().forEach((track) => track.stop())
      }

      // Start recording
      mediaRecorderRef.current.start()
      setIsRecording(true)
      setRecordingTime(0)

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)
    } catch (error) {
      console.error("Error accessing microphone:", error)
      alert("Could not access microphone. Please check your permissions.")
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)

      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }

  const playRecording = () => {
    if (audioRef.current && audioBlob) {
      audioRef.current.onended = () => setIsPlaying(false)
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const pausePlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const deleteRecording = () => {
    setAudioBlob(null)
    if (audioRef.current) {
      audioRef.current.src = ""
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleSubmit = () => {
    if (!audioBlob) return

    setIsProcessing(true)

    // Simulate processing progress
    const interval = setInterval(() => {
      setProcessingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    // Simulate API call
    setTimeout(() => {
      clearInterval(interval)
      setProcessingProgress(100)

      // Redirect to results page after "processing"
      setTimeout(() => {
        router.push("/results")
      }, 500)
    }, 2000)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          {!audioBlob ? (
            <>
              <div
                className={`relative w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
                  isRecording ? "bg-red-100" : "bg-teal-100"
                }`}
              >
                <Mic className={`h-10 w-10 ${isRecording ? "text-red-500" : "text-teal-600"}`} />
                {isRecording && (
                  <div className="absolute inset-0 rounded-full border-4 border-red-400 animate-pulse"></div>
                )}
              </div>

              <p className="text-lg font-medium mb-2">
                {isRecording ? "Recording in progress..." : "Record your prescription details"}
              </p>

              {isRecording && <p className="text-2xl font-mono mb-6">{formatTime(recordingTime)}</p>}

              <Button
                type="button"
                onClick={isRecording ? stopRecording : startRecording}
                className={isRecording ? "bg-red-500 hover:bg-red-600" : "bg-teal-600 hover:bg-teal-700"}
              >
                {isRecording ? (
                  <>
                    <Square className="h-4 w-4 mr-2" /> Stop Recording
                  </>
                ) : (
                  <>
                    <Mic className="h-4 w-4 mr-2" /> Start Recording
                  </>
                )}
              </Button>
            </>
          ) : (
            <>
              <div className="w-full mb-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-medium">Voice Recording</p>
                  <p className="text-sm text-gray-500">{formatTime(recordingTime)}</p>
                </div>

                <div className="bg-gray-100 rounded-lg p-4 w-full flex items-center justify-between">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={isPlaying ? pausePlayback : playRecording}
                    className="h-10 w-10"
                  >
                    {isPlaying ? <Square className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>

                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-teal-500 rounded-full"
                        style={{ width: isPlaying ? "100%" : "0", transition: "width 0.1s linear" }}
                      ></div>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={deleteRecording}
                    className="h-10 w-10 text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {isProcessing && (
                <div className="w-full space-y-2 mb-6">
                  <Progress value={processingProgress} className="h-2" />
                  <p className="text-sm text-gray-500 text-right">
                    {processingProgress === 100 ? (
                      <span className="text-teal-600 flex items-center justify-end">Processing complete</span>
                    ) : (
                      `Processing... ${processingProgress}%`
                    )}
                  </p>
                </div>
              )}

              <Button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-teal-600 hover:bg-teal-700"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  "Processing..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" /> Analyze Recording
                  </>
                )}
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

