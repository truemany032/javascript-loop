// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;

// Start coding here
let index = 0;
for (let i = 0; scores[i]; i++)
{
    if (scores[i] < scores[index])
        index = i;
}
minScore = scores[index];
console.log(minScore);
