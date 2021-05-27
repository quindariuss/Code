enum IpVersion{
    V4,
    V6,
}
struct IpAddress{
    kind: IpVersion,
    address: String,
}
fn route(ip_version: IpVersion){ }
fn main() {
    let home = IpAddress {
        kind: IpVersion::V4,
        address: String::from("127.0.0.1"),
    };
    let loopback = IpAddress{
        kind: IpVersion::V6
        address: String::from("::1"),
    };
    let four = IpVersion::V4;
    let six = IpVersion::V6;
    route(IpVersion::V4);
    route(IpVersion::V6);
}