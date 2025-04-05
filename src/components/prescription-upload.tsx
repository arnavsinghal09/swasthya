"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileUp, X, FileText, Check } from "lucide-react"
import { useRouter } from "next/navigation"
import { Progress } from "@/components/ui/progress"

export function PrescriptionUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const router = useRouter()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      handleFileSelection(droppedFile)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelection(e.target.files[0])
    }
  }

  const handleFileSelection = (selectedFile: File) => {
    // Check if file is PDF or image
    const fileType = selectedFile.type
    if (fileType.includes("pdf") || fileType.includes("image")) {
      setFile(selectedFile)
    } else {
      alert("Please upload a PDF or image file")
    }
  }

  const removeFile = () => {
    setFile(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) return

    setIsUploading(true)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
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
      setUploadProgress(100)

      // Redirect to results page after "processing"
      setTimeout(() => {
        router.push("/results")
      }, 500)
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card
        className={`border-2 border-dashed transition-colors ${
          isDragging ? "border-teal-500 bg-teal-50" : "border-gray-200"
        }`}
      >
        <CardContent className="p-6">
          {!file ? (
            <div
              className="flex flex-col items-center justify-center py-10"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <FileUp className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">Drag and drop your prescription</h3>
              <p className="text-sm text-gray-500 mb-4 text-center">Upload a PDF or image of your prescription</p>
              <Button type="button" variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                Browse Files
              </Button>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".pdf,image/*"
                onChange={handleFileChange}
              />
            </div>
          ) : (
            <div className="py-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-md mr-3">
                    <FileText className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <Button type="button" variant="ghost" size="icon" onClick={removeFile} disabled={isUploading}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {isUploading && (
                <div className="space-y-2 mb-4">
                  <Progress value={uploadProgress} className="h-2" />
                  <p className="text-sm text-gray-500 text-right">
                    {uploadProgress === 100 ? (
                      <span className="text-teal-600 flex items-center justify-end">
                        <Check className="h-4 w-4 mr-1" /> Upload complete
                      </span>
                    ) : (
                      `Uploading... ${uploadProgress}%`
                    )}
                  </p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="mt-6 text-center">
        <Button
          type="submit"
          className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700"
          disabled={!file || isUploading}
        >
          {isUploading ? "Processing..." : "Analyze Prescription"}
        </Button>
      </div>
    </form>
  )
}

