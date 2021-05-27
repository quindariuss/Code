enum IpVersion{
    V4,
    V6,
}
fn route(ip_version: IpVersion){ }
fn main() {
    let four = IpVersion::V4;
    let six = IpVersion::V6;
    route(IpVersion::V4);
    route(IpVersion::V6);
}