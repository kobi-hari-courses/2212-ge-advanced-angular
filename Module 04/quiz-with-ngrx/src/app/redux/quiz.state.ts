import { AllQuestions } from "../models/all-questions";
import { Answer } from "../models/answer.model";
import { Question } from "../models/question.model";

const QuizFeatureKey = 'quiz';

export interface QuizState {
    readonly questions: Question[], 
    readonly answers: Answer[]
}

export const quizInitialState: QuizState = {
    questions: AllQuestions, 
    answers: []
}