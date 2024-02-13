export default function runAtTime(hour: number, minutes: number, func: Function): void {
  const twentyFourHours: number = 86400000
  const now: Date = new Date()
  const date: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minutes, 0, 0)
  let eta_ms: number = date.getTime() - now.getTime()
  if (eta_ms < 0) eta_ms += twentyFourHours
  setTimeout(function (): void {
    func()
    setInterval(func, twentyFourHours)
  }, eta_ms)
}
