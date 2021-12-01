//Remove the Repeated Elements
n="thequickbrownfoxjumpsoverthelazydog"
function fun(n)
{
    p="";
    for(i=0;i<n.length;i++)
    {
        c=0;
        for(j=0;j<p.length;j++)
        {
            if(p[j]==n[i])
            {
                c++;
            }
        }
        if(c<1)
        {
            p+=n[i];
        }
    }
    return p;
}
console.log(fun(n));