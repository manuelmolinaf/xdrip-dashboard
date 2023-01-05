export interface GlucoseValue {
    _id: string;
    device: string;
    dateString: string;
    sysTime: string;
    date: number;
    sgv: number;
    delta: number;
    direction: string;
    noise: number;
    filtered: number;
    unfiltered: number;
    rssi: number;
    type: string;
    units_hint: string;
  }