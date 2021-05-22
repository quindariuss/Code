fn main(){
    let s = String::from("hello");

    let len = s.len();
    println!("{}",len);
    let slice = &s[3..];
    println!("The substring from index 3 to the end is {}",slice);
}