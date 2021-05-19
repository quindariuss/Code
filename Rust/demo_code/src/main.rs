fn main()
{
    let s1 = String::from("hello");
    let (s2, len ) = calculate_length(s1);

    println!("the length of '{}' is {}", s2, len);
}

fn caclulate_length(s: String) -> (String, usize)
{
    let length = s.len();

    (s, length)
}