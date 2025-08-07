export default function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-4 lg:px-8 py-8">
      {/* Separator Line */}
      <div className="w-full h-px bg-black/60 mb-8"></div>
      
      {/* Footer Content */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        {/* Contact Information */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold font-urbanist text-black">
            Contact The Team
          </h3>
          <a 
            href="mailto:uxport80@gmail.com" 
            className="text-xl font-urbanist text-black hover:text-gray-600 transition-colors"
          >
            uxport80@gmail.com
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-4 opacity-60">
          {/* YouTube */}
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/5ffcbd016e338dd367e9930c2fafdc05e3364d86?width=96" 
              alt="YouTube" 
              className="w-12 h-12"
            />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/3803226bb03f83d0076ad63c4cb1b0b319327d12?width=80" 
              alt="LinkedIn" 
              className="w-10 h-10"
            />
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/1d67f27b5f5a675a64a77a8472ab2882a3cc5564?width=80" 
              alt="Instagram" 
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
