import { Question } from "../models/question.model";
import { QuizState } from "./quiz.state";

export function currentQuestionIndex(state: QuizState): number {
    return state.answers.length;
}

export function currentQuestion(state: QuizState): Question {
    return state.questions[currentQuestionIndex(state)];
}

export function isCorrect(state: QuizState, answerIndex: number): boolean {
    return currentQuestion(state).correctAnswer === answerIndex;
}