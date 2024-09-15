'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Home() {
  const { register, handleSubmit } = useForm()
  const [data, setData] = useState("")
  const [allQRS, setAllQRS] = useState([])
  const [error, setError] = useState("")
 
  const getAllQRS = useEffect(() => {
    //https://qrcodeserver.onrender.com/qr/all
    //http://localhost:3001/qr/all
    fetch('https://qrcodeserver.onrender.com/qr/all', {}).then(async res => {
      setAllQRS(await res.json())
    })
  }, [])

  const validateURL = () => {
    return data.url.indexOf("http://") === 0 || data.url.indexOf("https://" === 0)
  }

  const postForm = async (data) => {

    //https://qrcodeserver.onrender.com/qr/create
    //http://localhost:3001/qr/create
    console.log(data.url.indexOf("http", 0))
    if (validateURL) {
      console.log(data)
    const response = await fetch(
      'https://qrcodeserver.onrender.com/qr/create',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      }
    )
      const body = await response.json()
      if (body.QR !== '') {
        setAllQRS([...allQRS, body.QR])
      }
    } 
  }


  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <h1>QR CODE Generator and tracker</h1>
        <form
          // action=''
          onSubmit={handleSubmit((data) => {
            setData(JSON.stringify(data))
            postForm(data)
          })}
        >
          <label htmlFor='url'>URL</label>
          <input {...register("url")} type="url" name='url' placeholder='https://youtube.com'/>
          <button
            type='submit'
            style={{ backgroundColor: '#5555ff', color: 'ff' }}
          >
            CREATE QR CODE
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
