"use client"

import React, { useEffect } from 'react'

function RenderBaidu() {
    const data = React.use( fetch("https://api.vvhan.com/api/text/joke", { cache: 'no-cache' }).then(res => res.text()));
    useEffect(() => {
        console.log('rendering...')
    }, [])
    return (
        <div>
            来着：{data}
        </div>
    )
}

export default RenderBaidu