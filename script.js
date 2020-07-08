window.onload = main;

import {BaseView} from "./classes/BaseView.js";
import {SumView} from "./classes/SumView.js";
import {MultipleView} from "./classes/MultipleView.js";
import {FactNumView} from "./classes/FactNumView.js";
import {FibNumView} from "./classes/FibNumView.js";

function main() {
    let isRun = true;

    const net = new Network();
    const base = new BaseView();
    const sum = new SumView();
    const mult = new MultipleView();
    const fact = new FactNumView();
    const fib = new FibNumView();

    net.addObservers('base',(data) => base.setData(data));
    net.addObservers('sum', (data) => sum.setData(data));
    net.addObservers('mult', (data) => mult.setData(data));
    net.addObservers('fact', (data) => fact.setData(data));
    net.addObservers('fib', (data) => fib.setData(data))

    net.start(['base','fib', 'fact']);

    document.addEventListener('click', () =>{
        isRun ? net.end() : net.start()
        isRun = !isRun;
    })
}

class Network{

    constructor() {
        this.observers = [];
    }

    addObservers(type,obs) {
        obs.type = type;
        this.observers.push(obs)
    }

    notify(msg,type = '') {
        this.observers.forEach((obs) => {
            if (typeof type === "object") {
                for(let el of type) {
                    obs.type === el ? obs(msg) : null;
                }
            } else {
                if (type) {
                    obs.type === type ? obs(msg) : null
                } else {
                    obs(msg)
                }
            }

        })
    }

    start(type) {
        this.timerId = setInterval(()=> {
            this.notify([Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1)],type)
        }, 1000)
    }

    end(){
        clearInterval(this.timerId)
    }
}

function addView(view,num = 1) {
    const baseView = [];
    for (let i = 0; i < num; i++) {
        baseView.push(view)
    }
    return baseView
}