import {Input} from "https://deno.land/x/cliffy/prompt/mod.ts";
import {Wordle} from "../wordle-core/wordle.ts";
const wordle = new Wordle({password: 'dzban'});

for (let i = 0; i < 5; i++) {
    const guess = await Input.prompt("Pass please?");
    const result: string[] = wordle.solve(guess).scores.map((score) => {
        switch (score.status) {
            case 0: return "🟢";
            case 1: return "🟡";
        }
        return "⚪";
    });
    console.log(result.join(''));
}