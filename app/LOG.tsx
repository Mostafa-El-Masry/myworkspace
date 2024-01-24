import React from 'react'
import HTML from './pages/HTML'
import CSS from './pages/CSS'
import JAVASCRIPT from './pages/JAVASCRIPT'
import BRIDE from './pages/BRIDE'
import INSULIN from './pages/INSULIN'
import Link from 'next/link'


const LOG = () => {
  return (
    <div>LOG
        <ul>
            <li className='p-4 m-4'>HERE I WANT TO HAVE MY LOG</li>
            <ul>
              <Link href="/pages">LOG</Link>
              <HTML /> 
              <CSS />
              <JAVASCRIPT />
              <BRIDE />
              <INSULIN />
            </ul>
        </ul>
    </div>
  )
}

export default LOG