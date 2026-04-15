import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'

const Home = () => {

  const [roomcode, setRoomcode] = useState('')
  const navigate = useNavigate()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (roomcode) navigate(`/room/${roomcode}`)
  }

  const handleCreateRoom = () => {
    const randomCode = Math.random().toString(36).substring(2, 8)
    navigate(`/room/${randomCode}`)
  }

  return (
    <div className="min-h-screen bg-white">

      {/*navbar*/}
     <div className='flex justify-between'>

        <div className="flex items-center gap-2 mb-12 p-5">
          <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="5" width="12" height="10" rx="2" fill="white" />
              <path d="M14 8.5L18 6v8l-4-2.5V8.5z" fill="white" />
            </svg>
          </div>
          <span className="text-xl font-semibold  text-gray-900 tracking-tight">
            Nexus<span className="text-emerald-500">Meet</span>
          </span>
        </div> 

        <div>
            <button className='p-5'>  
            <Login/>
            </button>
  
        </div>
     </div>
   

      {/* ── Hero ── */}
      <div className="flex flex-col items-center justify-center px-4 pt-12 pb-16 text-center">

   

        {/* Badge */}
        <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-4 py-1.5 rounded-full border border-emerald-200 mb-6">
          Free for everyone — no downloads needed
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight tracking-tight mb-5">
          Meet anyone,{' '}
          <span className="text-emerald-500">anywhere, instantly</span>
        </h1>

        <p className="text-gray-500 text-base max-w-xl mb-10 leading-relaxed">
          Crystal-clear video calls with one room code. No sign-up. No installs.
          Just share and connect.
        </p>

        {/* Join Card */}
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-16">
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
            <label className="text-xs text-gray-400 text-left">
              Enter a room code to join
            </label>
            <input
              type="text"
              value={roomcode}
              onChange={(e) => setRoomcode(e.target.value)}
              placeholder="chp-jwx123"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm text-center tracking-widest placeholder:tracking-normal placeholder:text-gray-400 focus:outline-none focus:border-emerald-400 transition"
            />
            <button
              type="submit"
              disabled={!roomcode}
              className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed text-white py-3 rounded-xl text-sm font-medium transition"
            >
              Join Room
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-1">
              <hr className="flex-1 border-gray-200" />
              <span className="text-xs text-gray-400">or</span>
              <hr className="flex-1 border-gray-200" />
            </div>

            <button
              type="button"
              onClick={handleCreateRoom}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm hover:bg-gray-50 transition"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
                <path d="M7.5 4.5v6M4.5 7.5h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
              Create a new room
            </button>
          </form>
        </div>
      </div>


      {/* ── Footer ── */}
      <footer className="text-center py-8 text-xs text-gray-400 border-t border-gray-100">
        &copy; 2026 All rights reserved by NexusMeet 
      </footer>

    </div>
  )
}

export default Home