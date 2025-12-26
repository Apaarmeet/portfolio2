import Background from './components/Background';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import TargetCursor from './components/LibraryComponents/TargetCursor';
import Loop from './components/Loop';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubContributions from './components/GitHubContributions';
import Contact from './components/Contact';

function App() {

  return (
    <>
    <TargetCursor 
            spinDuration={2}
            hideDefaultCursor={true}
            parallaxOn={true}
          />
    
    <Background/>
    <Navigation/>
    
    {/* Home Section */}
    <section id="home">
      <Intro/>
      <Loop/>
    </section>
    
    {/* Skills Section */}
    <Skills/>
    
    {/* Projects Section */}
    <Projects/>
    
    {/* GitHub Contributions */}
    <GitHubContributions/>
    
    {/* Contact Section */}
    <Contact/>
    
      
    </>
  )
}

export default App
