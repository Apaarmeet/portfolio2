
import Shuffle from './LibraryComponents/Shuffle'
function Header() {
  return (
    <div>
      <div className=' flex justify-between items-center'>
            <div className=' h-96 w-96 ml-4 mt-4' style={{ pointerEvents: 'auto' }}>
              <img src="/profile.jpg" alt="" className='cursor-target rounded-full h-72' />
            </div>
            <div className=' pointer-events-auto pr-6 ' >
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
                    className=' cursor-target text-8xl font-pixelify text-neutral-200'
                    />
            </div>
      </div>
    </div>
  )
}

export default Header
