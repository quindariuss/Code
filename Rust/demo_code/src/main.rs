fn main() {
    let rect1 = Rectangle {width: 30, height: 50};

    println!("The area of the rectangle is {}", area(&rect1));
}

fn area(rectangle: &Rectangle) -> u32{
    rectangle.width * rectangle.height
    println!("rect1 is {}", rect1);
}

struct Rectangle{
    width: u32,
    height: u32,
}