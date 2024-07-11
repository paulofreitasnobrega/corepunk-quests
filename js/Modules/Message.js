export class Message {
    constructor() {
        this.container = document.getElementById("message");
    }

    fill(msg, error = false) {        
        const tag = error ? "<h4 class='error'>" : "<h4>";

        this.show();
        this.container.innerHTML = tag + "<img src='images/informer.png'> " + msg + "</h4>";
    }

    show() {
        this.container.style.display = 'block';
    }

    hide() {
        this.container.style.display = 'none';
    }
}