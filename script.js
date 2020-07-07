window.onload = main;

import {BaseView} from "./classes/BaseView.js";
import {SumView} from "./classes/SumView.js";
import {MultipleView} from "./classes/MultipleView.js";
import {FactNumView} from "./classes/FactNumView.js";
import {FibNumView} from "./classes/FibNumView.js";

function main() {
    let isRun = true;
    net.start()
    document.addEventListener('click', () =>{
            isRun ? net.end() : net.start()
            isRun = !isRun;
    })
}

class Network{

    constructor() {
        this.observers = [];
    }

    addObservers(obs) {
        this.observers.push(obs)
    }

    notify(msg) {
        this.observers.forEach((obs) => {
            obs.setData(msg);
        })
    }

    start() {
        this.timerId = setInterval(()=> {
            this.notify([Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1)])
        }, 1000)
    }

    end(){
        clearInterval(this.timerId)
    }
}

const net = new Network();

net.addObservers(...addView(BaseView, 1));
net.addObservers(...addView( SumView, 1));
net.addObservers(...addView(MultipleView, 1));
net.addObservers(...addView(FactNumView, 1));
net.addObservers(...addView(FibNumView, 1))

function addView(view,num = 1) {
    const baseView = [];
    for (let i = 0; i < num; i++) {
        baseView.push(new view())
    }
    return baseView
}


