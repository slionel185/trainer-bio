"use client"

import Filter from '@/components/Filter'

const FilterContainer = () => {

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

        </div>
    )
}

export default FilterContainer