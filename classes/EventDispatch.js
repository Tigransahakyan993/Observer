class EventDispatch {

    constructor() {
        this.addView = this.addView.bind(this);
        this.createPreview = this.createPreview.bind(this);
    }

    createButton() {
        const btn = document.createElement('button');
        btn.innerText = this.object.view.name;
        btn.addEventListener('click', this.createPreview);
        const container = document.getElementById('dropDownMenu');
        container.appendChild(btn)

    }

    createPreview() {
        debugger;
        const subscriber = new this.object.view ();
        subscriber.removeObject = {type: this.object.type, func: subscriber.setData};
        this.subscribe.addObservers(this.object.type, subscriber.setData);
        subscriber.setData([0,0,0])
    }

    addView(subscribe ,type, view) {
        this.object = {type, view};
        this.subscribe = subscribe;
        this.createButton();
    }
}

export const eventDispatch = new EventDispatch();