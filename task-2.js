let str = 'Abba Amma Khubi Valo';
let count = 0;
for(let i=0; i<=str.length; i++){
    if(str[i] === 'A' || str[i] === 'a'){
        count++
    }
}
console.log(count);