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
        <div className='flex items-center justify-center mt-42 flex-col mb-50'>
            <h1 className='font-Montserrat font-bold text-wt text-[75px]'>Contributors</h1>
            <div className='flex flex-row gap-12'>
                
               {
                customProfile?.map((contributor, idx) => {
                    // <h3 key = {idx}>{contributor.login}</h3>
                    return(
                        <div className='w-[450px] h-[200px] bg-wt/5 border border-wt/20 rounded-2xl px-8 py-6 backdrop-blur-md flex items-center justify-start mt-12'>
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
               
            </div>
        </div>
    </>
  )
}

export default Contributors