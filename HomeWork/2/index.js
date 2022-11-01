let N;
let i;
    var count = 0;
    for (let i = 1; i<N; i++)
    {
        if ( i%3 ==0 && i%5==0)
        {
            count++
        }
    }
    Console.WriteLine (count)