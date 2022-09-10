let numAndRom=[
  {number: 1000 , roman: 'M'},
  {number: 900 , roman: 'CM'},
  {number: 500 , roman: 'D'},
  {number: 400 , roman: 'CD'},
  {number: 100 , roman: 'C'},
  {number: 90 , roman: 'XC'},
  {number: 50 , roman: 'L'},
  {number: 40 , roman: 'XL'},
  {number: 10 , roman: 'X'},
  {number: 9 , roman: 'IX'},
  {number: 5 , roman: 'V'},
  {number: 4 , roman: 'IV'},
  {number: 1 , roman: 'I'}
];

function convert(romanNumber) {
  let romanLetter = '';
  let number = romanNumber;
  for(let i=0; i < numAndRom.length; i++ )
  {
    if(numAndRom[i].number <= number) 
    {
        number = number - numAndRom[i].number ;
        romanLetter = romanLetter + numAndRom[i].roman ;
      i--;  
    } 
  }

  document.getElementById('roo1').value= romanLetter; 

}

document.getElementById('pri').addEventListener('click',function (){
let number=document.getElementById('roo').value;

convert(number);
});