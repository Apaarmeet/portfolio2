import FadeContent from './LibraryComponents/FadeContent';

const projects = [
  {
    title: 'DevSync – Collaborative Code Editor',
    description: 'Real-time collaborative editing with sub-100ms latency using Socket.IO rooms. Integrated Monaco Editor to replicate VS Code-like UX directly in the browser. Designed scalable state sync logic for multi-user editing with live cursor sync.',
    tech: ['React', 'Tailwind', 'Node.js', 'Express', 'Socket.IO', 'Monaco'],
    link: 'devsync.apaarmeet.dev/',
    github: 'https://github.com/Apaarmeet/DevSync',
  },
  {
    title: 'Aura Browse – AI Voice Assistant',
    description: 'Chrome extension for hands-free browser automation using Web Speech API + Google Gemini. Enabled natural language actions like navigation, search, and tab control. Reduced user interaction steps by up to 80% for common browsing tasks.',
    tech: ['React', 'TypeScript', 'Gemini AI', 'Speech API'],
    github: 'https://github.com/Apaarmeet/Aura-Browse',
  },
  {
    title: 'Medium Clone',
    description: 'End-to-end SaaS-style blogging system with type-safe APIs. Deployed backend on Cloudflare Workers for low-latency global performance. Shared Zod schemas between frontend and backend to ensure 100% type consistency with secure JWT auth.',
    tech: ['React', 'TypeScript', 'Cloudflare Workers', 'Hono', 'JWT', 'Zod'],
    link:"medium-clone-nine-mauve.vercel.app",
    github: 'https://github.com/Apaarmeet/Medium-clone',
  },
  {
    title: 'Chatty',
    description: 'Real-time 1:1 chat system with typing indicators and user presence. Implemented WebSocket architecture capable of handling scalable user sessions. Added theme switching and responsive UI with secure backend using JWT and MongoDB.',
    tech: ['React', 'Vite', 'Socket.IO', 'MongoDB', 'Express', 'JWT'],
    link: 'https://fullstack-chat-app-n3mi.onrender.com/',
    github: 'https://github.com/Apaarmeet/fullstack-chat-app',
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
                <div className="absolute inset-0 bg-linear-to-br from-[#3d3d42]/0 via-[#3d3d42]/10 to-[#3d3d42]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
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
                  {(project.link || project.github) && (
                    <div className="flex gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            text-sm font-pixelify
                            text-neutral-200/70 hover:text-neutral-200
                            transition-colors duration-300
                            flex items-center gap-2
                          "
                        >
                          <span>🔗</span> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            text-sm font-pixelify
                            text-neutral-200/70 hover:text-neutral-200
                            transition-colors duration-300
                            flex items-center gap-2
                          "
                        >
                          <span>💻</span> Source Code
                        </a>
                      )}
                    </div>
                  )}
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
