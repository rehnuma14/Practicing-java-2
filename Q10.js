function sumMixedArray()
{
let n = prompt("Enter a series of values(,):");
let a= n.split(",").map(value => {
    value = value.trim(); 
    if (!isNaN(value) && value !== '')
         { return Number(value); }
    if (value.toLowerCase() === 'true')
         { return true; } 
    if (value.toLowerCase() === 'false') 
        { return false; }
    return value; });
    let sum = a.reduce((sum, value) => {
         return typeof value === 'number' ? sum + value : sum; 
        }, 0);
        console.log(sum);
}
sumMixedArray();
