
import Shuffle from './LibraryComponents/Shuffle'
function Header() {
  return (
    <div>
      <div className=' md:flex md:justify-between md:items-center flex justify-between gap-10 p-4 '>
            <div className=' md:h-52 md:w-52 h-32 w-32 pointer-events-auto -ml-1'>
              <img src="/profile.jpg" alt="" className='cursor-target rounded-full md:pl-1' />
            </div>
            <div className='  pointer-events-auto md:p-2 md:-mt-4 pt-9 pr-4 ' >
                <Shuffle
                    text="Apaarmeet"
                    shuffleDirection="right"
                    duration={0.50}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce={true}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                    tag={"span"}
                    className='  cursor-target sm:text-4xl  md:text-7xl font-pixelify text-neutral-200'
                    />
            </div>
      </div>
    </div>
  )
}

export default Header
