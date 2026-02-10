export function countMatchingArray<T>(array1: T[], array2: T[]): number {
  return array1.filter((item) => array2.includes(item)).length;
}

export function countMatchingArrayOrder<T>(array1: T[], array2: T[]): number {
  return array1.filter((item, index) => array2[index] === item).length;
}
