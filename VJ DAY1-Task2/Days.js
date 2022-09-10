function calculate(){
    var d1=document.getElementById('t1').value;
    var d2=document.getElementById('t2').value;
    const day1 = new Date(d1);
    const day2 = new Date(d2);
    const time = Math.abs(day2-day1);
    const days = Math.ceil(time/(1000*60*60*24));
    document.getElementById("date").innerHTML=days;
}