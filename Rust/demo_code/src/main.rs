fn main(){
let mut user1 = User {
    email: String::from("me@quindarius.com"),
    username: String::from("quindarius"),
    active: true,
    sign_in_count: 1,
};

let user2 = User{
    email: String::from("bob.com"),
    username: String::from("anotherusername"),
    active: user1.active,
    sign_in_count: user1.sign_in_count,
}

user1.email = String::from("notme@quindarius.com")
}

struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}

fn build_user(email: String, username: String) -> User {
    User{
        email: email,
        username: username,
        active: true,
        sign_in_count: 1,
    }
}
