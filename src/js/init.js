import {GetUsers} from "./components/get-users";
import {NavMenu} from "./components/nav-menu";

export class Init {
    constructor() {
        const get_users = new GetUsers();
        const nav_menu = new NavMenu();
    }
}