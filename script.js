window.onload = main;

import network from "./classes/Network.js";
import {BaseView} from "./classes/BaseView.js";
import {SumView} from "./classes/SumView.js";
import {MultipleView} from "./classes/MultipleView.js";
import {FactNumView} from "./classes/FactNumView.js";
import {FibNumView} from "./classes/FibNumView.js";
import {statusView} from "./classes/StatusView.js";
import {startStop} from "./classes/startStopEvent.js";

function main() {
    const views = [BaseView, SumView, MultipleView, FactNumView, FibNumView];
    const buttons = document.getElementById('dropDownMenu').children;

    statusView.setData(false);
    startStop.setData(statusView.setData);

    for (let i = 0; i < views.length; i++) {
        buttons[i].addEventListener('click',() => createPreview(views[i], 'data'))
    }
}

function createPreview(view,type) {
    const subscriber = new view();
        network.addObservers(type, subscriber.setData);
        subscriber.setData([0,0,0]);
}
