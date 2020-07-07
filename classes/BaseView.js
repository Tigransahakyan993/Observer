export class BaseView {

    constructor() {
        this.isExist = false;
        this.observer = [];
    }

    render() {
        if (!this.isExist) {
            this.create();
            this.isExist = true;
        } else {
            this.update();
        }
    }

    subscribe(obs) {
        this.observer.push(obs)
    }

    unSubscribe(obs) {
       let findIndex =  this.observer.indexOf(obs);

       this.observer.splice(findIndex,1)
    }

    notify(msg) {
        this.observer.forEach((obs) => obs.notify(msg));
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
