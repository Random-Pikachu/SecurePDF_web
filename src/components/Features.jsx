import React from 'react'
import { FaArrowDown } from "react-icons/fa";

const Features = () => {
  return (
    <>
        <div className='text-[#ececec] flex items-center justify-center -mt-[270px]  xsx:-mt-[230px] xs:-mt-[350px] md:-mt-[200px] flex-col gap-3'>
            <h4 className='font-Satoshi font-medium text-[17px] xs:text-[19px]'>Features</h4>
            <FaArrowDown className='animate-bounce' />
            
            
            {/* line & Grid */}
            <div className='relative flex flex-col items-center mt-12'>
                {/* line */}
                <div className='w-[4px] h-[860px] mx:h-[740px] bg-[#fff] opacity-17 z-0'></div>


                {/* icon 1 */}
                <div className='absolute top-[50px] mx:top-[80px]'>
                    <div >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="36" 
                            height="45" 
                            viewBox="0 0 36 45" 
                            fill="#fefefe"
                        >
                            <path d="M35.1675 3.7088C34.9061 3.49734 34.6006 3.34716 34.2735 3.26929C33.9465 3.19141 33.6061 3.18783 33.2775 3.2588C30.8732 3.76267 28.3913 3.76909 25.9844 3.27766C23.5776 2.78623 21.2968 1.80735 19.2825 0.401299C18.9059 0.140013 18.4584 0 18 0C17.5416 0 17.0941 0.140013 16.7175 0.401299C14.7032 1.80735 12.4224 2.78623 10.0156 3.27766C7.60874 3.76909 5.12678 3.76267 2.72251 3.2588C2.39387 3.18783 2.05351 3.19141 1.72644 3.26929C1.39937 3.34716 1.09391 3.49734 0.832512 3.7088C0.571466 3.92056 0.361185 4.18813 0.21712 4.49183C0.0730562 4.79553 -0.00112993 5.12766 1.30083e-05 5.46379V22.2263C-0.00198732 25.4522 0.766752 28.6319 2.24221 31.5007C3.71768 34.3694 5.85716 36.8441 8.4825 38.7188L16.695 44.5688C17.0761 44.8401 17.5322 44.9859 18 44.9859C18.4678 44.9859 18.9239 44.8401 19.305 44.5688L27.5175 38.7188C30.1428 36.8441 32.2823 34.3694 33.7578 31.5007C35.2332 28.6319 36.002 25.4522 36 22.2263V5.46379C36.0011 5.12766 35.9269 4.79553 35.7829 4.49183C35.6388 4.18813 35.4285 3.92056 35.1675 3.7088ZM31.5 22.2263C31.5017 24.7345 30.9044 27.2068 29.7577 29.4376C28.611 31.6683 26.9482 33.5929 24.9075 35.0513L18 39.9788L11.0925 35.0513C9.05184 33.5929 7.38897 31.6683 6.24229 29.4376C5.09561 27.2068 4.49828 24.7345 4.50001 22.2263V8.05129C9.21697 8.45502 13.9411 7.36059 18 4.9238C22.0589 7.36059 26.783 8.45502 31.5 8.05129V22.2263ZM21.465 17.0738L15.4125 23.1488L13.41 21.1238C12.9863 20.7001 12.4117 20.4621 11.8125 20.4621C11.2133 20.4621 10.6387 20.7001 10.215 21.1238C9.79132 21.5475 9.5533 22.1221 9.5533 22.7213C9.5533 23.3205 9.79132 23.8951 10.215 24.3188L13.815 27.9188C14.0242 28.1297 14.273 28.297 14.5472 28.4113C14.8214 28.5255 15.1155 28.5843 15.4125 28.5843C15.7095 28.5843 16.0036 28.5255 16.2778 28.4113C16.552 28.297 16.8008 28.1297 17.01 27.9188L24.75 20.2463C25.1737 19.8226 25.4117 19.248 25.4117 18.6488C25.4117 18.0496 25.1737 17.475 24.75 17.0513C24.3263 16.6276 23.7517 16.3896 23.1525 16.3896C22.5533 16.3896 21.9787 16.6276 21.555 17.0513L21.465 17.0738Z" fill="#FEFEFE"/>
                        </svg>
                    </div>


                    {/* feature 1 */}
                    <div className='absolute top-[60px] left-1/2 transform -translate-x-1/2 mx:-left-[500px] mx:-top-[30px] mx:translate-x-0 w-[350px] xs:w-[400px] mx:w-[450px] h-[150px] bg-[#fefefe]/5 border border-[#fefefe]/20  px-6 mx:px-8 py-6 rounded-2xl backdrop-blur-sm z-10 flex items-center mx:items-end justify-center mx:justify-center flex-col'>
                        <h3 className='font-Montserrat font-bold text-center mx:text-right'>Offline DRM Enforcement</h3>
                        <p className='font-Satoshi font-medium text-center mx:text-right'>All encryption and validation happen locally to ensure full offline protection.</p>
                    </div>
                </div>
                
                {/* icon 2 */}
                <div className='absolute top-[300px] mx:top-[300px]'>
                    <div >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="36" 
                            height="56" 
                            viewBox="0 0 36 56" 
                            fill="#fefefe"
                        >
                            <path d="M18 30.8C17.315 30.79 16.644 31.0415 16.0772 31.5204C15.5105 31.9994 15.0753 32.683 14.8302 33.4791C14.5851 34.2751 14.5419 35.1456 14.7063 35.9732C14.8708 36.8008 15.235 37.5458 15.75 38.108V42C15.75 42.7426 15.9871 43.4548 16.409 43.9799C16.831 44.505 17.4033 44.8 18 44.8C18.5967 44.8 19.169 44.505 19.591 43.9799C20.0129 43.4548 20.25 42.7426 20.25 42V38.108C20.765 37.5458 21.1292 36.8008 21.2937 35.9732C21.4581 35.1456 21.4149 34.2751 21.1698 33.4791C20.9247 32.683 20.4895 31.9994 19.9228 31.5204C19.356 31.0415 18.685 30.79 18 30.8ZM29.25 19.6V14C29.25 10.287 28.0647 6.72601 25.955 4.1005C23.8452 1.475 20.9837 0 18 0C15.0163 0 12.1548 1.475 10.045 4.1005C7.93526 6.72601 6.75 10.287 6.75 14V19.6C4.95979 19.6 3.2429 20.485 1.97703 22.0603C0.711159 23.6356 0 25.7722 0 28V47.6C0 49.8278 0.711159 51.9644 1.97703 53.5397C3.2429 55.115 4.95979 56 6.75 56H29.25C31.0402 56 32.7571 55.115 34.023 53.5397C35.2888 51.9644 36 49.8278 36 47.6V28C36 25.7722 35.2888 23.6356 34.023 22.0603C32.7571 20.485 31.0402 19.6 29.25 19.6ZM11.25 14C11.25 11.7722 11.9612 9.63561 13.227 8.0603C14.4929 6.485 16.2098 5.6 18 5.6C19.7902 5.6 21.5071 6.485 22.773 8.0603C24.0388 9.63561 24.75 11.7722 24.75 14V19.6H11.25V14ZM31.5 47.6C31.5 48.3426 31.2629 49.0548 30.841 49.5799C30.419 50.105 29.8467 50.4 29.25 50.4H6.75C6.15326 50.4 5.58097 50.105 5.15901 49.5799C4.73705 49.0548 4.5 48.3426 4.5 47.6V28C4.5 27.2574 4.73705 26.5452 5.15901 26.0201C5.58097 25.495 6.15326 25.2 6.75 25.2H29.25C29.8467 25.2 30.419 25.495 30.841 26.0201C31.2629 26.5452 31.5 27.2574 31.5 28V47.6Z" fill="#FEFEFE"/>
                            </svg>
                    </div>


                    {/* feature 2 */}
                    <div className='absolute top-[70px] left-1/2 transform -translate-x-1/2 mx:left-[80px] mx:-top-[30px] mx:translate-x-0 w-[350px] xs:w-[400px] mx:w-[450px] h-[150px] bg-[#fefefe]/5 border border-[#fefefe]/20  px-6 mx:px-8 py-6 rounded-2xl backdrop-blur-sm z-10 flex items-center mx:items-start justify-center mx:justify-center flex-col'>
                        <h3 className='font-Montserrat font-bold text-center mx:text-left'>AES Based Encryption</h3>
                        <p className='font-Satoshi font-medium text-center mx:text-left'>AES encryption secures your PDFs, allowing access only when conditions match.</p>
                    </div>

                    <div className="absolute z-0  ">
                        <div className="w-[350px] h-[350px] bg-[#40FCFF] opacity-12 rounded-full blur-[100px]"></div>
                    </div>
                    
                    <div className="absolute z-0  -left-[660px] -top-[200px]">
                        <div className="w-[450px] h-[450px] bg-[#40FCFF] opacity-12 rounded-full blur-[100px]"></div>
                    </div>
                </div>
                
                
                {/* icon 3 */}
                <div className='absolute top-[560px] mx:top-[520px]'>
                    <div >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="36" 
                            height="45" 
                            viewBox="0 0 36 45" 
                            fill="none">
                            <path d="M23.4 20.25H19.8V11.25C19.8 10.6533 19.6104 10.081 19.2728 9.65901C18.9352 9.23705 18.4774 9 18 9C17.5226 9 17.0648 9.23705 16.7272 9.65901C16.3896 10.081 16.2 10.6533 16.2 11.25V22.5C16.2 23.0967 16.3896 23.669 16.7272 24.091C17.0648 24.5129 17.5226 24.75 18 24.75H23.4C23.8774 24.75 24.3352 24.5129 24.6728 24.091C25.0104 23.669 25.2 23.0967 25.2 22.5C25.2 21.9033 25.0104 21.331 24.6728 20.909C24.3352 20.487 23.8774 20.25 23.4 20.25ZM18 0C14.4399 0 10.9598 1.3196 7.99974 3.79193C5.03966 6.26426 2.73255 9.77828 1.37018 13.8896C0.00779915 18.001 -0.348661 22.525 0.345873 26.8895C1.04041 31.2541 2.75474 35.2632 5.27209 38.4099C7.78943 41.5566 10.9967 43.6995 14.4884 44.5677C17.98 45.4358 21.5992 44.9903 24.8883 43.2873C28.1774 41.5843 30.9886 38.7004 32.9665 35.0003C34.9443 31.3002 36 26.9501 36 22.5C35.9947 16.5347 34.0966 10.8156 30.7221 6.59742C27.3476 2.37929 22.7723 0.0066343 18 0ZM18 40.5C15.152 40.5 12.3679 39.4443 9.99979 37.4664C7.63173 35.4886 5.78604 32.6774 4.69614 29.3883C3.60624 26.0992 3.32107 22.48 3.8767 18.9884C4.43233 15.4967 5.80379 12.2894 7.81767 9.77208C9.83154 7.25473 12.3974 5.5404 15.1907 4.84586C17.984 4.15133 20.8794 4.50779 23.5106 5.87017C26.1419 7.23254 28.3909 9.53965 29.9732 12.4997C31.5555 15.4598 32.4 18.9399 32.4 22.5C32.3956 27.2722 30.8771 31.8474 28.1775 35.2219C25.4779 38.5964 21.8178 40.4945 18 40.5Z" fill="#ECECEC"/>
                            </svg>
                    </div>


                    {/* feature 3 */}
                    <div className='absolute top-[60px] left-1/2 transform -translate-x-1/2 mx:-left-[500px] mx:-top-[30px] mx:translate-x-0 w-[350px] xs:w-[400px] mx:w-[450px] h-[150px] bg-[#fefefe]/5 border border-[#fefefe]/20  px-6 mx:px-8 py-6 rounded-2xl backdrop-blur-sm z-10 flex items-center mx:items-end justify-center mx:justify-center flex-col'>
                        <h3 className='font-Montserrat font-bold text-center mx:text-right'>Access Locked by Device & Time</h3>
                        <p className='font-Satoshi font-medium text-center mx:text-right'>Restricts PDF access to specific MAC address and defined time window.</p>
                    </div>
                </div>
                
                
                
                {/* icon 4 */}
                <div className='absolute top-[800px] mx:top-[740px]'>
                    <div >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="36" 
                            height="36" 
                            viewBox="0 0 36 36" 
                            fill="none"
                        >
                            <path d="M18 0C8.05892 0 0 8.05885 0 18C0 27.9412 8.05892 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05892 27.9412 0 18 0ZM27.4433 8.55668C32.1936 13.3069 32.524 20.5674 28.9441 25.6594L10.3406 7.056C15.436 3.47371 22.6957 3.8091 27.4433 8.55668ZM8.55668 27.4433C3.80642 22.6931 3.47603 15.4326 7.05593 10.3406L25.6594 28.944C20.5641 32.5263 13.3043 32.191 8.55668 27.4433Z" fill="#ECECEC"/>
                        </svg>
                    </div>


                    {/* feature 3 */}
                    <div className='absolute top-[60px] left-1/2 transform -translate-x-1/2 mx:left-[80px] mx:-top-[30px] mx:translate-x-0 w-[350px] xs:w-[400px] mx:w-[450px] h-[150px] bg-[#fefefe]/5 border border-[#fefefe]/20  px-6 mx:px-8 py-6 rounded-2xl backdrop-blur-sm z-10 flex items-center mx:items-start justify-center mx:justify-center flex-col'>
                        <h3 className='font-Montserrat font-bold text-center mx:text-left'>Copy & Print Protection
</h3>
                        <p className='font-Satoshi font-medium text-center mx:text-left'>Blocks copying and printing directly within the built-in PDF viewer.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Features