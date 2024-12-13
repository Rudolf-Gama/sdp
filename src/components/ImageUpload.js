import { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('my_image', selectedImage);

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/submit', formData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col items-center">
          <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">
            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1z" />
            </svg>
            <span className="mt-2 text-base">Select an image</span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {preview && (
          <div className="mt-4">
            <img
              src={preview}
              alt="Preview"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={!selectedImage || loading}
          className={`w-full py-2 px-4 rounded ${
            !selectedImage || loading
              ? 'bg-gray-400'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white font-semibold`}
        >
          {loading ? 'Processing...' : 'Analyze Image'}
        </button>

        {prediction && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Result:</h3>
            <p className="text-xl mt-2">{prediction}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ImageUpload;
