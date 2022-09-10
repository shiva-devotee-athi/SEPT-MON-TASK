// var str="surIya";
// var len=str.length;
// var i=0;
// var Vowels=0;
// while(i<len)
// {
//     switch (str[i]) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//         case "A":
//         case "E":
//         case "I":
//         case "O":
//         case "U":
//         Vowels++;
//     } i++;
// }
// console.log(Vowels);
function values1() {
    const alphas=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const vow=['a','e','i','o','u'];
    let result= alphas.filter((ans) => {
    return vow.find((a)=>{ 
        return ans.toLowerCase() === a.toLowerCase() });
});
document.getElementById('print').innerHTML=result;
    
}

function values2() {
    const alphas=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const vow=['a','e','i','o','u'];
    let result= alphas.filter((ans) => {
    return !vow.find((a)=>{ 
        return ans.toLowerCase() === a.toLowerCase() });
});
document.getElementById('print').innerHTML=result;
    
}