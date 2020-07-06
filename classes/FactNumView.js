import {BaseView} from "./BaseView.js";

export class FactNumView extends BaseView {

    getFact(data) {
        this.factArr = [];
        for (let i = 0; i < data.length; i++) {
            let fact = 1;
            let digit = data[i]
            while (digit > 1) {
                fact *= digit--;
            }
            this.factArr[i] = fact;
        }
    }

    create() {
        super.create();
        this.getFact(this.data);
        this.factNumsDiv = document.createElement('div');
        for(let i in this.data) {
            const factP = document.createElement('p');
            factP.innerText = `fact ${this.data[+i]} = ${this.factArr[+i]}`
            this.factNumsDiv.appendChild(factP);
        }
        this.div.appendChild(this.factNumsDiv);
    }

    update() {
        super.update()
        this.getFact(this.data)
        let i = 0;
        for(let el of this.factNumsDiv.children) {
            el.innerText = `fact ${this.data[i]} = ${this.factArr[i++]}`
        }
    }
}