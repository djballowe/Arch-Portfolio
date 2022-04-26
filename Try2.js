function values(v) {
    switch (v) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}

function convertToNummy(roman) {
    if (roman == null) return -1;
    let num = values(roman.charAt(0));
    let compare, one;
    
    for (let i = 1; i < roman.length; i++) {
        one = values(roman.charAt(i));
        compare = values(roman[i-1]);
        if (one <= compare) {
            num = num + one;
        } else {
            num = num - compare*2 + one;
        }
    }
    return num;
}




console.log(convertToNummy('MCMXCIV'));