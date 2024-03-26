import React from 'react'
import RenderBaidu from '../components/RenderBaidu'

async function page() {
    const data = await fetch('https://api.uomg.com/api/rand.qinghua', { next: { revalidate: 60 } }).then(res => res.json())
    return (
        <RenderBaidu txt={data.content} />
    )
}

export default page
