"use client"

import { useState } from 'react'

import capatalize from '@/utils/capatalize'
import { useFilterStore } from '@/data/filterStore'

const Filter = ({ filterName }: { filterName: string }) => {

    const { filters, addFilter, removeFilter } = useFilterStore()

    const isFilterActive = (filter: string) => {
        if(filters.includes(filter)) return true
        return false
    }

    const [active, setActive] = useState(isFilterActive(filterName))

    const handleFilterClick = () => {
        if(active) {
            removeFilter(filterName)
            setActive(false)
        } else {
            addFilter(filterName)
            setActive(true)
        }
    }

    return (
        <span onClick={handleFilterClick} className={active ? 'badge badge-lg badge-primary cursor-pointer select-none' : 'select-none badge badge-lg cursor-pointer'}>{capatalize(filterName)}</span>
    )
}

export default Filter