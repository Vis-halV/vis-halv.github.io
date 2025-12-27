import { useState } from 'react'

function App() {

  return (
    <>
      <div className="min-h-screen bg-black text-white p-6 space-y-10">

      <p style={{ fontWeight: 300 }}>Inter Light</p>
      <p style={{ fontWeight: 400 }}>Inter Regular</p>
      <p style={{ fontWeight: 600 }}>Inter SemiBold</p>
      <p style={{ fontWeight: 800 }}>Inter ExtraBold</p>


      {/* Baseline */}
      <section>
        <p className="text-gray-400 text-sm mb-2">Baseline (system font)</p>
        <p>
          The quick brown fox jumps over the lazy dog 0123456789
        </p>
      </section>

      {/* JetBrains Mono Regular */}
      <section>
        <p className="text-gray-400 text-sm mb-2">
          JetBrains Mono — Regular
        </p>
        <p className="jet-mono-regular">
          The quick brown fox jumps over the lazy dog 0123456789
        </p>
      </section>

      {/* Departure Mono Display */}
      <section>
        <p className="text-gray-400 text-sm mb-2">
          Departure Mono — Display
        </p>
        <h1 className="departure-mono">
          UI DIRECTOR PORTFOLIO
        </h1>
      </section>

      {/* Scale Stress Test */}
      <section className="space-y-4">
        <p className="text-gray-400 text-sm">Clamp stress test</p>

        <h1 className="departure-mono">Design</h1>
        <h1 className="departure-mono">Direction</h1>
        <h1 className="departure-mono">Systems</h1>

        <p className="jet-mono-regular max-w-xl text-gray-300">
          Resize the viewport from mobile to desktop. Font size should
          scale smoothly with no sudden jumps, clipping, or awkward
          line breaks.
        </p>
      </section>

    </div>  
    </>
  )
}

export default App
