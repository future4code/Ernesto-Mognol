export default function ex4(qty) {
  let price = qty >= 12 ? 1.0 : 1.3;
  return qty * price;
}
