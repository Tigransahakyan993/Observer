import {statusView} from "./StatusView.js";

class startStopEvent {

    constructor() {
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
    }

    create() {
        this.startBtn = document.createElement('button');
        this.startBtn.innerText = 'START';
        this.stopBtn = document.createElement('button');
        this.stopBtn.innerText = 'STOP';
        this.startBtn.addEventListener('click', this.start);
        this.stopBtn.addEventListener('click', this.stop);
        //append in document && gives styles
        const btnContainer = document.getElementById('btnContainer');
        this.startBtn.className = 'btn btn-success';
        this.stopBtn.className = 'btn btn-danger';
        this.stopBtn.disabled = true;
        btnContainer.appendChild(this.startBtn);
        btnContainer.appendChild(this.stopBtn);
    }

    start() {
        this.startBtn.disabled = true;
        this.stopBtn.disabled = false;
            statusView.setData(true)
    }

    stop() {
        this.stopBtn.disabled = true;
        this.startBtn.disabled = false;
            statusView.setData(false);
    }
}

export const events = new startStopEvent();
