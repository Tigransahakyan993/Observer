import Network from "./Network.js";

class EventDispatch {

    constructor() {
        this.start = this.start.bind(this);
        this.end = this.end.bind(this);
        this.startBtn = document.getElementById('startBtn');
        this.endBtn = document.getElementById('endBtn');
        this.startBtn.addEventListener('click', this.start);
        this.endBtn.addEventListener('click', this.end);
    }

    start() {
            this.startBtn.disabled = true;
            this.endBtn.disabled = false;
            Network.start();
    }

    end() {
        this.startBtn.disabled = false;
        this.endBtn.disabled = true;
        Network.end();
    }
}

const btnEvent = new EventDispatch();

export default btnEvent;