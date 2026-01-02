import { useState, useEffect } from 'react';

export function MobileMenuButton({ onToggle, isOpen }: { onToggle: () => void; isOpen: boolean }) {
  return (
    <button
      onClick={onToggle}
      className="lg:hidden cursor-target pointer-events-auto p-2 rounded-lg hover:bg-[#3d3d42]/30 transition-all duration-300"
      aria-label="Toggle menu"
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <span className={`block h-0.5 bg-neutral-200 rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block h-0.5 bg-neutral-200 rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block h-0.5 bg-neutral-200 rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </div>
    </button>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'resume') {
      // Open resume in new tab - update this URL to your actual resume link
      window.open('https://drive.google.com/file/d/1pOc5q7jtaeeiLYQFhw_23DyBk_UNZXNg/view?usp=sharing', '_blank');
      setMobileMenuOpen(false);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Fixed at top */}
      <nav 
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-xl mx-auto px-4 md:px-6">
          <div className={`
            flex justify-center items-center gap-7
            border border-[#3d3d42]/50 rounded-full px-8 py-4
            bg-[#151D2E]/80 backdrop-blur-md
            transition-all duration-300 pointer-events-auto
            ${scrolled ? 'shadow-lg shadow-black/20' : ''}
          `}>
            {['Home', 'Skills', 'Projects', 'Contact', 'Resume'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="
                  cursor-target
                  text-neutral-200/70 hover:text-neutral-200
                  font-pixelify text-sm
                  px-4 py-2
                  rounded-full
                  transition-all duration-300
                  hover:bg-[#3d3d42]/30
                  relative
                  group
                "
              >
                {item}
                <span className="
                  absolute bottom-0 left-1/2 -translate-x-1/2
                  w-0 h-[2px] bg-neutral-200
                  transition-all duration-300
                  group-hover:w-3/4
                "></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button - Positioned in header via export */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <MobileMenuButton onToggle={() => setMobileMenuOpen(!mobileMenuOpen)} isOpen={mobileMenuOpen} />
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          lg:hidden fixed top-16 left-4 right-4 z-40
          transform transition-all duration-300
          ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <div className="
          border border-[#3d3d42]/50 rounded-lg
          bg-[#151D2E]/95 backdrop-blur-md
          shadow-lg shadow-black/20
          overflow-hidden
        ">
          {['Home', 'Skills', 'Projects', 'Contact' , 'Resume'].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="
                w-full
                cursor-target
                text-neutral-200/70 hover:text-neutral-200
                font-pixelify text-sm
                px-6 py-4
                transition-all duration-300
                hover:bg-[#3d3d42]/30
                border-b border-[#3d3d42]/30 last:border-b-0
                text-left
              "
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navigation;
