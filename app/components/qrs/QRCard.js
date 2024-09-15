import React from 'react'

import Image from 'next/image'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'

export default function QRCard({ qr, index }) {
  return (
    <li
      class='flex flex-wrap items-center justify-center'
      key={`${qr.url}/${qr.code}/${index}`}
    >
      <div class='flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg'>
        <svg
          class='absolute bottom-0 left-0 mb-8'
          viewBox='0 0 375 283'
          fill='none'
          style={{ transform: 'scale(1.5)', opacity: 0.1 }}
        >
          <rect
            x='159.52'
            y='175'
            width='152'
            height='152'
            rx='8'
            transform='rotate(-45 159.52 175)'
            fill='white'
          />
          <rect
            y='107.48'
            width='152'
            height='152'
            rx='8'
            transform='rotate(-45 0 107.48)'
            fill='white'
          />
        </svg>
        <div class='relative pt-10 px-10 flex items-center justify-center'>
          <Image
            class='relative w-40'
            src={qr.qr}
            alt=''
            width={100}
            height={100}
          />
        </div>
        <div class='relative text-white px-6 pb-6 mt-6'>
          <span class='block opacity-75 '>{qr.url}</span>
          <div class='flex justify-between'>
            <span class='block font-semibold text-xl'>
              {qr.protected ? (
                <EyeSlashIcon
                  aria-hidden='true'
                  className='mr-1.5 h-5 w-5 flex-shrink-0 text-black-400'
                />
              ) : (
                <EyeIcon
                  aria-hidden='true'
                  className='mr-1.5 h-5 w-5 flex-shrink-0 text-black-400'
                />
              )}
            </span>
            <span class='block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
              {qr.code}
            </span>
          </div>
        </div>
      </div>
    </li>
  )
}
