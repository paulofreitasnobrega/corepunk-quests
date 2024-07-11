import { Quests } from "./Quests.js";
import { Message } from "./Message.js";

export class Search {
    constructor() {
        this.msg        = new Message();
        this.quests     = new Quests();        
        this.container  = document.getElementById("quests-list");
        this.btnSearch  = document.getElementById("search-btn");
        this.inpSearch  = document.getElementById("search-input");

        this.hide();
        this._init();
    }

    _init() {
        let t = this;        
        let inp = this.inpSearch;

        this.btnSearch.addEventListener('click', function() {
            let term = inp.value;

            if (term.length > 2) {
                term = term.toLowerCase();

                if (t.quests.hasTerm(term)) {
                    t.fillList(t.quests.search(term));
                } else {
                    t.hide();
                    t.msg.fill("Termo de pesquisa não encontrado.", true);
                }
            }
        });
    }

    getBtnSearch() {
        return this.btnSearch;
    }

    show() {
        this.container.style.display = 'block';
    }

    hide() {
        this.container.innerHTML = "";
        this.container.style.display = 'none';
    }

    fillList(data) {
        let t = this;

        t.show();
        t.msg.hide();        
        t.container.innerHTML = "";

        for (const [key, value] of Object.entries(data)) {
            let li      = document.createElement('li');
            let span    = document.createElement('span');

            li.textContent = value['value'];                        
            span.innerHTML = key;
            li.append(span);
            t.container.append(li);
        }
    }
}