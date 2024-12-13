const Education = () => {
    const warningSignsData = [
      { id: 1, sign: "Asymmetry", description: "One half unlike the other half" },
      { id: 2, sign: "Border", description: "Irregular, scalloped or poorly defined border" },
      { id: 3, sign: "Color", description: "Varied from one area to another" },
      { id: 4, sign: "Diameter", description: "Larger than 6mm (about 1/4 inch)" },
      { id: 5, sign: "Evolving", description: "Changing in size, shape, or color" }
    ];
  
    const preventionTips = [
      "Use broad-spectrum sunscreen (SPF 30+)",
      "Seek shade during peak sun hours",
      "Wear protective clothing",
      "Regular skin self-examinations",
      "Annual professional skin checks"
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Warning Signs Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ABCDE Warning Signs</h2>
            <div className="space-y-4">
              {warningSignsData.map((sign) => (
                <div key={sign.id} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">{sign.sign}</h3>
                  <p className="text-gray-600">{sign.description}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Prevention Tips Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Prevention Tips</h2>
            <ul className="space-y-3">
              {preventionTips.map((tip, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {tip}
                </li>
              ))}
            </ul>
  
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">When to See a Doctor</h3>
              <p className="text-blue-600">
                Consult a healthcare provider if you notice any of the ABCDE signs
                or any new or changing skin growths.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Education;