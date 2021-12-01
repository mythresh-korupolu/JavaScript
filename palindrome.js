function fun(n)
{
    var s=""
    for(i=0;i<n.length;i++)
    {
        s=n[i]+s
    }
    return s==n
}
console.log(fun("civic"));