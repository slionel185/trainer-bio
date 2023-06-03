import Filter from '@/components/Filter'

export default () => {
    return (
        <div className='flex h-18 py-4 px-6 gap-2'>
            <Filter filterName='MORNING' />
            <Filter filterName='AFTERNOON' />
        </div>
    )
}