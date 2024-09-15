'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [allQRS, setAllQRS] = useState([])

  const getAllQRS = useEffect(() => {
    fetch('https://qrcodeserver.onrender.com/qr/all', {}).then(async res => {
      setAllQRS(await res.json())
    })
  }, [])

  const submit = async event => {
    event.preventDefault()

    const body = JSON.stringify({ url: event.target[0].value })
    const response = await fetch(
      'https://qrcodeserver.onrender.com/qr/create',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: body,
      }
    )
    const data = await response.json()
    console.log(data)
    setAllQRS([...allQRS, data])
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <h1>QR CODE Generator and tracker</h1>
        <form
          // action=''
          onSubmit={e => {
            submit(e)
          }}
        >
          <label htmlFor='url'>URL</label>
          <input type='text' name='url' />
          <button
            type='submit'
            style={{ backgroundColor: '#5555ff', color: 'ff' }}
          >
            CREATE CODE
          </button>
        </form>

        <div className='my-5'>
          {allQRS.map((qr, index) => {
            return (
              <div key={`qr-${index}`}>
                <p>{qr.url}</p>
                <p>{qr.count}</p>
                <Image width={300} height={300} src={qr.qr} alt='qr image' />
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
