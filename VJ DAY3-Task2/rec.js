// var insta=document.getElementById('exp').value=x;
function fact(x) {

    if (x === 0) {
        return 1;
    }

    else {
        return x * fact(x - 1);
    }
    
}

const nu= input.innerHTML.Value
    if (nu>=0) {
        const result = fact(nu);
        p.innerHTML= result;
}
else{
    document.getElementById('gold').innerHTML='this is not work';
}

// var go  = document.getElementById('go');
// go.addEventListener ('click', fact, true);

// const number = 3;

// if (number > 0) {
//     let result = fact(number);
//     console.log(`The fact of ${number} is ${result}`);
// }