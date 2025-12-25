import { GitHubCalendar } from 'react-github-calendar';
import FadeContent from './LibraryComponents/FadeContent';

function GitHubContributions() {
  return (
    <div className="relative z-10 w-full flex flex-col items-center justify-center text-neutral-200/70 py-16 md:py-32 px-4 md:px-6 pointer-events-none -mt-32 md:-mt-48">
      <FadeContent blur={true} duration={1200} ease="ease-out" initialOpacity={0}>
        <div className="max-w-4xl w-full pointer-events-auto">
          {/* Title with decorative stars matching your Loop style */}
          <h2 className="text-base md:text-lg font-pixelify text-neutral-200/70 mb-6 md:mb-8 tracking-wide cursor-target flex justify-center">
            ✦ GitHub Contributions ✦
          </h2>
          
          {/* GitHub Calendar with subtle border matching grid */}
          <div className="border border-[#3d3d42]/50 rounded-lg p-3 md:p-6 bg-[#151D2E]/30 backdrop-blur-sm hover:border-[#3d3d42] transition-colors duration-300 cursor-target overflow-x-auto ">
            <a href="https://github.com/Apaarmeet" className="block min-w-max">
              <GitHubCalendar 
                username="apaarmeet"
                colorScheme="dark"
                theme={{
                  light: ['#1a1a1a', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
                blockSize={12}
                blockMargin={4}
                fontSize={14}
              />
            </a>
          </div>
        </div>
      </FadeContent>
    </div>
  );
}

export default GitHubContributions;
