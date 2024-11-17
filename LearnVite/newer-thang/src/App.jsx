import { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { IoIosClose } from "react-icons/io";




function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false)
  const images = [
    {
      index: 0,
      url:'https://images.unsplash.com/photo-1537420327992-d6e192287183?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      index: 1,
      url:'https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      index: 2,
      url:'https://images.unsplash.com/photo-1443456066412-3e3ea69ee37c?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      index: 3,
      url:'https://plus.unsplash.com/premium_photo-1679756099018-32b9fec91606?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      index: 4,
      url:'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      index: 5,
      url:'https://plus.unsplash.com/premium_photo-1669839137417-caaf1a4e00a9?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000)

    return () => clearInterval(interval)
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
        <div onClick={handlePrev}
         className='absolute top-[50%] left-2 tranform -translate-y-1/2 bg-white/90 rounded-[50%] cursor-pointer'>
          <FaArrowLeft size={30} />
        </div>
        <div onClick={handleNext}
         className='absolute top-[50%] right-2 transform -translate-y-1/2 bg-white/90 rounded-[50%] cursor-pointer'>
          <FaArrowRight size={30} />
        </div>
      </div>
      <div className='flex justify-center'>
        {images.map((item) => (
          <div key={item.index}  className='cursor-pointer'>
            {item.index === currentImage ? (
              <GoDotFill 
              onClick={() => setCurrentImage(item.index)} 
              size={28} /> 
            ) : ( 
              <GoDot 
              onClick={() => setCurrentImage(item.index)} 
              size={28} /> 
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
         className='absolute top-5 right-5 bg-white rounded-[50%] cursor-pointer'>
          <IoIosClose size={30} />
        </div>
        <div onClick={handlePrev}
         className='absolute top-[50%] left-2 tranform -translate-y-1/2 bg-white/90 rounded-[50%] cursor-pointer'>
          <FaArrowLeft size={30} />
        </div>
        <div onClick={handleNext}
         className='absolute top-[50%] right-2 transform -translate-y-1/2 bg-white/90 rounded-[50%] cursor-pointer'>
          <FaArrowRight size={30} />
        </div>
        </div>
      )}
    </div>
  )
}

export default App
