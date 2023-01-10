export type ProgressItem = 'Correct' | 'Wrong' | 'Empty';

export interface ProgressViewModel {
    readonly items: ProgressItem[]
}