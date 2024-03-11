export interface IQuestion {
    id: number;
    question: string;
    options: {
        option: string,
        points: number
    }[];
}