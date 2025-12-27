import { useState, useEffect } from 'react';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="max-w-xl mx-auto px-4 md:px-6">
        <div className={`
          flex justify-center items-center gap-2 md:gap-8
          border border-[#3d3d42]/50 rounded-full px-4 md:px-8 py-3 md:py-4
          bg-[#151D2E]/80 backdrop-blur-md
          transition-all duration-300 pointer-events-auto
          ${scrolled ? 'shadow-lg shadow-black/20' : ''}
        `}>
          {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="
                cursor-target
                text-neutral-200/70 hover:text-neutral-200
                font-pixelify text-xs md:text-sm
                px-3 md:px-4 py-2
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
  );
}

export default Navigation;
