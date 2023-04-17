export class myMenu extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
    }
    connectedCallback(){
        this.shadowRoot.innerHTML = /* html */`
            <style rel="stylesheet">
                @import "./components/myMenu.css";
            </style>
            <div class="h7">${this.texto()}</div>
        `;
        this.attachShadow({ mode: "closed"})
    }
    texto(){
        return `CarrangaXD`
    }
    static show(){
        customElements.define("my-h7", myMenu);
    }
}