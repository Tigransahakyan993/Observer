export class BaseView {

    constructor() {
        this.isExist = false;
    }

    render() {
        debugger;
        if (!this.isExist) {
            this.create();
            this.isExist = true;
        } else {
            this.update();
        }
    }

    create(){
        this.div = document.createElement('div');
        for (let i = 0; i < this.data.length; i++) {
            const p = document.createElement('p');
            p.innerText = this.data[i];
            this.div.appendChild(p);
        }
        document.body.appendChild(this.div);
    }

    update() {
        for (let i = 0; i < this.data.length; i++) {
            this.div.children[i].innerText = `${this.data[i]}`
        }
    }

    setData(data) {
        this.data = data;
        this.render();
    }
}
