import { PrescriptionUpload } from "@/components/prescription-upload"
import { VoiceRecorder } from "@/components/voice-recorder"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UploadPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold text-teal-700">Upload Your Prescription</h1>
          <p className="text-gray-600">
            Upload a prescription file or record a voice note to get a simplified explanation
          </p>
        </div>

        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="upload">Upload File</TabsTrigger>
            <TabsTrigger value="voice">Voice Recording</TabsTrigger>
          </TabsList>
          <TabsContent value="upload">
            <PrescriptionUpload />
          </TabsContent>
          <TabsContent value="voice">
            <VoiceRecorder />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

