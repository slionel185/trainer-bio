"use client"

import { useState } from 'react'

export default ({ filterName }: { filterName: string }) => {

    const [active, setActive] = useState(false)

    return (
        <span onClick={() => setActive(active => !active)} className={active? 'badge badge-lg badge-primary cursor-pointer' : 'badge badge-lg cursor-pointer'}>{filterName}</span>
    )
}