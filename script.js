window.onload = main;

import Network from "./classes/Network.js";
import {BaseView} from "./classes/BaseView.js";
import {SumView} from "./classes/SumView.js";
import {MultipleView} from "./classes/MultipleView.js";
import {FactNumView} from "./classes/FactNumView.js";
import {FibNumView} from "./classes/FibNumView.js";

const startBtn = document.getElementById('startBtn');
const endBtn = document.getElementById('endBtn');
function main() {

    startBtn.addEventListener('click',startNetwork)

    const baseBtn = document.getElementById('baseId');
    const sumBtn = document.getElementById('sumId');
    const multBtn = document.getElementById('multId');
    const factBtn = document.getElementById('factId');
    const fibBtn = document.getElementById('fibId');

    baseBtn.addEventListener("click",() => {
       subscribe('base', BaseView)
    })
    sumBtn.addEventListener("click",() => {
        subscribe('sum', SumView)
    })
    multBtn.addEventListener("click",() => {
        subscribe('mult', MultipleView)
    })
    factBtn.addEventListener("click",() => {
        subscribe('fact', FactNumView)
    })
    fibBtn.addEventListener("click",() => {
        subscribe('fib', FibNumView)
    })
}


function startNetwork() {
    Network.start()
    endBtn.addEventListener('click', endNetwork)
    startBtn.removeEventListener('click', startNetwork)
}

function endNetwork() {
    Network.end();
    startBtn.addEventListener('click',startNetwork);
    endBtn.removeEventListener('click', endNetwork)
}

function subscribe(type, view) {
    debugger;
    const fn = new view();
    fn.removeObject = {type, func: fn.setData};
    fn.fn = Network.removeObserver
    Network.addObservers(type, fn.setData);
    Network.notify([0,0,0],type);
}





