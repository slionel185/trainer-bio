import TrainerCard from '@/components/TrainerCard'
import FilterContainer from '@/components/FilterContainer'

const trainerObject = {
    id: '88123alwdkb129e81623',
    name: 'Alex Romano',
    club: '08054',
    picture: undefined,
    trainingTime: 'Afternoon',
    trainingStyle: ['CROSSFIT', 'STRENGTH'],
    highlights: [
        'sentence 1',
        'sentence 2',
        'sentence 3'
    ]
}

const page = () => {
    return (
        <div className='bg-base-100 flex flex-col h-screen'>
            <div className="navbar bg-primary">
                <div className='flex-1'>
                    <a className="btn btn-ghost normal-case text-4xl">Meet the Trainers!</a>
                </div>
                
                <div className='flex-none dropdown dropdown-bottom dropdown-end'>
                    <label tabIndex={0} className='btn m-1'>Club</label>
                    <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
                        <li><a>Christiana</a></li>
                    </ul>
                </div>
            </div>

            <FilterContainer />

            <div className='h-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 px-6'>
                <TrainerCard trainer={trainerObject} />
                <TrainerCard trainer={trainerObject} />
                <TrainerCard trainer={trainerObject} />
                <TrainerCard trainer={trainerObject} />
                <TrainerCard trainer={trainerObject} />
                <TrainerCard trainer={trainerObject} />
                <TrainerCard trainer={trainerObject} />
                <TrainerCard trainer={trainerObject} />
                <TrainerCard trainer={trainerObject} />
                <TrainerCard trainer={trainerObject} />
                <TrainerCard trainer={trainerObject} />
            </div>
        </div>
    )
}

export default page