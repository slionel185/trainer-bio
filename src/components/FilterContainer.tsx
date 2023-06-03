import { useEffect, useState } from 'react'

import Filter from '@/components/Filter'

import { useFilterStore } from '@/data/filterStore'

const FilterContainer = () => {

    const { filters, addFilter, removeFilter } = useFilterStore()

    const [filterInput, setFilterInput] = useState('')

    useEffect(() => {
        console.log(filters)
    }, [filters])

    const handleSubmit = () => {
        addFilter(filterInput)
        setFilterInput('')
    }

    return (
        <div className='flex h-18 py-4 px-6'>
            <div className='flex h-full justify-center items-center gap-3'>
                <Filter filterName='MORNING' />
                <Filter filterName='AFTERNOON' />
            </div>
            
            <div className="divider divider-horizontal"></div>

            <div className='flex h-full justify-center items-center gap-3'>
                <Filter filterName='CROSSFIT' />
                <Filter filterName='STRENGTH' />
            </div>

            <input type='text' value={filterInput} onChange={(e) => setFilterInput(e.target.value)} placeholder='filter' onSubmit={handleSubmit} />
        </div>
    )
}

export default FilterContainer