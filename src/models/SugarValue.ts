export interface SugarValue {
    _id: string;
    device: string;
    dateString: Date;
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