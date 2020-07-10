 class Network {

    constructor() {
        this.observers = [];
        this.removeObserver = this.removeObserver.bind(this);
    }

    addObservers(type, func) {
        this.observers.push({ type, func: func });
    }

    removeObserver(type, func) {
        let index;
        for (let obs of this.observers) {
            if ((obs.type === type && obs.func === func)) {
                index = this.observers.indexOf(obs);
                break;
            }
        }
        this.observers.splice(index, 1);
    }

    notify(msg, type) {
        if (!type) {
            this.observers.forEach((obs) => {obs.func(msg)});
            return;
        }
        this.observers.filter(el => el.type === type).forEach((obs) => {
            obs.func(msg);
        })
    }

    start(type) {
        this.timerId = setInterval(() => {
            this.notify([Math.floor(Math.random() * 99 + 1),Math.floor(Math.random() * 99 + 1),Math.floor(Math.random() * 99 + 1)], type)
        }, 1000)
    }

    end() {
        clearInterval(this.timerId);
    }
}

const net = new Network()

 export default net
