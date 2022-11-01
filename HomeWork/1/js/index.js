let num = 1;
let count = 0;
for (let i = 1; i <= num; i++)
{
    if (num % i == 0)
    {
        count++;
    }
}
if (num==1)
{
    console.log("1 nə sadədir nədə mürəkkəb");
}
else if (count >2)
{
    console.log("Mürəkkəb ədəddir");
}
else
{
    console.log("Ədəd sadədir");
}
