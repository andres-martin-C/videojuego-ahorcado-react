let words: string[] = [
    'COMPUTADORA',
    'ANIMAL',
    'TELEFONO',
    'HOMBRE',
    'OJO'
];

export function getRandomWord() {
    
    return words[Math.floor(Math.random() * words.length)];
}