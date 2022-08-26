/*function pickingNumbers(a) {
    a.sort((a, b) => a - b);
    console.log(a)
    let i = 0, j = 1;

    while (i < a.length && j < a.length) {
        if (Math.abs(a[i] - a[j]) > 1) {
            i++;
            j++;
        } else {
            j++
        }
    }

    console.log(Math.abs(i - j))

    return Math.abs(i - j);
}

pickingNumbers([14 ,18 ,17 ,10 ,9 ,20 ,4 ,13 ,19 ,19 ,8 ,15 ,15 ,17 ,6 ,5 ,15 ,12 ,18 ,2 ,18 ,7 ,20 ,8 ,2 ,8 ,11 ,2 ,16 ,2 ,12 ,9 ,3 ,6 ,9 ,9 ,13 ,7 ,4 ,6 ,19 ,7 ,2 ,4 ,3 ,4 ,14 ,3 ,4 ,9 ,17 ,9 ,4 ,20 ,10 ,16 ,12 ,1 ,16 ,4 ,15 ,15 ,9 ,13 ,6 ,3 ,8 ,4 ,7 ,14 ,16 ,18 ,20 ,11 ,20 ,14 ,20 ,12 ,15 ,4 ,5 ,10 ,10 ,20 ,11 ,18 ,5 ,20 ,13 ,4 ,18 ,1 ,14 ,3 ,20 ,19 ,14 ,2 ,5 ,13]);
*/

// function climbingLeaderboard(ranked, player) {
//     for (let i = 0; i < player.length; i++) {
//         let rankedCopy = [...new Set([...ranked, player[i]])];
//         rankedCopy.sort((a, b) => b-a);
//         console.log(rankedCopy.findIndex(value => value === player[i]) + 1);
//     }
// }

// function climbingLeaderboard(ranked, player) {
//     let res = [];
//     ranked = [...new Set(ranked)];

//     for (let i = 0; i < player.length; i++) {
//         res.push(sortedIndex(ranked, player[i]) + 1)
//     }

//     return res;
// }

// function sortedIndex(array, value) {
//     var low = 0,
//         high = array.length;

//     while (low < high) {
//         var mid = (low + high) >>> 1;
//         console.log("first: ", mid)
//         if (array[mid] > value) low = mid + 1;
//         else high = mid;
//     }
//     return low;
// }


// [100, 100, 50, 40, 40, 20, 10]
// [5, 25, 50, 120]

//console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))

// function angryProfessor(k, a) {
//     let onTimeCounter = 0;

//     for (let i = 0; i < a.length; i++) {
//         if (a[i] <= 0) onTimeCounter += 1;
//     }
//     console.log("first: ", onTimeCounter)
//     return k <= onTimeCounter ? "NO" : "YES";
// }

// console.log(angryProfessor(3, [-1, -3, 4, 2]))
// console.log(angryProfessor(2, [0, -1, 2, 1]))

// function extraLongFactorials(n) {
//     let fact = BigInt(1);
//     for (let i = n; i > 0; i--) {
//         fact *= BigInt(i);
//     }

//     return BigInt.asUintN(fact);
// }

//console.log(extraLongFactorials(25) === BigInt(15511210043330985984000000))

// function appendAndDelete(s, t, k) {
//     let min = s, max = t, i = 0, diff = false;

//     if(s.length > t.length) {
//         min = t, max = s;
//     }

//     for(i; i < max.length; i++) {
//         if(min[i] !== max[i]) {
//             diff = true;
//             break;
//         }
//     }

//     if(!diff && k > 2*min.length || diff && i <= min.length) {
//         return 'Yes';
//     }

//     if(i >= min.length) {
//         k -= max.length - min.length;
//         if(k === 0)
//             return 'Yes';
//         else return 'No'
//     }
// }

// console.log(appendAndDelete('qwerasdf', 'qwerbsdf', 6))

// abbaaaaa
// abaaaaaa

// aaaaaaa
// aaa

// var twoSum = function(numbers, target) {
//     let start = 0, end = numbers.length - 1;
    
//     while(start < end) {
//         let sum = numbers[start] + numbers[end];
        
//         if(sum === target) return [start + 1, end + 1]
        
//         else if(target < sum) end--;
//         else start ++;
//     }

//     return [];
// };

// const twoSum = (nums, target) => {
//     let compMap = new Map();
    
//     for(let i = 0; i < nums.length; i++) {
//         let comp = target - nums[i];
        
//         if(compMap.get(comp) !== undefined) {
//             return [i, compMap.get(comp)];
//         }
        
//         compMap.set(nums[i], i);
//     }
// }

// console.log(twoSum([2,7,11,15], 9))

// var checkIfExist = function(arr) {
//     arr.sort((a,b) => a-b);
    
//     for(let i = 0; i < arr.length; i++) {
//         let arrCp = [...arr];
//         arrCp.splice(i,1);
//         let setDev2 = new Set(arrCp);
//         if(setDev2.has(arr[i]/2)) return true;
//     }
    
//     return false
// };

// console.log(checkIfExist([-2,0,10,-19,4,6,-8]));

// var isAnagram = function(s, t) {
//     if(s.length !== t.length) 
//         return false;
    
//     s = s.split('').sort();
//     t = t.split('').sort();
    
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] !== t[i]) 
//             return false;
//     }
    
//     return true;
// };

// console.log(isAnagram("anagram","nagaram"))

// var topKFrequent = function(nums, k) {
//     let numberFreq = {};
    
//     for(let i = 0; i < nums.length; i++) {
//         if(numberFreq[nums[i]] !== undefined)
//             numberFreq[nums[i]] += 1;
//         else
//             numberFreq[nums[i]] = 1;
//     }
    
//    return Object.entries(numberFreq).sort((a,b) => b[1]-a[1]).flatMap(item => parseInt(item[0])).slice(0, k);

// };

// console.log(topKFrequent([1,1,1,2,2,3], 2))

// var productExceptSelf = function(nums) {
//     let result = new Array(nums.length).fill(1);
    
//     let factor = 1;
//     for(let i = 0; i < nums.length; i++) {
//         result[i] = factor;
//         factor *= nums[i]
//     }
//     factor = 1;
//     for(let i = nums.length-1; i > -1; i--) {
//         result[i] *= factor;
//         factor *= nums[i]
//     }
    
//     return result
// };

// console.log(productExceptSelf([1,2,3,4]));

var isValidSudoku = function(board) {
    for(let i = 0; i < board.length; i++) {
        let visited = {};
        for(let j = 0; j < board[i].length; j++){
            if(visited[board[i][j]] != undefined)
                return false;
            else if(board[i][j] !== ".") {
                visited[board[i][j]] = true;
            }
        }
    }
    
    for(let i = 0; i < board.length; i++) {
        let visited = {};
        for(let j = 0; j < board[i].length; j++){
            if(visited[board[j][i]] != undefined)
                return false;
            else if(board[i][j] !== ".") {
                visited[board[i][j]] = true;
            }
        }
    }
    
    return true;
};

console.log(first)