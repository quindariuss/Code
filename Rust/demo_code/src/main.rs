fn main()
{
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    let (x, y, z) = tup;
    println!("The value of x:{}, y:{}, and z:{} of the tuple accessing it directly", tup.0, tup.1, tup.2);
}
