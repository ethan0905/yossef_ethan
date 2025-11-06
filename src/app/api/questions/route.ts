import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const questions = await prisma.medtechQuestion.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    return NextResponse.json(questions)
  } catch (error) {
    console.error('Error fetching questions:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des questions' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { question, answer, category } = body

    if (!question || !answer) {
      return NextResponse.json(
        { error: 'Question et réponse sont obligatoires' },
        { status: 400 }
      )
    }

    const newQuestion = await prisma.medtechQuestion.create({
      data: {
        question,
        answer,
        category: category || null,
      },
    })

    return NextResponse.json(newQuestion, { status: 201 })
  } catch (error) {
    console.error('Error creating question:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création de la question' },
      { status: 500 }
    )
  }
}
