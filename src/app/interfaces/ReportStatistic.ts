export interface ReportStatistic {
    dates: string[],
    throubles: number[],
}

export class ReportStatistic implements ReportStatistic {
    constructor(
        dates: string[],
        throubles: number[]
    ) {
        this.dates = dates;
        this.throubles = throubles;
    }
}