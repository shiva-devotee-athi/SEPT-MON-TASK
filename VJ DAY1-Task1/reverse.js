document.getElementById('Enter').onclick = function()
{
    let a = document.getElementById('Rnumber').value;
    let b, sum = 0;
    while(a > 0)
    {
      b = a % 10;
      sum = sum * 10 + b;
      a = parseInt(a / 10);
    }
    document.getElementById('print').innerHTML=(sum);
}