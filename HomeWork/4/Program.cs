int num = 23452;
int count = 0;
for (int i = 0; i < num; i++)
{
    num /= 10;
    if (num >0)
    {
        count++;
    }
}
Console.WriteLine(count + 1);