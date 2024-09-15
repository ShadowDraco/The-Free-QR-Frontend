'use client'
import Image from 'next/image'

export default function Home() {
  const submit = async event => {
    event.preventDefault()

    const body = JSON.stringify({ url: event.target[0].value })
    const response = await fetch('http://localhost:3001/qr/create', {
      method: 'POST',
      body: body,
    })

    console.log(await response.json())
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <h1>QR CODE Generator and tracker</h1>
        <form
          // action='https://qrcodeserver.onrender.com/qr/create'
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
      </div>
    </main>
  )
}
