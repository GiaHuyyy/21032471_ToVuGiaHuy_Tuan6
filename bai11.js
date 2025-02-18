
const game1 = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski"
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze"
        ]
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        x: 3.25,
        team1: 1.33,
        team2: 6.5
    }
};

const printGoal = () => { };

let len = game.scored.length;
for (let index = 0; index < len; index++) {
    const element = game.scored[index];
    console.log(`Goal ${index + 1}: ${element}`);
}
printGoal();

const odds = Object.values(game.odds);

const avgodd = () => {
    let len = game.scored.length;
    let sum = 0;
    for (const odd of odds) {
        sum += odd;
    }
    return sum / len;
};

console.log(`Average odd: ${avgodd()}`);
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
const scorers = game.scored.reduce((acc, player) => {
    //acc = {}, cur = ptMang
    acc[player] = (acc[player] || 0) + 1; // acc["Lewandowski"] = 1.
    return acc;
}, {});
console.log(scorers);