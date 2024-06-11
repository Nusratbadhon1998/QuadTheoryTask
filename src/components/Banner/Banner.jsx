import React from 'react'
import Container from '../Container'
import bannerImg from '../../assets/Image1.png'

function Banner() {
  return (
    <Container>
        <div className='flex justify-between px-10 items-center my-20 bg-[#f99f1c] rounded-2xl '>
            <div className='text-white text-left space-y-3 px-9'>
                <h1 className='text-4xl font-semibold'>Deliver Food To Your Door Step!</h1>
                <p className='font-light'>Authentic food, Quick Service,Fast Delivery</p>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>

        </div>
    </Container>
  )
}

export default Banner