import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="relative h-screen flex items-center justify-center text-[#ececec] overflow-x-hidden">
            <div className='flex items-center flex-col relative z-10'>

                <div className='flex items-center justify-center relative'>
                    <h1 className='font-Montserrat font-bold  text-[140px] z-10'>SecurePDF</h1>
                    <div className="absolute z-0 top-[55%] left-[65%]">
                        <div className="w-[548px] h-[548px] bg-[#A940FF] opacity-45 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="absolute z-0 top-[-100%] -left-[46%]">
                        <div className="w-[350px] h-[350px] bg-[#A940FF] opacity-30 rounded-full blur-[100px]"></div>
                    </div>
                </div>
                <p className='font-Satoshi font-medium text-[30px] -mt-10 z-10'>Protect Encrypt and Control your PDFs</p>

                <div className='flex items-center justify-center flex-row gap-6 mt-4 font-medium z-10'>
                    <button type='button' className='text-[#000] bg-btn font-Satoshi text-[18px] rounded-lg px-5 py-2.5 me-2 mb-2'>Download Now</button>
                    
                    <button type='button' className='text-btn bg-[#fefefe] font-Satoshi text-[18px] rounded-lg px-5 py-2.5 me-2 mb-2'>Vist Repo</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero