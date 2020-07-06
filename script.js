window.onload = main;

import {BaseView} from "./classes/BaseView.js";
import {SumView} from "./classes/SumView.js";
import {MultipleView} from "./classes/MultipleView.js";
import {FactNumView} from "./classes/FactNumView.js";
import {FibNumView} from "./classes/FibNumView.js";

const baseView = new BaseView()
const baseView1 = new BaseView()
const baseView2 = new BaseView()
const baseView3 = new BaseView()
const baseView4 = new BaseView()
const baseView5 = new BaseView()
const sumView1 = new SumView()
const sumView2 = new SumView()
const sumView3 = new SumView()
const sumView4 = new SumView()
const sumView5 = new SumView()
const multView1 = new MultipleView()
const multView2 = new MultipleView()
const multView3 = new MultipleView()
const multView4 = new MultipleView()
const multView5 = new MultipleView()
const factView1 = new FactNumView()
const factView2 = new FactNumView()
const factView3 = new FactNumView()
const factView4 = new FactNumView()
const factView5 = new FactNumView()
const fibView1 = new FibNumView()
const fibView2 = new FibNumView()
const fibView3 = new FibNumView()
const fibView4 = new FibNumView()
const fibView5 = new FibNumView()

function main() {
    net.start()
    // net.en
    setTimeout(() => net.end(), 3000)
    document.addEventListener('click', main)
}

class Network{
    constructor() {
        this.observers = []
    }

    onData() {
        onDrawNumbers(Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1),Math.floor(Math.random()*99 + 1))
    }

    start() {
        this.timerId = setInterval(()=> {
            this.onData();
        }, 1000)
    }

    end(){
        clearInterval(this.timerId)
    }
}

const net = new Network();

function onDrawNumbers() {

    baseView1.setData(arguments);
    baseView2.setData(arguments);
    baseView3.setData(arguments);
    baseView4.setData(arguments);
    baseView5.setData(arguments);
    sumView1.setData(arguments);
    sumView2.setData(arguments);
    sumView3.setData(arguments);
    sumView4.setData(arguments);
    sumView5.setData(arguments);
    multView1.setData(arguments);
    multView2.setData(arguments);
    multView3.setData(arguments);
    multView4.setData(arguments);
    multView5.setData(arguments);
    factView1.setData(arguments);
    factView2.setData(arguments);
    factView3.setData(arguments);
    factView4.setData(arguments);
    factView5.setData(arguments);
    fibView1.setData(arguments);
    fibView2.setData(arguments);
    fibView3.setData(arguments);
    fibView4.setData(arguments);
    fibView5.setData(arguments);
}

