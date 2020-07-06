window.onload = main;

import {BaseView} from "./classes/BaseView.js";
import {SumView} from "./classes/SumView.js";
import {MultipleView} from "./classes/MultipleView.js";
import {FactNumView} from "./classes/FactNumView.js";
import {FibNumView} from "./classes/FibNumView.js";

const baseView = new BaseView()
const sumView = new SumView()
const multView = new MultipleView()
const factView = new FactNumView()
const fibView = new FibNumView()

function main() {
    net.start()
    net.end()
}

class Network{
    onData() {
        onDrawNumbers(Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1))
    }

    start() {
        this.timerId = setInterval(()=> {
            this.onData();
        }, 3000)
    }

    end(){
        setTimeout(()=>clearInterval(this.timerId), 15000)
    }
}

const net = new Network();

function onDrawNumbers() {
    baseView.setData(arguments);
    sumView.setData(arguments);
    multView.setData(arguments);
    fibView.setData(arguments);
    factView.setData(arguments);

}

