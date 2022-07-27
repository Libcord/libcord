import {Client} from "../Client";


/*
Base manager for all the managers
 */
export default class Manager {
    public client: Client
    constructor(client: Client) {
        this.client = client
    }
}