enum IpVersion{
    V4(u8,u8,u8,u8),
    V6(String),
}

fn route(ip_version: IpVersion){ }
fn main() {
    let home = IpVersion::V4(127,0,0,1);
    let loopback = IpVersion::V6(String::from("::1"));
}