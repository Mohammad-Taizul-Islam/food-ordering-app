import React from 'react'
import Image from 'next/image'

const HomeMenu = () => {
    return (
        <section>
            <div className='h-48 w-48 absolute -left-12'>
                <Image src={'/sallad1.png'} layout={'fill'} objectFit={'contain'} alt='sallad' />
            </div>

            <div className='h-48 w-48 absolute -right-12'>
                <Image src={'/sallad2.png'} layout={'fill'} objectFit={'contain'} alt='sallad' />
            </div>
            <div className='text-center'>
                <h3>check out</h3>
                <h2 className='text-primary font-semibold text-2xl'>MENU</h2>
            </div>
        </section>
    )
}

export default HomeMenu