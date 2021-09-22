export default function ex7(birthYear, entryYear) {
  const age = 2021 - birthYear;
  const contribuitionTime = 2021 - entryYear;
  return (
    age >= 65 || contribuitionTime >= 30 || (age > 60 && contribuitionTime > 25)
  );
}
