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
        preview('base', BaseView)
    })
    sumBtn.addEventListener("click",() => {
        preview('sum', SumView)
    })
    multBtn.addEventListener("click",() => {
        preview('mult', MultipleView)
    })
    factBtn.addEventListener("click",() => {
        preview('fact', FactNumView)
    })
    fibBtn.addEventListener("click",() => {
        preview('fib', FibNumView)
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

function preview(type, view) {
    const obs = new view();
    obs.removeObject = {type, func: obs.setData};
    obs.fn = Network.removeObserver;
    Network.addObservers(type, obs.setData);
    Network.notify([0,0,0],type);
}





