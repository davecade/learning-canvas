import React from 'react'
import Link from 'next/link'

const FirstPost = () => {
  return (
    <>
        <h1>first-post</h1>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
    </>
  )
}

export default FirstPost