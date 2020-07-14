import {RemoveObserver} from "./RemoveObserv.js";

export class Network {

    constructor() {
        this.observers = [];
        this.removeObserver = new RemoveObserver();
    }

    addObservers(type, func) {
        this.observers.push({ type, func: func });
        this.removeObserver.addObserver( type, func )
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
