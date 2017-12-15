export const arrayToObject = (array) => {
  let NewObject = {};
  array.forEach((item) => {
    const {name, value} = item;
    NewObject[name] = value
  })
  return NewObject;
}
