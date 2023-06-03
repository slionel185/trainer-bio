import Image from 'next/image'

interface TrainerCardProps {
    trainer: {
        id: string,
        name: string,
        club: string,
        picture: string | undefined,
        trainingTime: string,
        trainingStyle: string[],
        highlights: string[]
    }
}

const TrainerCard = ({ trainer }: TrainerCardProps) => {

    const capatalize = (word: string) => {
        let lower = word.toLowerCase()
        let chars = lower.split('')
        chars[0].toUpperCase()
        return chars.join('')
    }

    return (
        <div className='card shadow-xl bg-neutral'>
            <figure><Image src={trainer.picture? trainer.picture : '/Stock.png' } alt="PorfilePicture" /></figure>
            <div className="card-body">
                <div className='flex justify-center items-center w-full'>
                    <h2 className='text-3xl'>{trainer.name}</h2>
                </div>
                <div className='flex w-full justify-center items-center gap-2'>
                    <span className='badge badge-md badge-primary'>{trainer.trainingTime === 'BOTH'? 'Morning/Afternoon' : trainer.trainingTime === 'Morning'? 'Morning' : 'Afternoon'}</span>
                    {trainer.trainingStyle.map(style => (
                        <span className='badge badge-md badge-primary' key={style}>{capatalize(style)}</span>
                    ))}
                </div>
                <div className='flex justify-center items-center gap-4 flex-col'>
                    <h1 className='text-lg'>{trainer.highlights[0]}</h1>
                    <h1 className='text-lg'>{trainer.highlights[1]}</h1>
                    <h1 className='text-lg'>{trainer.highlights[2]}</h1>
                </div>
            </div>
        </div>
    )
}

export default TrainerCard