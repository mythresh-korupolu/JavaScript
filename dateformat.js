var n="7-30-2000"
d=n.split("-")
MM=Number(d[0])
DD= Number(d[1])
YYYY=Number(d[2])
if((YYYY%4==0 && MM==2 && DD <=29) ||(YYYY%4!=0 && MM==2 && DD <=28) )
{
    console.log("true")
}
else if((MM%2!=0 && MM<7 && MM<=12 && DD<32)||(MM%2==0 && MM<13 && MM>=7 && DD<32) )
{
console.log("true")
}
else if((MM%2==0 && MM<7 && MM<=12 && DD<31)||(MM%2!=0 && MM<13 && MM>=7 && DD<31))
{
  console.log("true")
}
else
console.log("false")