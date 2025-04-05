import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  // Sample prescription history data
  const prescriptionHistory = [
    {
      id: "rx-2025-04-02",
      date: "April 2, 2025",
      doctor: "Dr. Sarah Johnson",
      medications: ["Lisinopril 10mg", "Metformin 500mg", "Atorvastatin 20mg"],
      conditions: ["Hypertension", "Type 2 Diabetes", "Hyperlipidemia"],
    },
    {
      id: "rx-2025-01-15",
      date: "January 15, 2025",
      doctor: "Dr. Sarah Johnson",
      medications: ["Lisinopril 5mg", "Metformin 500mg", "Atorvastatin 10mg"],
      conditions: ["Hypertension", "Type 2 Diabetes", "Hyperlipidemia"],
    },
    {
      id: "rx-2024-10-20",
      date: "October 20, 2024",
      doctor: "Dr. Sarah Johnson",
      medications: ["Lisinopril 5mg", "Metformin 500mg"],
      conditions: ["Hypertension", "Type 2 Diabetes"],
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-teal-700 mb-2">Prescription History</h1>
          <p className="text-gray-600">View and access your past prescriptions and analyses</p>
        </div>

        <div className="space-y-6">
          {prescriptionHistory.map((prescription) => (
            <Card key={prescription.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50 pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <CardTitle className="text-xl">{prescription.date}</CardTitle>
                  <Link href={`/results?id=${prescription.id}`}>
                    <Button variant="outline" size="sm" className="text-teal-600 border-teal-600">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Doctor</h3>
                    <p>{prescription.doctor}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Medications</h3>
                    <ul className="space-y-1">
                      {prescription.medications.map((med, index) => (
                        <li key={index} className="flex items-start">
                          <FileText className="h-4 w-4 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                          <span>{med}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Conditions</h3>
                    <div className="flex flex-wrap gap-2">
                      {prescription.conditions.map((condition, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

