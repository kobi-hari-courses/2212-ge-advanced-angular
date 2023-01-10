import { createAction, props } from "@ngrx/store";

export const reset = createAction('[User] Reset');

export const answerCurrentQuestion = createAction('[User] Answer current question', 
        props<{index: number}>())