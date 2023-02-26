export function countMatchingArray(array1, array2) {
  return array1.filter((item) => array2.includes(item)).length;
}

export function countMatchingArrayOrder(array1, array2) {
  return array1.filter((item, index) => array2[index] === item).length;
}
