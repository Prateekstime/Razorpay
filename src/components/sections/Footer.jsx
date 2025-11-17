import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
  Products: ["Payments", "Payouts", "Banking", "Loans"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "API Reference", "Support", "Community"],
  Legal: ["Terms", "Privacy", "Security", "Compliance"],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-white pt-24 pb-16 overflow-hidden">

   
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-50px] left-[-50px] w-[350px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

     
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 z-10 relative">

        
          <div>
            <div className="flex items-center gap-3 mb-4">
                <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/2560px-Razorpay_logo.svg.png"
          className="w-28"
          alt="Logo"
        />

            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The world’s most comprehensive payment platform tailored for Indian businesses.  
              Secure. Scalable. Reliable.
            </p>
          </div>

       
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-white text-lg relative">
                {category}
              </h4>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="
                        text-gray-400 hover:text-white 
                        transition-all text-sm relative inline-block
                      "
                    >
                      {link}

                     
                      <span className="
                        absolute left-0 bottom-[-3px] w-0
                        h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 
                        transition-all duration-300
                        group-hover:w-full
                        hover:w-full
                      "></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

     
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">

       
          <div className="text-gray-400 text-sm">
            © {currentYear} Razorpay. All rights reserved.
          </div>

          <div className="flex items-center gap-6">

            {[Twitter, Linkedin, Github, Facebook].map((Icon, i) => (
              <a
                href="#"
                key={i}
                className="
                  text-gray-400 hover:text-white 
                  transition-all 
                  transform hover:scale-110 hover:translate-y-[-2px]
                "
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}

          </div>
        </div>
      </div>
    </footer>
  );
}
