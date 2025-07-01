import { rounds } from "../data/data";


function RoundConfig({letters, words, total}) {
    this.allowedChars = letters;
    this.allowedWords = words;
    this.totalWords = total;
}


export function getRoundConfig(roundNumber) {
    return new RoundConfig(rounds[roundNumber]);
}