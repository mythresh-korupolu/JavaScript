// Using Date Object
function month(dt)
{
    mlist = [ "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];
    return mlist[dt.getDay()];
}
console.log(month(new Date("2020/2/10")))
var today=new Date();
time=(today.toLocaleTimeString()).split(":")
p=""
    l=time[2].split(" ")
    p+=time[0]+" "+l[1].toUpperCase()+":"+time[1]+":"+l[0]
    
console.log(p);