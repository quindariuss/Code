fn main()
{
    let number = 6;

    if number % 4 == 0
    {
        println!("number is divisable by 4");
    }
        else if number % 3 == 0
        {
            println!("number is divisable by 3");
        }
            else if number % 2 == 0
            {
                println!("number is divisable by 2");
            }
                else
                {
                    println!("the numbner is not divisable by 4,3, or 2");
                }
}