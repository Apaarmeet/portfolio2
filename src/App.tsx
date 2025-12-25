import Background from './components/Background';
import Intro from './components/Intro';
import TargetCursor from './components/LibraryComponents/TargetCursor';
import Loop from './components/Loop';
import GitHubContributions from './components/GitHubContributions';

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
    <GitHubContributions/>
    
      
    </>
  )
}

export default App
