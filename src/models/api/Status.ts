export interface Status {
    settings: Settings;
  }
  
interface Settings {
    units: string;
    thresholds: Thresholds;
}

interface Thresholds {
    bgHigh: number;
    bgLow: number;
}