enum Coin{
  Penny,
  Nickel,
  Dime,
  Quarter(UsState),
}

#[derive(Debug)]
enum UsState{
  Alabama,
  Georgia,
  Mississippi,
  Kansas,
}

fn value_in_cents(coin: Coin) -> u8 {
  match coin {
  Coin::Penny => 1,
  Coin::Nickel => 5,
  Coin::Dime => 10,
  Coin::Quarter(state) =>{
    println!("State Quarter from {:?}!", state);
    25;
    },
  }
}

fn main() {
value_in_cents(Coin::Quarter(UsState::Alabama));
}