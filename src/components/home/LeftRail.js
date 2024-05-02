import React from 'react'

function LeftRail() {
  return (
    <div className='py-12 text-4xl font-bold'>
        <h2 className='pb-5'>Latest Updates</h2>
        <ul className='text-base font-normal leading-9 opacity-75'>
            <li className='font-bold'><a href='#'>Editors Pick</a></li>
            <li><a href='#'>Design</a></li>
            <li><a href='#'>Development</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">Content</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Releases</a></li>
        </ul>
    </div>
  )
}

export default LeftRail