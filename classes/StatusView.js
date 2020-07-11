import network from './Network.js'

export class StatusView {
    constructor() {
        this.isExist = false;
        this.setData = this.setData.bind(this);
    }

    render() {
        if (!this.isExist) {
            this.create();
            this.isExist = true;
        } else {
            this.update()
        }
    }

    create() {
        this.description = document.createElement('h3');
        this.description.innerText = 'Status: CLOSE';

        //append in document && gives styles
        this.description.classList.add('status');
        const container = document.getElementById('descriptionId');
        container.appendChild(this.description);
    }

    update() {
        if (this.status){
            this.description.innerText = 'Status: OPEN';
            network.start()
        } else {
            this.description.innerText = 'Status: CLOSE';
            network.end()
        }
    }

    setData(status) {
        this.status = status;
        this.render();
    }
}

export const statusView = new StatusView();
