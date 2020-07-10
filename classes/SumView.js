import {BaseView} from "./BaseView.js";

export class SumView extends BaseView {

    constructor() {
        super();
    }

    getSum(data) {
        this.sum = 0;
        for (let i = 0; i < data.length; i++) {
            this.sum += data[i];
        }
    }

    create() {
        super.create();
        this.getSum(this.data);
        this.sumP = document.createElement('p');
        this.sumP.innerText = `sum = ${this.sum}`;
        this.div.appendChild(this.sumP);
    }

    update() {
        super.update();
        this.getSum(this.data);
        this.sumP.innerText = `sum = ${this.sum}`;
        this.sum = 0;
    }
}