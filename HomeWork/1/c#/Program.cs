int num = 1;
int count = 0;
for (int i = 1; i <= num; i++)
{
    if (num % i == 0)
    {
        count++;
    }
}
if (num==1)
{
    Console.WriteLine("1 nə sadədir nədə mürəkkəb");
}
else if (count >2)
{
    Console.WriteLine("Mürəkkəb ədəddir");
}
else
{
    Console.WriteLine("Ədəd sadədir");
}