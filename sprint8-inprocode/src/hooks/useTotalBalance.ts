export const useTotalBalance = (weekData: number[]): number => {
  return Object.keys(weekData).reduce((total, item) => total + weekData[parseInt(item)], 0)
}