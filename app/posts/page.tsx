'use client'

import { create } from './actions'
import { useState } from 'react'

export default function Page() {
  const [message, setMessage] = useState<string>('')

  async function onCreate(formData: FormData) {
    const res = await create(formData)
    //是不是很方便呢？这不比TRPC方便？
    setMessage(res.message)
  }

  return (
    <form action={onCreate}>
      <input type="text" name="item" />
      <button type="submit">Add</button>
      <p>{message}</p>
    </form>
  )
}