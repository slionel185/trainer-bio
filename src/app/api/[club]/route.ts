import { prisma } from '@/utils/db'

import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params : { club: string }}) {
    const trainers = await prisma.trainer.findMany({
        where: {
            club: Number(params.club)
        }
    })

    NextResponse.json({
        club: params.club,
        trainers
    })
}