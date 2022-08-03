import { Base } from '../Base.ts';
import {Client} from "../../Client";
import { APIChannel } from 'https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v9.ts'
import {Snowflake} from "../../utils/Snowflake";


export class Thread extends Base {
    public readonly id: Snowflake;
    public readonly archived: boolean | undefined;
    public readonly locked: boolean | undefined;

    constructor(client: Client, data: APIChannel) {
        super(client)
        this.id = data.id as unknown as Snowflake
        this.archived = data.thread_metadata?.archived
        this.locked = data.thread_metadata?.locked
    }

}
