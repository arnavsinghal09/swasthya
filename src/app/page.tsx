"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, FileText, PieChart, Stethoscope } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import Carousel from "@/components/ui/carousel";

function CarouselDemo() {
  const slideData = [
    {
      title: "Healthcare Revolution",
      src: "https://mun-website-images.s3.ap-south-1.amazonaws.com/swasthya/image1.jpg",
    },
    {
      title: "AI Analysis",
      src: "https://mun-website-images.s3.ap-south-1.amazonaws.com/swasthya/image2.jpg",
    },
    {
      title: "Understanding Prescriptions",
      src: "https://mun-website-images.s3.ap-south-1.amazonaws.com/swasthya/image3.jpg",
    },
    {
      title: "Reminders and Alerts",
      src: "https://mun-website-images.s3.ap-south-1.amazonaws.com/swasthya/image4.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}

export default function Home() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    howItWorks: false,
    whyChoose: false,
  });

  // Handle scroll visibility for animations
  useEffect(() => {
    setIsVisible({ hero: true, howItWorks: false, whyChoose: false });

    const handleScroll = () => {
      const howItWorksSection = document.getElementById("how-it-works");
      const whyChooseSection = document.getElementById("why-choose");

      if (howItWorksSection) {
        const rect = howItWorksSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible((prev) => ({ ...prev, howItWorks: true }));
        }
      }

      if (whyChooseSection) {
        const rect = whyChooseSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible((prev) => ({ ...prev, whyChoose: true }));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
        }

        .fade-in.visible {
          animation: fadeInUp 0.6s forwards;
        }
        .fade-in.visible.delay-1 {
          animation: fadeInUp 0.6s forwards;
          animation-delay: 0.1s;
        }
        .fade-in.visible.delay-2 {
          animation: fadeInUp 0.6s forwards;
          animation-delay: 0.3s;
        }
        .fade-in.visible.delay-3 {
          animation: fadeInUp 0.6s forwards;
          animation-delay: 0.5s;
        }
        .stagger-item {
          opacity: 0;
          transform: translateY(20px);
        }

        .stagger-item.visible:nth-child(1) {
          animation: fadeInUp 0.6s forwards;
        }

        .stagger-item.visible:nth-child(2) {
          animation: fadeInUp 0.6s 0.2s forwards;
        }

        .stagger-item.visible:nth-child(3) {
          animation: fadeInUp 0.6s 0.4s forwards;
        }

        .stagger-item.visible:nth-child(4) {
          animation: fadeInUp 0.6s 0.6s forwards;
        }

        .icon-container {
          transition: transform 0.3s;
        }

        .icon-container:hover {
          transform: scale(1.1) rotate(5deg);
        }

        .button-hover {
          transition: transform 0.2s;
        }

        .button-hover:hover {
          transform: scale(1.05);
        }

        .card-hover {
          transition: box-shadow 0.3s, transform 0.3s;
        }

        .card-hover:hover {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
        }
      `}</style>

      <section className="relative w-full py-12 md:py-24 lg:py-32 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        {/* <Image
          src="https://mun-website-images.s3.ap-south-1.amazonaws.com/swasthya/image1.jpg"
          className="absolute inset-0 object-cover object-center z-0 rounded-lg"
          alt="Healthcare Background"
          fill
          priority
        /> */}

        {/* White Frosted Glass Overlay */}
        <div className="absolute inset-0  bg-opacity-70 backdrop-blur-md z-10"></div>
        {/* Hero Content */}
        <div className="relative z-20 space-y-4 max-w-3xl px-4">
          <h1
            className={`fade-in text-4xl md:text-5xl lg:text-6xl font-bold text-teal-700 ${
              isVisible.hero ? "visible" : ""
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            Understand Your Prescriptions with Swasthya
          </h1>
          <p
            className={`fade-in text-xl text-gray-600 max-w-[700px] mx-auto ${
              isVisible.hero ? "visible" : ""
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            Breaking down complex medical jargon into simple, personalized
            explanations you can understand and act on.
          </p>
          <div
            className={`fade-in flex flex-col sm:flex-row gap-4 justify-center pt-6 ${
              isVisible.hero ? "visible" : ""
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <div className="button-hover">
              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700"
              >
                <Link href="/upload">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="button-hover">
              <Button asChild variant="outline" size="lg">
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CarouselDemo />
      <section id="how-it-works" className="py-16 space-y-12">
        <div className="text-center space-y-4">
          <h2
            className={`fade-in text-3xl font-bold text-teal-700 ${
              isVisible.howItWorks ? "visible" : ""
            }`}
          >
            How Swasthya Works
          </h2>
          <p
            className={`fade-in text-lg text-gray-600 max-w-2xl mx-auto ${
              isVisible.howItWorks ? "visible" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Our AI-powered platform simplifies your medical information in three
            easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`stagger-item ${isVisible.howItWorks ? "visible" : ""}`}
          >
            <Card className="border-teal-100 h-full card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto bg-teal-50 p-3 rounded-full w-16 h-16 flex items-center justify-center icon-container">
                  <FileText className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="mt-4">Upload Prescription</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Upload your prescription as a PDF or image, or record a voice
                note describing it.
              </CardContent>
            </Card>
          </div>

          <div
            className={`stagger-item ${isVisible.howItWorks ? "visible" : ""}`}
          >
            <Card className="border-teal-100 h-full card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto bg-teal-50 p-3 rounded-full w-16 h-16 flex items-center justify-center icon-container">
                  <Stethoscope className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="mt-4">AI Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Our AI analyzes your prescription and breaks down complex
                medical terms.
              </CardContent>
            </Card>
          </div>

          <div
            className={`stagger-item ${isVisible.howItWorks ? "visible" : ""}`}
          >
            <Card className="border-teal-100 h-full card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto bg-teal-50 p-3 rounded-full w-16 h-16 flex items-center justify-center icon-container">
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
        </div>

        <div
          className={`fade-in text-center pt-8 ${
            isVisible.howItWorks ? "visible" : ""
          }`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="button-hover">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/upload">
                Try It Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="why-choose" className="py-16 bg-teal-50 rounded-xl p-8">
        <div className="text-center space-y-4 mb-12">
          <h2
            className={`fade-in text-3xl font-bold text-teal-700 ${
              isVisible.whyChoose ? "visible" : ""
            }`}
          >
            Why Choose Swasthya
          </h2>
          <p
            className={`fade-in text-lg text-gray-600 max-w-2xl mx-auto ${
              isVisible.whyChoose ? "visible" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Designed to bridge the communication gap between healthcare
            providers and patients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className={`stagger-item ${isVisible.whyChoose ? "visible" : ""}`}
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-teal-700">
                Simple Language
              </h3>
              <p className="text-gray-600">
                Medical terms translated into everyday language you can
                understand.
              </p>
            </div>
          </div>
          <div
            className={`stagger-item ${isVisible.whyChoose ? "visible" : ""}`}
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-teal-700">
                Personalized
              </h3>
              <p className="text-gray-600">
                Explanations tailored to your specific prescriptions and medical
                history.
              </p>
            </div>
          </div>
          <div
            className={`stagger-item ${isVisible.whyChoose ? "visible" : ""}`}
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-teal-700">
                Accessible
              </h3>
              <p className="text-gray-600">
                Designed for everyone, including read-aloud features for visual
                impairments.
              </p>
            </div>
          </div>
          <div
            className={`stagger-item ${isVisible.whyChoose ? "visible" : ""}`}
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-teal-700">Secure</h3>
              <p className="text-gray-600">
                Your medical data is encrypted and handled with the highest
                security standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
