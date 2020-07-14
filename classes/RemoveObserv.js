
export class RemoveObserver {
    constructor() {
        this.observers = [];
    }

    addObserver(type, func) {
        this.observers.push( { type, func } )
    }

    remove(type, func) {
        let index;
        for (let obs of this.observers) {
            if ((obs.type === type && obs.func === func)) {
                index = this.observers.indexOf(obs);
                break;
            }
        }
        this.observers.splice(index, 1);
    }

    removeAll() {
        this.observers = [];
    }
}
