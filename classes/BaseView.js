import Network from './Network.js'

export class BaseView {

    constructor() {
        this.isExist = false;
        this.removeObject = null;
        this.setData = this.setData.bind(this);
        this.removeElement = this.removeElement.bind(this);
    }

    render() {
        if (!this.isExist) {
            this.create();
            this.isExist = true;
        } else {
            this.update();
        }
    }

    create() {
        this.parentDiv = document.createElement('div');
        this.button = document.createElement('button');
        this.button.innerText = 'x';
        this.button.addEventListener('click', this.removeElement);
        this.button.classList.add('closeBtn');
        this.parentDiv.appendChild(this.button);
        this.div = document.createElement('div');

        for (let i = 0; i < this.data.length; i++) {
            const p = document.createElement('p');
            p.innerText = this.data[i];
            this.div.appendChild(p);
        }
        this.parentDiv.appendChild(this.div);
        document.getElementById('root').appendChild(this.parentDiv);
    }

    update() {
        for (let i = 0; i < this.data.length; i++) {
            this.div.children[i].innerText = `${this.data[i]}`
        }
    }

    removeElement() {
        this.parentDiv.remove();
        Network.removeObserver(this.removeObject.type, this.removeObject.func)
    }

    setData(data) {
        this.data = data;
        this.render();
    }
}
