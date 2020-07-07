window.onload = main;

import {BaseView} from "./classes/BaseView.js";
import {SumView} from "./classes/SumView.js";
import {MultipleView} from "./classes/MultipleView.js";
import {FactNumView} from "./classes/FactNumView.js";
import {FibNumView} from "./classes/FibNumView.js";
const observers = [];

function main() {
    net.start()
    // net.notify([Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1)])
    // net.end()
    // setTimeout(() => net.end(), 3000)
    document.addEventListener('click', () => net.end())
}

class Network{

    constructor() {
        this.observers = [];
    }

    addObservers(fn) {
        this.observers.push(fn)
    }

    notify() {
        this.observers.forEach((obs) => {
            obs(...arguments)
        })
    }
    onData() {
            onDrawNumbers([Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1)])
    }

    start() {
        this.timerId = setInterval(()=> {
            // this.onData()
            this.notify(Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1))
        }, 1000)
    }

    end(){
        clearInterval(this.timerId)
    }
}

const net = new Network();
net.addObservers(onDrawNumbers)


observers.push(...addView(BaseView, 1))
observers.push(...addView( SumView, 1))
observers.push(...addView(MultipleView, 1))
observers.push(...addView(FactNumView, 1))
observers.push(...addView(FibNumView, 1))

function onDrawNumbers() {
    observers.forEach((obs) => obs.setData(arguments))
}

function addView(view,num = 1) {
    const baseView = [];
    for (let i = 0; i < num; i++) {
        baseView.push(new view())
    }
    return baseView
}


