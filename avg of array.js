let i,n,x=0,a=[];
n=prompt("Total elements?");
n=parseInt(n);
for(i=0;i<n;i++)
{
    a[i]=parseFloat(prompt("Element no "+(i+1)));
}

for(i=0;i<n;i++)
    {
       x+= a[i];
    }
let avg=x/n;
document.write("Avarage of the array= "+avg);