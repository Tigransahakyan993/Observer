window.onload = main;

import network from "./classes/Network.js";
import {BaseView} from "./classes/BaseView.js";
import {SumView} from "./classes/SumView.js";
import {MultipleView} from "./classes/MultipleView.js";
import {FactNumView} from "./classes/FactNumView.js";
import {FibNumView} from "./classes/FibNumView.js";
import {statusView} from "./classes/StatusView.js";
import {events} from "./classes/startStopEvent.js";
import {eventDispatch} from "./classes/EventDispatch.js";

function main() {
    const views = [BaseView, SumView, MultipleView, FactNumView, FibNumView];

    statusView.render();
    events.create();

    for (let i = 0; i < views.length; i++) {
        eventDispatch.addView(network, 'data', views[i])
    }
}
