"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, BarChart, Bar } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function MedicalVisualization() {
  // Sample data for visualizations
  const bloodPressureData = [
    { month: "Nov", systolic: 145, diastolic: 95 },
    { month: "Dec", systolic: 140, diastolic: 92 },
    { month: "Jan", systolic: 138, diastolic: 90 },
    { month: "Feb", systolic: 135, diastolic: 88 },
    { month: "Mar", systolic: 132, diastolic: 85 },
    { month: "Apr", systolic: 130, diastolic: 82 },
  ]

  const bloodSugarData = [
    { month: "Nov", fasting: 160, postMeal: 220 },
    { month: "Dec", fasting: 150, postMeal: 210 },
    { month: "Jan", fasting: 145, postMeal: 200 },
    { month: "Feb", fasting: 140, postMeal: 190 },
    { month: "Mar", fasting: 135, postMeal: 185 },
    { month: "Apr", fasting: 130, postMeal: 180 },
  ]

  const cholesterolData = [
    { month: "Nov", ldl: 160, hdl: 40, total: 240 },
    { month: "Dec", ldl: 150, hdl: 42, total: 230 },
    { month: "Jan", ldl: 140, hdl: 43, total: 220 },
    { month: "Feb", ldl: 130, hdl: 45, total: 210 },
    { month: "Mar", ldl: 120, hdl: 47, total: 200 },
    { month: "Apr", ldl: 110, hdl: 48, total: 190 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="bloodPressure">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="bloodPressure">Blood Pressure</TabsTrigger>
            <TabsTrigger value="bloodSugar">Blood Sugar</TabsTrigger>
            <TabsTrigger value="cholesterol">Cholesterol</TabsTrigger>
          </TabsList>

          <TabsContent value="bloodPressure" className="pt-4">
            <ChartContainer
              config={{
                systolic: {
                  label: "Systolic",
                  color: "hsl(var(--chart-1))",
                },
                diastolic: {
                  label: "Diastolic",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={bloodPressureData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="systolic" stroke="var(--color-systolic)" strokeWidth={2} />
                  <Line type="monotone" dataKey="diastolic" stroke="var(--color-diastolic)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Your blood pressure has been steadily improving over the last 6 months
            </p>
          </TabsContent>

          <TabsContent value="bloodSugar" className="pt-4">
            <ChartContainer
              config={{
                fasting: {
                  label: "Fasting",
                  color: "hsl(var(--chart-1))",
                },
                postMeal: {
                  label: "Post-Meal",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={bloodSugarData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="fasting" stroke="var(--color-fasting)" strokeWidth={2} />
                  <Line type="monotone" dataKey="postMeal" stroke="var(--color-postMeal)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Your blood sugar levels are trending downward, showing good progress
            </p>
          </TabsContent>

          <TabsContent value="cholesterol" className="pt-4">
            <ChartContainer
              config={{
                ldl: {
                  label: "LDL (Bad)",
                  color: "hsl(var(--chart-1))",
                },
                hdl: {
                  label: "HDL (Good)",
                  color: "hsl(var(--chart-2))",
                },
                total: {
                  label: "Total",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cholesterolData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="ldl" fill="var(--color-ldl)" />
                  <Bar dataKey="hdl" fill="var(--color-hdl)" />
                  <Bar dataKey="total" fill="var(--color-total)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Your cholesterol levels are improving with medication and lifestyle changes
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

