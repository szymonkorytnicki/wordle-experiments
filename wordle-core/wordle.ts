type WordleOptions = {
    password: string,
};

type WordleResult = {
    input: string,
    isCorrect: boolean,
    scores: Score[]
};

type Score = {
    letter: string,
    status: number
}

export class Wordle {
    private password: string[];
    private history: WordleResult[];

    constructor({password}: WordleOptions) {
        this.password = password.split('');
        this.history = [];
    }

    public solve(input: string): WordleResult {
        if (input.length !== this.password.length) {
            return {
                scores: [],
                isCorrect: false,
                input: ""
            }
        }
    
        let scores = this.createScores(input);
        let result = {
            input,
            isCorrect: scores.every(score => score.status === 0),
            scores
        }
        this.history.push(result);
        return result;
    }

    private createScores(input: string): Score[] {
        const inputArr = input.split('');
        let scores: Score[] = [];

        for (let i = 0; i < inputArr.length; i++) {
            const letter = inputArr[i];
            const index = this.password.indexOf(letter);
            if (index === i) {
                scores.push({
                    letter,
                    status: 0
                });
            } else if (index === -1) {
                scores.push({
                    letter,
                    status: 2
                });
            } else {
                scores.push({
                    letter,
                    status: 1
                });
            }
        }
        return scores;
    }
}