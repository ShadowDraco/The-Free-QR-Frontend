import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import createRandomString from '../lib'

export default function CreateQRForm({ addNewQRData }) {
  const { register, handleSubmit } = useForm()
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)
  const [randomString, setRandomString] = useState()
  const [error, setError] = useState('')

  useEffect(() => {
    setRandomString(createRandomString(8))
  }, [])

  const validateURL = data => {
    return (
      data.url.indexOf('http://') === 0 || data.url.indexOf('https://') === 0
    )
  }

  const postForm = async formData => {
    if (validateURL(formData)) {
      setLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/qr/create`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(formData),
      })
      const body = await response.json()

      setError(body.error)
      if (body.QR !== '') {
        addNewQRData(body)
      }
    } else {
      setError('That is an invalid URL!')
    }
    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit(data => {
        setData(data)
        postForm(data)
      })}
      className=''
    >
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Generate a QR
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            This QR code will keep track of how many times it has been scanned.{' '}
            <strong>Nothing More</strong>! <br></br>
            You can group your QR codes with a password, and make them invisible
            to the public.
          </p>

          {/* URL Field */}
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='url'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                URL
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                    Include https://
                  </span>
                  <input
                    {...register('url')}
                    id='url'
                    name='url'
                    type='url'
                    placeholder='https://youtube.com'
                    autoComplete='off'
                    className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Password Field */}
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Unique Code
              </label>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                <strong>Optionally</strong> set a grouping code for this QR{' '}
                <br></br>- all QRs with the same code are grouped together{' '}
              </p>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                  <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                    Unique:
                  </span>
                  <input
                    {...register('code')}
                    id='code'
                    name='code'
                    type='text'
                    placeholder={randomString}
                    autoComplete='off'
                    className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Protected Field */}
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='protected'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                <strong>Invisible</strong> to everyone?
              </label>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                <strong>Optionally</strong> make this QR code invisible to{' '}
                <em>those who do not have the Unique Code</em>
              </p>
              <div className='mt-2'>
                <div className='flex h-6 items-center'>
                  <input
                    {...register('protected')}
                    id='protected'
                    name='protected'
                    type='checkbox'
                    className='h-4 w-4 rounded border-gray-500 text-indigo-600 focus:ring-indigo-600'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='border-b border-gray-900/10 pb-12'>
        <h2 className='text-base font-semibold leading-7 text-gray-900'>
          What now?
        </h2>
        <p className='mt-1 text-sm leading-6 text-gray-600'>
          Please make sure that you do not use a password from other websites as
          your Unique Code. <br></br>
          Now take your QR code with you everywhere, track its traffic, and see
          how other&apos;s are doing!
          <br></br>
          <strong>
            There are no cookies, no trackers, no identifiers, no nothing.
          </strong>
        </p>
      </div>

      <div className='mt-6 flex items-center justify-startgap-x-6'>
        <button
          type='submit'
          disabled={loading}
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Save
        </button>
        {loading && (
          <div role='status'>
            <svg
              aria-hidden='true'
              className='w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
            <span className='sr-only'>Loading...</span>
          </div>
        )}
        <label className='text-red-500 mx-3'>{error}</label>
      </div>
    </form>
  )
}
