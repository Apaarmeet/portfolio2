import FadeContent from './LibraryComponents/FadeContent';

const skills = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'TypeScript', icon: '📘', category: 'Language' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'Socket.IO', icon: '⚡', category: 'Realtime' },
  { name: 'Cloudflare', icon: '☁️', category: 'Cloud' },
  { name: 'Express.js', icon: '🚂', category: 'Backend' },
  { name: 'Next.js', icon: '▲', category: 'Framework' },
  { name: 'Tailwind', icon: '🎨', category: 'CSS' },
  { name: 'Git', icon: '📦', category: 'Tools' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
];

function Skills() {
  return (
    <section id="skills" className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center py-20 md:py-32 px-4 md:px-6 pointer-events-none">
      <FadeContent blur={true} duration={1200} ease="ease-out" initialOpacity={0}>
        <div className="max-w-6xl w-full pointer-events-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-pixelify text-neutral-200 mb-4 cursor-target">
              ✦ Skills & Tech Stack ✦
            </h2>
            <p className="text-neutral-200/60 text-sm md:text-base font-pixelify">
              Technologies I work with 
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="
                  cursor-target
                  group
                  border border-[#3d3d42]/50
                  rounded-lg p-4 md:p-6
                  bg-[#151D2E]/30 backdrop-blur-sm
                  hover:border-[#3d3d42]
                  hover:bg-[#151D2E]/50
                  transition-all duration-300
                  hover:scale-105
                  hover:-translate-y-1
                  relative
                  overflow-hidden
                "
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3d3d42]/0 to-[#3d3d42]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex flex-col items-center gap-2 md:gap-3">
                  <span className="text-3xl md:text-4xl">{skill.icon}</span>
                  <span className="text-neutral-200 font-pixelify text-xs md:text-sm text-center">
                    {skill.name}
                  </span>
                  <span className="text-neutral-200/40 text-[10px] md:text-xs">
                    {skill.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeContent>
    </section>
  );
}

export default Skills;
