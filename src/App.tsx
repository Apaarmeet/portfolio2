import Background from './components/Background';
import Intro from './components/Intro';
// import ScrollFloat from './components/LibraryComponents/ScrollFloat';
import TargetCursor from './components/LibraryComponents/TargetCursor';
import Loop from './components/Loop';
function App() {

  return (
    <>
    <TargetCursor 
            spinDuration={2}
            hideDefaultCursor={true}
            parallaxOn={true}
          />
    
    <Background/>
    {/* Your content goes here */}
    <Intro/>
    <Loop/>
        {/* <div className=' relative z-10 pointer-events-none h-1/2 ' >
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}>
           <h1 className=' text-neutral-200'>Projects</h1>
        </ScrollFloat>
        </div> */}
    </>
  )
}

export default App
