import React from 'react'

const SideNav = () => {
  return (
    <div className=' w-[400px] h-screen bg-[#608BC1] flex justify-center items-center'>
        <ul >
            <li><a className='text-[#000] text-[24px] ' href="">Keyboard</a></li>
            <li><a className='text-[#000] text-[24px] ' href="">Mouse</a></li>
            <li><a className='text-[#000] text-[24px] ' href="">HeadPhone</a></li>
        </ul>
    </div>
  )
}

export default SideNav