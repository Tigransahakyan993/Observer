import {BaseView} from "./BaseView.js";

export class MultipleView extends BaseView {

    getMult(data) {
        this.mult = 1;
        for (let i = 0; i < data.length; i++) {
            this.mult *= data[i];
        }
    }

    create() {
        super.create();
        this.getMult(this.data);
        this.multP = document.createElement('p');
        this.multP.innerText = `mult = ${this.mult}`;
        this.div.appendChild(this.multP);
        this.mult = 1;
    }

    update() {
        super.update();
        this.getMult(this.data);
        this.multP.innerText = `mult = ${this.mult}`;
        this.mult = 1;
    }
}