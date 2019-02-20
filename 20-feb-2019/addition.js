function add()
{
    var sum = 0;
    for(var i=0;i<arguments.length;i++)
    {
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1,2,5,4));