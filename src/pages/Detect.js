import { useState } from 'react';
import ImageUpload from '../components/ImageUpload';

const Detect = () => {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Skin Cancer Detection
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Upload an image of the skin lesion for instant AI-powered analysis
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Sidebar - Guidelines */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Image Guidelines
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Good lighting conditions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Clear, focused image</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Centered on the lesion</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">
                <span className="font-semibold">Note:</span> This tool is for screening purposes only. 
                Always consult a healthcare professional for proper diagnosis.
              </p>
            </div>
          </div>

          {/* Center - Upload Component */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <ImageUpload />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-blue-500 text-2xl mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Privacy Protected</h3>
            <p className="text-gray-600">Your images and data are secure and encrypted</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-blue-500 text-2xl mb-4">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
            <p className="text-gray-600">Get analysis results within seconds</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-blue-500 text-2xl mb-4">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">High Accuracy</h3>
            <p className="text-gray-600">Powered by advanced AI technology</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detect;
