import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 flex items-center justify-center bg-teal-600 rounded-md">
                  <span className="text-white font-bold">S</span>
                </div>
              </div>
              <span className="text-xl font-bold text-teal-700">Swastya</span>
            </div>
            <p className="text-sm text-gray-500">
              Breaking down complex medical jargon into simple, personalized
              explanations.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-500 hover:text-teal-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/upload"
                  className="text-sm text-gray-500 hover:text-teal-700"
                >
                  Upload
                </Link>
              </li>
              <li>
                <Link
                  href="/results"
                  className="text-sm text-gray-500 hover:text-teal-700"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className="text-sm text-gray-500 hover:text-teal-700"
                >
                  History
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-teal-700"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-teal-700"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-teal-700"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4">Contact</h3>
            {/* <ul className="space-y-2">
              <li className="text-sm text-gray-500">support@medilingua.com</li>
              <li className="text-sm text-gray-500">1-800-MED-LING</li>
            </ul> */}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Swasthya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
