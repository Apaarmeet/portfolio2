
import Header from './Header'
import FadeContent from './LibraryComponents/FadeContent'

function Intro() {
  return (
    <div style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
      {/* Add your portfolio content here */}
      <Header/>
      <div className=' flex justify-center items-center'>
        <FadeContent blur={true} duration={1000} ease="ease-out" initialOpacity={0}>
          <div className=' cursor-target text-neutral-200 md:text-3xl text-2xl p-5 md:p-3 -mt-48 md:-mt-4 md:w-4xl w-screen pointer-events-auto font-pixelify' >
            Full-stack developer specializing in real-time systems, AI-powered interfaces, and cloud-native apps. Strong experience building production-ready projects using React, TypeScript, Socket.IO, Cloudflare Workers, and modern backend architectures. Passionate about shipping fast, solving real problems, and working in high-ownership startup environments.
          </div>
        </FadeContent>
      </div>
    </div>
  )
}

export default Intro
