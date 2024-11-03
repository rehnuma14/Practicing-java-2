let n,i;
n=prompt("Total elements?")
let a=[];
for(i=0;i<n;i++)
{
  a[i]=prompt("Element"+(i+1)+"?");
}
document.write("Reverse of the Array: ");
for(i=n-1;i>=0;i--)
{
  document.write(a[i]+" ");
}