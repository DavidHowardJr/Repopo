import { useEffect, useState } from 'react'
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { IoIosClose } from "react-icons/io";




function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false);
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
    {
      index: 5,
      url: 'https://plus.unsplash.com/premium_photo-1666363528954-51382581c51a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000)
  
    return () => clearInterval(interval);
  }, [currentImage])

  const handleNext = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0)
    } else {
      setCurrentImage((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1)
    } else {
      setCurrentImage((prev) => prev - 1)
    }
  }

  return (
    <div className='bg-slate-400 h-screen flex items-center justify-center p-4'>
      <div className='flex flex-col gap-2'>
      <div className='max-w-[600px] h-[400px] relative'>
        <img 
        onClick={() => setOpen(true)}
        className='w-full h-full object-cover rounded-[20px] cursor-pointer aspect-video'
        src={images[currentImage].url} 
        alt="" 
        />
        <div
        onClick={handlePrev} 
        className='absolute top-[50%] left-2 transform -translate-y-1/2 bg-white/90 rounded-[50%] cursor-pointer'>
          <HiOutlineArrowSmLeft size={30} />
        </div>
        <div 
        onClick={handleNext}
        className='absolute top-[50%] right-2 transform -translate-y-1/2 bg-white/90 rounded-[50%] cursor-pointer'>
          <HiOutlineArrowSmRight size={30} />
        </div>
      </div>
      <div className='flex justify-center'>
        {images.map((item) => (
          <div key={item.index} className='cursor-pointer'>
            {item.index === currentImage ? (
              <GoDotFill onClick={() => setCurrentImage(item.index)} size={28} /> 
              ) : (
              <GoDot onClick={() => setCurrentImage(item.index)} size={28} /> 
              )}
          </div>
        ))}
      </div>
      </div>
      {open && (
        <div className='h-screen absolute'>
          <img className='w-screen h-full object-cover'
        src={images[currentImage].url} 
        alt="" 
        />
        <div onClick={() => setOpen(false)} 
        className='absolute top-5 right-5 bg-white/90 rounded-[50%] cursor-pointer'>
          <IoIosClose size={30} />
        </div>
        <div
        onClick={handlePrev} 
        className='absolute top-[50%] left-2 transform -translate-y-1/2 bg-white/90 rounded-[50%] cursor-pointer'>
          <HiOutlineArrowSmLeft size={30} />
        </div>
        <div 
        onClick={handleNext}
        className='absolute top-[50%] right-2 transform -translate-y-1/2 bg-white/90 rounded-[50%] cursor-pointer'>
          <HiOutlineArrowSmRight size={30} />
        </div>
        </div>
      )}
    </div>
  )
}

export default App
