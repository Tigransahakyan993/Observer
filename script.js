window.onload = main;

import Network from "./classes/Network.js";
import {BaseView} from "./classes/BaseView.js";
import {SumView} from "./classes/SumView.js";
import {MultipleView} from "./classes/MultipleView.js";
import {FactNumView} from "./classes/FactNumView.js";
import {FibNumView} from "./classes/FibNumView.js";
import eventDispatch from "./classes/EventDispatch.js";

function main() {

const classes = [BaseView, SumView, MultipleView, FactNumView, FibNumView];
const btns = document.getElementById('dropDownMenu').children;

    for (let i = 0; i < classes.length; i++) {
        btns[i].addEventListener('click', () => {
            preview('date', classes[i])
        })
    }
}

function preview(type, view) {
    const obs = new view();
    obs.removeObject = {type, func: obs.setData};
    Network.addObservers(type, obs.setData);
    Network.notify([0,0,0]);
}





