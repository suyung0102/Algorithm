// n만큼 연산
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        // total = total + i;
        total += i;
    }
    return total;
}

// 3번의 연산
function addUpTo2(n) {
    return n*(n + 1)/2;
}

var t1 = performance.now();
addUpTo2(1000000000);
var t2 = performance.now();
console.log(`${(t2 - t1) / 1000} 초`)

// f(n) = 1 과 같이 n이 어떤값이 오던 항상 연산은 정해진 수만큼 하면 최적의 경로 / 1
// f(n) = n 과 같이 n의 값에 따라 n번 반복할 경우 오래걸림 O(n)
// 빅오 : 시간복잡도 / 공간복잡도

/* 
    Big O of object > 빠름
    iusert 0(1)
    remove 0(1)
    search 0(n)
    access 0(1) 
*/

/* 
    push - O(1)
    pop - O(1)
    shift - O(n)
    unshift - O(n)
    concat - O(n)
    slice - O(n)
    splice - O(n)
    sort - O(N * log N)
    foreach / map / filter / reuuce O(n)
*/