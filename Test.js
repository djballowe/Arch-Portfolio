
var romanToInt = function(s) {
    let sum = 0;
    let charCodeArr = [];
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        charCodeArr.push(code);
        const I = charCodeArr.indexOf(73);
        const V = charCodeArr.indexOf(86);
        const X = charCodeArr.indexOf(88);
        const L = charCodeArr.indexOf(76);
        const C = charCodeArr.indexOf(67);
        const D = charCodeArr.indexOf(68);
        const M = charCodeArr.indexOf(77);
        if(I != -1) {
            charCodeArr[I] = 1;      
        }
        if(V != -1) {
            charCodeArr[V] = 5;
        }
        if(X != -1) {
            charCodeArr[X] = 10;
        }
        if(L != -1) {
            charCodeArr[L] = 50;
        }
        if(C != -1) {
            charCodeArr[C] = 100;
        }
        if(D != -1) {
            charCodeArr[D] = 500;
        }
        if(M != -1) {
            charCodeArr[M] = 1000;
        }
    }
    let total = 0;
    let dif = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (charCodeArr[j] > charCodeArr[i]) {
                dif = charCodeArr[i]*-2;
            } 
        }
    }
    for (let i = 0; i < s.length; i++) {
        sum = (sum + charCodeArr[i]);
        total = sum + dif;
    } 
    return total;      
};

console.log(romanToInt('MCMXCIV'));
