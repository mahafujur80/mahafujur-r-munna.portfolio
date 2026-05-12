import Link from "next/link"
import { FaHome} from "react-icons/fa"

export default function NotFound() {
  return (
    <div className="min-h-screen mt-20 flex items-center justify-center px-4 overflow-hidden relative">
      
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse top-20 -left-48"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000 bottom-20 -right-48"></div>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        
        {/* 404 Number with Animation */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate__animated animate__jackInTheBox ">
            404
          </h1>
          <div className="absolute inset-0 blur-2xl bg-purple-500/20 rounded-full -z-10"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm mb-4">
            Page Not Found
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! You seem lost
          </h2>
          <p className="text-gray-300 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
      
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 
                     rounded-lg font-semibold text-white hover:from-purple-600 hover:to-purple-700 
                     transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30"
          >
            <FaHome />
            Back to Home
          </Link>
        

      </div>
    </div>
  )
}