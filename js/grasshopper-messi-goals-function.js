const instuctions = `Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17`;

let answer = `function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}`;

let arrowAnswer = `const goals = (...a) => a.reduce((s, v) => s + v, 0);`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
