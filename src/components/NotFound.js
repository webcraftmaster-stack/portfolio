import React from 'react'

export default function NotFound() {
  return (
    <main
      style={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1rem',
      }}
    >
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
    </main>
  )
}
