let obj=
{
 Title:prompt("title?"),Author:prompt("Author?"),Year:prompt("Year")
}
for(let key in obj)
{
    document.write(key+":"+obj[key]+",");
}