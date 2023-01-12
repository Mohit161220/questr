import Sidebar from '../components/Sidebar';
import Feedbar from '../components/Feedbar';
import Rightscrollbar from '../components/Rightscrollbar';




export default function Home() {
  return (
    <div className=' bg-white min-h-screen'>
    

      <main className=' h-full'>
        <div className='grid grid-cols-10 p-3 mx-2'>
          {/* sidebar */}

          <Sidebar />
          {/* feedsection */}
          <Feedbar />
          {/*  */}

          <Rightscrollbar />
        </div>



      </main>
    </div>
  )
}