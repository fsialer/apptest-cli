import { Rol } from "./rol";

export class User {
    constructor(
        public id?: number,
        public name?: string,
        public email?: string,
        public password?: string,
        public rol?: Rol,
        public per_id?: number
    ) { }
}