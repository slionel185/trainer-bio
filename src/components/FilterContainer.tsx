import Filter from '@/components/Filter'

const FilterContainer = () => {
    return (
        <div className='flex h-18 py-4 px-6 gap-2'>
            <Filter filterName='MORNING' />
            <Filter filterName='AFTERNOON' />
            <div className="divider divider-horizontal">&</div>
            <Filter filterName='CROSSFIT' />
            <Filter filterName='STRENGTH' />
        </div>
    )
}

export default FilterContainer