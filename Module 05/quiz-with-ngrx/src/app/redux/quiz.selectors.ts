import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuizFeatureKey, QuizState } from "./quiz.state";

const state = createFeatureSelector<QuizState>(QuizFeatureKey);

export const allQuestions = createSelector(state, st => st.questions);

export const allAnswers = createSelector(state, st => st.answers);

export const indexOfCurrentQuestion = createSelector(allAnswers, al => al.length);

export const currentQuestion = createSelector(indexOfCurrentQuestion, allQuestions, (index, all) => all[index]);

