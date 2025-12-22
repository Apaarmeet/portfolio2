
import CurvedLoop from './LibraryComponents/CurvedLoop'

function Loop() {
  return (
    <div className="relative z-10 pointer-events-none -mt-40 ">
        <CurvedLoop 
          marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Node ✦ MongoDB ✦ ExpressJs ✦"
          speed={1.5}
          curveAmount={200}
          direction="left"
          interactive={true}
          className=" text-6xl text-neutral-200  pointer-events-auto"
        />
    </div>
  )
}

export default Loop
