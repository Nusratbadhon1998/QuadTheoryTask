import React from 'react'
import Container from '../Container'
import bannerImg from '../../assets/Image1.png'

function Banner() {
  return (
    <Container>
        <div className='hidden lg:flex justify-between px-10 items-center my-20 bg-[#f99f1c] rounded-2xl '>
            <div className='text-white text-left space-y-3 px-9'>
                <h1 className='text-4xl font-semibold'>Deliver Food To Your Door Step!</h1>
                <p className='font-light'>Authentic food, Quick Service,Fast Delivery</p>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>

        </div>
        <div className='flex flex-col gap-5 lg:hidden justify-between items-center my-20  rounded-2xl '>
            <div className=' text-center space-y-3'>
                <h1 className='text-2xl font-semibold'>Deliver Food To Your Door Step!</h1>
                <p className=' text-xs text-gray-700'>Authentic food, Quick Service,Fast Delivery</p>
            </div>
            <div className='bg-[#f99f1c] rounded-3xl '>
                <img className='w-full h-full' src={bannerImg} alt="" />
            </div>

        </div>
    </Container>
  )
}

export default Banner