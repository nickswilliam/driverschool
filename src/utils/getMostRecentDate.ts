interface IItem {
  updatedAt: number
}

export function getMostRecentDate(items: IItem[]): number {
  if(items.length === 0) return NaN
    const timestamps = items.map(item => new Date(item.updatedAt).getTime())
    const maxNumber = Math.max(...timestamps);
    return maxNumber
  }
  