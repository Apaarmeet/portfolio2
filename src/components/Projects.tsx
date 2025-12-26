import FadeContent from './LibraryComponents/FadeContent';

const projects = [
  {
    title: 'Real-time Chat Application',
    description: 'Built a scalable chat platform with Socket.IO, Redis pub/sub, and React. Supports 10k+ concurrent users with typing indicators and presence detection.',
    tech: ['React', 'Socket.IO', 'Node.js', 'Redis', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    title: 'AI-Powered Code Assistant',
    description: 'Chrome extension integrating GPT-4 for intelligent code suggestions and documentation generation. 50k+ active users.',
    tech: ['TypeScript', 'OpenAI API', 'Chrome APIs', 'Webpack'],
    link: '#',
    github: '#',
  },
  {
    title: 'Cloudflare Workers API',
    description: 'Edge computing API with sub-50ms global response times. Handles 1M+ requests/day with automatic scaling and caching.',
    tech: ['Cloudflare Workers', 'TypeScript', 'D1', 'R2'],
    link: '#',
    github: '#',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Live analytics platform processing 100k+ events per second. Built with WebSockets, time-series DB, and React visualizations.',
    tech: ['Next.js', 'PostgreSQL', 'TimescaleDB', 'Chart.js'],
    link: '#',
    github: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center py-20 md:py-32 px-4 md:px-6 pointer-events-none">
      <FadeContent blur={true} duration={1200} ease="ease-out" initialOpacity={0}>
        <div className="max-w-6xl w-full pointer-events-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-pixelify text-neutral-200 mb-4 cursor-target">
              ✦ Featured Projects ✦
            </h2>
            <p className="text-neutral-200/60 text-sm md:text-base font-pixelify">
              Real-world applications I've built and shipped
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="
                  cursor-target
                  group
                  border border-[#3d3d42]/50
                  rounded-lg p-6 md:p-8
                  bg-[#151D2E]/30 backdrop-blur-sm
                  hover:border-[#3d3d42]
                  hover:bg-[#151D2E]/50
                  transition-all duration-300
                  hover:-translate-y-2
                  relative
                  overflow-hidden
                "
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3d3d42]/0 via-[#3d3d42]/10 to-[#3d3d42]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-pixelify text-neutral-200 mb-3 md:mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-200/70 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          text-xs
                          px-3 py-1
                          rounded-full
                          bg-[#3d3d42]/30
                          text-neutral-200/70
                          border border-[#3d3d42]/50
                          font-pixelify
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="
                        text-sm font-pixelify
                        text-neutral-200/70 hover:text-neutral-200
                        transition-colors duration-300
                        flex items-center gap-2
                      "
                    >
                      <span>🔗</span> Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="
                        text-sm font-pixelify
                        text-neutral-200/70 hover:text-neutral-200
                        transition-colors duration-300
                        flex items-center gap-2
                      "
                    >
                      <span>💻</span> Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeContent>
    </section>
  );
}

export default Projects;
