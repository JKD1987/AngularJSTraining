export class Camp {
    location: string;
    campDate: Date;
    estimate: number;
    constructor(location: string, campDate: Date, estimate: number){
        this.location = location;
        this.campDate = campDate;
        this.estimate = estimate;
    }
    toString(){
        return '${this.location}, ${this.component}'
    }
}
