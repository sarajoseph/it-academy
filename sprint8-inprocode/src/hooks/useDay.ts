export const useDay = (date: string | null = null) => {
  const d = date === null ? new Date() : new Date(date)
  const currentDay = d.getDay()-1 >= 0 ? d.getDay()-1 : 6
  return currentDay
}