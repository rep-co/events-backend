export const safeJsonParse = <T>(text: string) => {
  try {
    const result: T = JSON.parse(text)
    return result
  } catch {
    return undefined
  }
}
