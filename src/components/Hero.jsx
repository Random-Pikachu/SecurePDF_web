import React from 'react'
import {motion} from 'framer-motion'

const Hero = () => {
    let word = "Download Now"
  return (
    <>
        <div className="relative flex items-center justify-center text-[#ececec] min-h-screen">
            <div className='flex items-center flex-col relative z-10'>

                <div className='flex items-center justify-center relative'>
                    <h1 className='font-Montserrat font-bold  md:text-[130px] z-10 text-[60px] xs:text-[100px]'>SecurePDF</h1>
                    <div className="absolute z-0 top-[55%] left-[65%]">
                        <div className="w-[620px] h-[620px] bg-[#A940FF] opacity-45 rounded-full blur-[130px]"></div>
                    </div>

                    <div className="absolute z-0 top-[-100%] -left-[46%]">
                        <div className="w-[350px] h-[350px] bg-[#A940FF] opacity-30 rounded-full blur-[100px]"></div>
                    </div>
                </div>
                <p className='font-Satoshi font-medium text-[18px] xs:text-[25px] md:text-[30px] md:-mt-10 -mt-4 xs:-mt-7 z-10'>Protect Encrypt and Control your PDFs</p>

                <div className='flex items-center justify-center flex-col xs:flex-row gap-1 xs:gap-6 mt-4 font-medium z-10'>
                    <motion.a
                        initial="initial"
                        whileHover="hovered"
                        href='https://github.com/zorro1107/DRM/releases/download/v1.0.0/app.exe'
                        download="SecurePDF-exe"
                        className="relative block overflow-hidden whitespace-nowrap text-[#000] bg-btn font-Satoshi text-[18px] rounded-lg px-5 py-2.5 me-2 mb-2 h-[48px] w-[160px]"
                        >
                        <motion.span
                            variants={{
                                initial: {y:0},
                                hovered: {y:"-120%"}
                            }}
                            transition={{type:"spring", duration:0.5, stiffness: 300}}
                            className='absolute'

                        >
                            Download Now
                        </motion.span>
                        
                        <motion.span
                            className='absolute'
                            variants={{
                                initial: {y:"120%"},
                                hovered: {y:0}
                            }}
                            transition={{type:"spring", duration:0.5, stiffness: 300}}
                        >
                            Download Now
                        </motion.span>
                    </motion.a>
                    
                    <motion.a
                        initial="initial"
                        whileHover="hovered"
                        href='https://github.com/zorro1107/DRM'
                        target='blank_'
                        className="relative flex items-center justify-center overflow-hidden whitespace-nowrap text-btn bg-wt font-Satoshi text-[18px] rounded-lg px-5 py-2.5 me-2 mb-2 h-[48px] w-[160px] xs:w-[120px] "
                        >
                        <motion.span
                            variants={{
                                initial: {y:0},
                                hovered: {y:"-120%"}
                            }}
                            transition={{type:"spring", duration:0.5, stiffness: 300}}
                            className='absolute'

                        >
                            Visit Repo
                        </motion.span>
                        
                        <motion.span
                            className='absolute'
                            variants={{
                                initial: {y:"120%"},
                                hovered: {y:0}
                            }}
                            transition={{type:"spring", duration:0.5, stiffness: 300}}
                        >
                            Visit Repo
                        </motion.span>
                    </motion.a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero