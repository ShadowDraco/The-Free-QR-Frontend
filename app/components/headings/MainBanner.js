import React from 'react'
import {
  CurrencyDollarIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  EyeSlashIcon,
  XCircleIcon,
  UserIcon,
} from '@heroicons/react/20/solid'

import { KofiButton } from 'react-kofi-button'

export default function MainBanner() {
  return (
    <div className='lg:flex lg:items-center lg:justify-between w-full mb-12'>
      <div className='min-w-0 flex-1'>
        <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
          <strong>The</strong> Free QR Code Generator
        </h2>
        <div className='mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6'>
          <div className='mt-2 flex items-center text-sm text-gray-600'>
            <CurrencyDollarIcon
              aria-hidden='true'
              className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
            />
            Free
          </div>
          <div className='mt-2 flex items-center text-sm text-gray-600'>
            <CodeBracketIcon
              aria-hidden='true'
              className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
            />
            Open Source
          </div>
          <div className='mt-2 flex items-center text-sm text-gray-600'>
            <ShieldCheckIcon
              aria-hidden='true'
              className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
            />
            Secure
          </div>
          <div className='mt-2 flex items-center text-sm text-gray-600'>
            <EyeSlashIcon
              aria-hidden='true'
              className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
            />
            No Cookies
          </div>
          <div className='mt-2 flex items-center text-sm text-gray-600'>
            <UserIcon
              aria-hidden='true'
              className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
            />
            No Signups
          </div>
          <div className='mt-2 flex items-center text-sm text-gray-600'>
            <XCircleIcon
              aria-hidden='true'
              className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
            />
            Nothing bad
          </div>
        </div>
      </div>
      <div className='mt-2 flex items-center text-sm text-gray-600'>
        <KofiButton
          username='stormyfrolic'
          label='Support Us'
          preset='thin'
          backgroundColor='kofiRed'
        />
      </div>
    </div>
  )
}
