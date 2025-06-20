import React, { useEffect, useState } from 'react'



const Contributors = () => {
    const customProfile = [
        {
            "linkedIn": 'https://www.linkedin.com/in/anirudh-navuduri-a1672822b/',
            "role": 'PDF viewer & GUI',
            "avatar_url": "https://avatars.githubusercontent.com/u/122357648?v=4",
            "login": "zorro1107",
            "name": "Anirudh Navuduri"
        },
        
        {
            "linkedIn": 'https://www.linkedin.com/in/sangam21',
            "role": 'File Encryption, Decryption & GUI',
            "avatar_url": "https://avatars.githubusercontent.com/u/75836554?v=4",
            "login": "Random-Pikachu",
            "name": "Sangam Pratap Singh"
        }
    ]


  return (
    <>
        <div className='relative flex items-center justify-center mt-50 mcx:mt-42 mb-3 mcx:mb-1 flex-col'>
            <h1 className='font-Montserrat font-bold text-wt text-[50px] xs:text-[65px] mb-5 mcx:text-[75px] z-10'>Contributors</h1>
            <div className='flex flex-col mcx:flex-row gap-3 mcx:gap-12'>
                
               {
                customProfile?.map((contributor, idx) => {
                    // <h3 key = {idx}>{contributor.login}</h3>
                    return(
                        <div className='w-[350px] xs:w-[450px] h-[180px] xs:h-[200px] bg-wt/5 border border-wt/20 rounded-2xl px-8 py-6 backdrop-blur-md flex items-center justify-start mt-3 mcx:mt-12 z-10'>
                            <div className='flex flex-row items-center justify-center gap-6'>
                                <img src={contributor.avatar_url} alt={contributor.login} className='w-[75px] h-auto rounded-full' />
                                <div className='flex flex-col font-Satoshi text-[16px] text-wt'>
                                    <span>{contributor.login}</span>
                                    <span>{contributor.name}</span>
                                    <span>Role: {contributor.role}</span>
                                    <a href={contributor.linkedIn} className='text-wt font-bold'>LinkedIn</a>
                                    
                                </div>
                            </div>
                        </div>
                    )
                })
               }
               <div className="absolute z-0 left-[560px]">
                        <div className="w-[450px] h-[450px] bg-[#40FCFF] opacity-10 rounded-full blur-[100px]"></div>
                </div>
               
               <div className="absolute z-0 left-[240px] -top-[380px]">
                        <div className="w-[550px] h-[550px] bg-[#40ff89] opacity-10 rounded-full blur-[100px]"></div>
                </div>

            </div>
            
            <h4 className='font-Satoshi text-[18px] font-medium mt-20 mcx:mt-42'>Made with ❤</h4>
               
        </div>
    </>
  )
}

export default Contributors