import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, FileText, PieChart, Stethoscope } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-700">
            Understand Your Prescriptions with Swasthya
          </h1>
          <p className="text-xl text-gray-600 max-w-[700px] mx-auto">
            Breaking down complex medical jargon into simple, personalized
            explanations you can understand and act on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/upload">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-teal-700">
            How Swasthya Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform simplifies your medical information in three
            easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-teal-100">
            <CardHeader className="text-center">
              <div className="mx-auto bg-teal-50 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <FileText className="h-8 w-8 text-teal-600" />
              </div>
              <CardTitle className="mt-4">Upload Prescription</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Upload your prescription as a PDF or image, or record a voice note
              describing it.
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader className="text-center">
              <div className="mx-auto bg-teal-50 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <Stethoscope className="h-8 w-8 text-teal-600" />
              </div>
              <CardTitle className="mt-4">AI Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Our AI analyzes your prescription and breaks down complex medical
              terms.
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader className="text-center">
              <div className="mx-auto bg-teal-50 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <PieChart className="h-8 w-8 text-teal-600" />
              </div>
              <CardTitle className="mt-4">Simplified Results</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Get easy-to-understand explanations and visualizations of your
              medical information.
            </CardContent>
          </Card>
        </div>

        <div className="text-center pt-8">
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/upload">
              Try It Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-teal-50 rounded-xl p-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-teal-700">
            Why Choose Swasthya
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed to bridge the communication gap between healthcare
            providers and patients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-teal-700">
              Simple Language
            </h3>
            <p className="text-gray-600">
              Medical terms translated into everyday language you can
              understand.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-teal-700">
              Personalized
            </h3>
            <p className="text-gray-600">
              Explanations tailored to your specific prescriptions and medical
              history.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-teal-700">Accessible</h3>
            <p className="text-gray-600">
              Designed for everyone, including read-aloud features for visual
              impairments.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-teal-700">Secure</h3>
            <p className="text-gray-600">
              Your medical data is encrypted and handled with the highest
              security standards.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
