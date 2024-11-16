import { useState } from 'react'

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      index: 0,
      url: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      index: 1,
      url: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      index: 2,
      url: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      index: 3,
      url: 'https://plus.unsplash.com/premium_photo-1669725687137-75f7a1377720?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      index: 4,
      url: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];

  return (
    <div className='bg-slate-200 h-screen flex items-center justify-center'>
      <div className='w-[600px] h-[400px]'>
        <img className='w-full h-full object-cover rounded-[20px]'
        src={images[currentImage].url} 
        alt="" />
      </div>
    </div>

  )
}

export default App
