const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="/detect" className="hover:text-blue-400 transition-colors">Detection</a></li>
                <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="/education" className="hover:text-blue-400 transition-colors">Education</a></li>
              </ul>
            </div>
  
            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://www.cancer.org/cancer/melanoma-skin-cancer" className="hover:text-blue-400 transition-colors">Skin Cancer Info</a></li>
                <li><a href="https://www.aad.org/public/diseases/skin-cancer" className="hover:text-blue-400 transition-colors">AAD Resources</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Prevention Tips</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">FAQs</a></li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2"></i>
                  <a href="mailto:contact@skincancer.ai" className="hover:text-blue-400 transition-colors">contact@skincancer.ai</a>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2"></i>
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors text-2xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors text-2xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors text-2xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors text-2xl">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
  
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Skin Cancer Detection. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  