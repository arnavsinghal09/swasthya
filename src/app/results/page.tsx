"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { PrescriptionResults } from "@/components/prescription-results"
import { MedicalVisualization } from "@/components/medical-visualization"
import { ReadAloudButton } from "@/components/read-aloud-button"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import Link from "next/link"

export default function ResultsPage() {
  const [detailedView, setDetailedView] = useState(false)

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <Link href="/upload" className="text-teal-600 hover:text-teal-700 flex items-center mb-2">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Upload
          </Link>
          <h1 className="text-3xl font-bold text-teal-700">Your Prescription Analysis</h1>
          <p className="text-gray-600">Simplified explanation of your medical information</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch id="detailed-view" checked={detailedView} onCheckedChange={setDetailedView} />
            <Label htmlFor="detailed-view">{detailedView ? "Detailed Medical View" : "Simple View"}</Label>
          </div>

          <ReadAloudButton />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PrescriptionResults detailedView={detailedView} />
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Prescription Date</h3>
                  <p className="font-medium">April 2, 2025</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Doctor</h3>
                  <p className="font-medium">Dr. Sarah Johnson</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Medications</h3>
                  <ul className="list-disc list-inside">
                    <li>Lisinopril 10mg</li>
                    <li>Metformin 500mg</li>
                    <li>Atorvastatin 20mg</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Next Appointment</h3>
                  <p className="font-medium">June 15, 2025</p>
                </div>

                <div className="pt-4 flex flex-col gap-2">
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" /> Download PDF
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Share2 className="h-4 w-4 mr-2" /> Share Results
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8">
            <MedicalVisualization />
          </div>
        </div>
      </div>
    </main>
  )
}

