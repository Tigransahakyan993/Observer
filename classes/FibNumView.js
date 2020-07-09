import {BaseView} from "./BaseView.js";

export class FibNumView extends BaseView{

    getFibNum(data){
        this.fibArr = [];
        for(let k = 0; k < data.length; k++) {
            const fib =[1,1,2];
            if (data[k] === 1){
                this.fibArr.push(1);
                continue;
            }
            for(let i = 2; i <= fib.length; i++) {
                if(fib[i] + fib[i - 1] <= data[k]) {
                    let fibDigit = fib[i] + fib[i - 1];
                    fib.push(fibDigit)
                } else break;
            }
            this.fibArr.push(fib)
        }
    }

    create() {
        super.create();
        this.getFibNum(this.data);
        this.fibNumsDiv = document.createElement('div');
        for(let i in this.data) {
            const p = document.createElement('p');
            p.innerText = `fib ${this.data[+i]} : ${this.fibArr[+i]}`
            this.fibNumsDiv.appendChild(p);
        }
        this.div.appendChild(this.fibNumsDiv);

    }

    update() {
        super.update();
        this.getFibNum(this.data);
        let i = 0;
        for(let el of this.fibNumsDiv.children) {
            el.innerText = `fib ${this.data[i]} : ${this.fibArr[i++]}`
        }
    }
}