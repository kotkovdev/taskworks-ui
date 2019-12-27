export interface User {
    id:     number,
    name:   string,
    email:  string,
    password: string
}

export class User implements User {
    constructor(
        id,
        name,
        email,
        password
    ) {
        this.id         = id;
        this.name       = name;
        this.email      = email;
        this.password   = password;
    }
}