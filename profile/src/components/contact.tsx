import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white"
    >
      <div className="container mx-auto px-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Let's Work Together</h2>
          <p className="text-xl mb-12 text-gray-300">
            I'm always interested in new opportunities and interesting projects.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Mail className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a
                href="mailto:kridsada@example.com"
                className="text-blue-400 hover:text-blue-300"
              >
                kridsada@example.com
              </a>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Phone className="w-8 h-8 mb-4 text-green-400" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a
                href="tel:+66123456789"
                className="text-green-400 hover:text-green-300"
              >
                +66 12 345 6789
              </a>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <MapPin className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <span className="text-purple-400">Bangkok, Thailand</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="#"
              aria-label="GitHub"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
