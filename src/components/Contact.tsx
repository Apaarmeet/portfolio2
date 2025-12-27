import FadeContent from './LibraryComponents/FadeContent';

const socialLinks = [
  {
    name: 'GitHub',
    icon: '💻',
    url: 'https://github.com/Apaarmeet',
    handle: '@Apaarmeet',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://www.linkedin.com/in/apaarmeet-singh-67290b28b/',
    handle: 'Apaarmeet Singh',
  },
  {
    name: 'Twitter',
    icon: '🐦',
    url: 'https://x.com/apaarmeet',
    handle: '@apaarmeet',
  },
  {
    name: 'Email',
    icon: '📧',
    url: 'mailto:apaarmeet5000@gmail.com',
    handle: 'apaarmeet5000@gmail.com',
  },
];

function Contact() {
  return (
    <section id="contact" className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center py-20 md:py-32 px-4 md:px-6 pointer-events-none">
      <FadeContent blur={true} duration={1200} ease="ease-out" initialOpacity={0}>
        <div className="max-w-4xl w-full pointer-events-auto text-center">
          {/* Section Title */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-pixelify text-neutral-200 mb-4 cursor-target">
              ✦ Let's Connect ✦
            </h2>
            <p className="text-neutral-200/60 text-sm md:text-lg font-pixelify max-w-2xl mx-auto">
              Open to opportunities, collaborations, and interesting conversations about tech
            </p>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  cursor-target
                  group
                  border border-[#3d3d42]/50
                  rounded-lg p-6 md:p-8
                  bg-[#151D2E]/30 backdrop-blur-sm
                  hover:border-[#3d3d42]
                  hover:bg-[#151D2E]/50
                  transition-all duration-300
                  hover:scale-105
                  relative
                  overflow-hidden
                  text-left
                "
                style={{
                  animationDelay: `${index * 75}ms`,
                }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3d3d42]/0 to-[#3d3d42]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center gap-4">
                  <span className="text-4xl md:text-5xl">{social.icon}</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-pixelify text-neutral-200 mb-1">
                      {social.name}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-200/60">
                      {social.handle}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="
            border border-[#3d3d42]/50
            rounded-lg p-8 md:p-12
            bg-[#151D2E]/30 backdrop-blur-sm
            hover:border-[#3d3d42]
            transition-all duration-300
          ">
            <h3 className="text-xl md:text-2xl font-pixelify text-neutral-200 mb-4">
              Currently seeking opportunities
            </h3>
            <p className="text-neutral-200/60 text-sm md:text-base mb-6">
              Interested in full-stack roles at fast-moving startups building real-time, AI-powered, or cloud-native products
            </p>
            <a
              href="mailto:apaarmeet5000@gmail.com"
              className="
                cursor-target
                inline-block
                px-8 py-3
                border border-[#3d3d42]
                rounded-full
                bg-[#3d3d42]/30
                text-neutral-200
                font-pixelify
                hover:bg-[#3d3d42]/50
                hover:scale-105
                transition-all duration-300
              "
            >
              Get in Touch ✉️
            </a>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-[#3d3d42]/30">
            <p className="text-neutral-200/40 text-sm font-pixelify">
              Built with ❤️ <br/>  Apaarmeet Singh ©
            </p>
          </div>
        </div>
      </FadeContent>
    </section>
  );
}

export default Contact;
