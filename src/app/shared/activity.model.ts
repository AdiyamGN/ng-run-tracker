export interface IActivity {
  id: number
  name: string
  date: Date
  distance: number
  gpxData: string
  comments?: string
}