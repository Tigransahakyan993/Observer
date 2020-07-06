window.onload = main;

import {BaseView} from "./classes/BaseView.js";
import {SumView} from "./classes/SumView.js";
import {MultipleView} from "./classes/MultipleView.js";
import {FactNumView} from "./classes/FactNumView.js";
import {FibNumView} from "./classes/FibNumView.js";


function main() {
    net.start()
    // net.end()
    // setTimeout(() => net.end(), 3000)
    document.addEventListener('click', () => net.end())
}

class Network{

constructor() {
    this.observers = [];
}

    addObserver(obs) {
        this.observers.push(...obs)
    }


    onData() {
       onDrawNumbers.call(this, Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1))
    }

    start() {
        this.timerId = setInterval(()=> {
            this.onData()
        }, 1000)
    }

    end(){
        clearInterval(this.timerId)
    }
}

const net = new Network();

net.addObserver(addView(new BaseView(), 1))
net.addObserver(addView(new SumView(), 10))
net.addObserver(addView(new MultipleView(), 10))
net.addObserver(addView(new FactNumView(), 10))
net.addObserver(addView(new FibNumView(), 1))

function onDrawNumbers() {
    this.observers.forEach((obs) => {
        obs.setData(this.onData(arguments))
    })
}

function addView(view,num = 1) {
    const baseView = [];
    for (let i = 0; i < num; i++) {
        baseView.push(view)
    }
    return baseView
}

