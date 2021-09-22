export default function ex6(a, b, c) {
  if (a >= b + c) {
    return false;
  }
  if (b >= a + c) {
    return false;
  }
  if (c >= a + b) {
    return false;
  }
  return true;
}
