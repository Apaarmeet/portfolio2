import Squares from './LibraryComponents/Squares';
function Background() {
  return (
      <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#151D2E',
      zIndex: 0
    }}>
      <Squares 
      speed={0.4} 
      squareSize={40}
      direction='diagonal' // up, down, left, right, diagonal
      borderColor='#3d3d42'
      hoverFillColor='#3d3d42'
      />
    </div>
  )
}

export default Background
