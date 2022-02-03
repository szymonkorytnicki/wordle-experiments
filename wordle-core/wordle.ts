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

class Wordle {
    private password: string[];

    constructor({password}: WordleOptions) {
        this.password = password.split('');
    }

    public solve(input: string): WordleResult {
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

        return {
            input,
            isCorrect: scores.every(score => score.status === 0),
            scores
        };
    }
}

let wordle = new Wordle({password: 'dzban'});

wordle.solve('dzban')
wordle.solve('dbzna')
wordle.solve('szyme')