export class BaseView {

    constructor() {
        this.isExist = false;
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

    create(){
        this.parentDiv = document.createElement('div');
        this.div = document.createElement('div');
        this.button = document.createElement('button');
        this.button.innerText = 'x';
        this.button.addEventListener('click', this.removeElement);
        this.button.classList.add('closeBtn');
        this.parentDiv.appendChild(this.button);
        for (let i = 0; i < this.data.length; i++) {
            const p = document.createElement('p');
            p.innerText = this.data[i];
            this.div.appendChild(p);
        }
        this.parentDiv.appendChild(this.div)
        document.getElementById('root').appendChild(this.parentDiv)
    }

    update() {
        for (let i = 0; i < this.data.length; i++) {
            this.div.children[i].innerText = `${this.data[i]}`
        }
    }

    removeElement() {
        this.parentDiv.remove();
    }

    setData(data) {
        this.data = data;
        this.render();
    }
}
