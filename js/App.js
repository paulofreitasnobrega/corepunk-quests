import { Quests } from "./Modules/Quests.js";
import { Message } from "./Modules/Message.js";
import { Search } from "./Modules/Search.js";

export class App {
    constructor() {
        this.quests = new Quests();
        this.msg    = new Message();
        this.search = new Search();

        this._init();
    }

    _init() {
        this.msg.fill("Aguardando um termo de pesquisa.");
    }
}

//    navigator.clipboard.writeText(copyText.value)