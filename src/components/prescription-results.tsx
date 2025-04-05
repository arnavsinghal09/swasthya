"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Pill, Stethoscope, AlertTriangle, CalendarClock } from "lucide-react"

interface PrescriptionResultsProps {
  detailedView: boolean
}

export function PrescriptionResults({ detailedView }: PrescriptionResultsProps) {
  // Sample prescription data
  const prescriptionData = {
    diagnosis: {
      simple: "High blood pressure, type 2 diabetes, and high cholesterol.",
      detailed:
        "Essential hypertension (ICD-10: I10), Type 2 diabetes mellitus without complications (ICD-10: E11.9), and Hyperlipidemia (ICD-10: E78.5).",
    },
    medications: [
      {
        name: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        purpose: {
          simple: "Lowers your blood pressure by relaxing your blood vessels.",
          detailed:
            "ACE inhibitor that prevents the conversion of angiotensin I to angiotensin II, a potent vasoconstrictor, thereby reducing peripheral resistance and blood pressure.",
        },
        sideEffects: {
          simple: "Dry cough, dizziness, and headache.",
          detailed:
            "Common adverse effects include persistent dry cough (2-10% of patients), dizziness due to hypotension, headache, fatigue, and rarely angioedema.",
        },
      },
      {
        name: "Metformin",
        dosage: "500mg",
        frequency: "Twice daily with meals",
        purpose: {
          simple: "Helps control your blood sugar levels by improving how your body responds to insulin.",
          detailed:
            "Biguanide antihyperglycemic agent that decreases hepatic glucose production, decreases intestinal absorption of glucose, and improves insulin sensitivity by increasing peripheral glucose uptake and utilization.",
        },
        sideEffects: {
          simple: "Upset stomach, diarrhea, and metallic taste in mouth.",
          detailed:
            "Gastrointestinal disturbances (30-50% of patients) including nausea, diarrhea, abdominal discomfort, metallic taste, and decreased vitamin B12 absorption. Rare but serious: lactic acidosis.",
        },
      },
      {
        name: "Atorvastatin",
        dosage: "20mg",
        frequency: "Once daily at bedtime",
        purpose: {
          simple: "Lowers your cholesterol by reducing the amount your body makes.",
          detailed:
            "HMG-CoA reductase inhibitor that blocks the enzyme in your liver that produces cholesterol, thereby reducing LDL and total cholesterol levels and increasing HDL cholesterol.",
        },
        sideEffects: {
          simple: "Muscle aches, joint pain, and stomach upset.",
          detailed:
            "Myalgia (1-10%), arthralgia, gastrointestinal effects, elevated liver enzymes. Rare but serious: rhabdomyolysis, hepatotoxicity.",
        },
      },
    ],
    precautions: {
      simple: [
        "Take medications as prescribed, even if you feel better.",
        "Monitor your blood pressure and blood sugar regularly.",
        "Follow a heart-healthy diet low in salt, sugar, and saturated fats.",
        "Exercise regularly, aiming for at least 30 minutes most days.",
        "Avoid alcohol with these medications.",
      ],
      detailed: [
        "Maintain strict adherence to medication regimen to ensure therapeutic efficacy.",
        "Monitor blood pressure daily and blood glucose levels before meals and at bedtime.",
        "Follow DASH diet guidelines with sodium restriction (<2300mg/day) and limit carbohydrate intake to 45-60g per meal.",
        "Engage in moderate-intensity aerobic activity for 150 minutes per week, plus resistance training twice weekly.",
        "Alcohol contraindicated with metformin due to increased risk of lactic acidosis and may potentiate hypoglycemic effects.",
      ],
    },
    doctorsAdvice: {
      simple:
        "Continue with your current medications and lifestyle changes. We'll check your progress in 3 months. Call if you experience severe side effects or unusual symptoms.",
      detailed:
        "Continue current pharmacotherapy regimen with reassessment of lipid panel, HbA1c, and renal function in 3 months. Target goals: BP <130/80 mmHg, HbA1c <7.0%, LDL <100 mg/dL. Report any myalgia, persistent GI disturbances, or angioedemic symptoms immediately.",
    },
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Accordion type="single" collapsible className="w-full" defaultValue="diagnosis">
          <AccordionItem value="diagnosis">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <Stethoscope className="h-5 w-5 mr-2 text-teal-600" />
                Diagnosis
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2 px-2">
              <p>{detailedView ? prescriptionData.diagnosis.detailed : prescriptionData.diagnosis.simple}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="medications">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <Pill className="h-5 w-5 mr-2 text-teal-600" />
                Medications
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <div className="space-y-6">
                {prescriptionData.medications.map((med, index) => (
                  <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-teal-700">
                        {med.name} {med.dosage}
                      </h3>
                      <span className="text-sm bg-teal-100 text-teal-800 px-2 py-1 rounded-full">{med.frequency}</span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Purpose:</h4>
                        <p>{detailedView ? med.purpose.detailed : med.purpose.simple}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Side Effects:</h4>
                        <p>{detailedView ? med.sideEffects.detailed : med.sideEffects.simple}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="precautions">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-teal-600" />
                Precautions
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2 px-2">
              <ul className="space-y-2 list-disc pl-5">
                {(detailedView ? prescriptionData.precautions.detailed : prescriptionData.precautions.simple).map(
                  (precaution, index) => (
                    <li key={index}>{precaution}</li>
                  ),
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="doctorsAdvice">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <CalendarClock className="h-5 w-5 mr-2 text-teal-600" />
                Doctor's Advice
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2 px-2">
              <p>{detailedView ? prescriptionData.doctorsAdvice.detailed : prescriptionData.doctorsAdvice.simple}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

