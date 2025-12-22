import Shuffle from './components/Shuffle';
import Squares from './components/Squares';
function App() {

  return (
    <>
    {/* Fixed dark bluish background */}
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#151D2E',
      zIndex: -1
    }}>
      <Squares 
      speed={0.5} 
      squareSize={40}
      direction='diagonal' // up, down, left, right, diagonal
      borderColor='#fff'
      hoverFillColor='#da1b1b'
      />
    </div>

    {/* Your content goes here */}
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Add your portfolio content here */}
      <div className=' flex justify-between items-center pointer-events-none bg-transparent'>
            <div className=' h-96 w-96 ml-4 mt-4'>
              <img src="https://i.pinimg.com/1200x/d6/b5/d0/d6b5d0fc4a804f1b3b36774522679d74.jpg" alt="" className=' rounded-full' />
            </div>
            <div className=' '>
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
                    className='text-8xl font-pixelify text-neutral-200'
                    />
            </div>
      </div>
      <span className=' flex justify-center items-center'>
          <div className=' text-neutral-200 text-2xl w-3xl '>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur atque minus voluptas maiores, ipsam consequatur temporibus dolor illo accusamus obcaecati. Aliquam omnis quos, nam, ut, cum consequatur ipsa magni enim necessitatibus nesciunt perferendis! Sapiente a rem cum delectus eos ad unde eligendi eaque, non alias ullam exercitationem, veniam esse distinctio.
          </div>
      </span>
    </div>
    </>
  )
}

export default App
