// function sumPairs(arr, num) {
//     // Create a vari able ANSWER that equals to an empty array
//     let answer = [];

//     // Do a 2 dimensional loop, if LOOP_ONE[i] + LOOP_TWO[j = i + 1] == NUM, append [i_ONE, i_TWO] to the ANSWER
//     for(let i = 0; i < arr.length - 1; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === num) {
//                 answer.push([arr[i], arr[j]])
//             }
//         }
//     }
//     return answer.length > 0 ? answer : 'unable to find pairs'
// };

function sumPairs(arr, num) {
    let seen = new Set();
    let answer = [];

    for(i = 0; i < arr.length; i++) {
        let complement = num - arr[i];
        if (seen.has(complement)) {
            answer.push([complement, arr[i]]);
        }
        seen.add(arr[i])
    }
    return answer.length > 0 ? answer : 'unable to find pairs'
}

module.exports = {sumPairs}