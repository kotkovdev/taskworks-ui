export interface Project {
    id: number,
    name: string,
    description: string,
    repository: string,
    rsa_key: string,
    owner_id: number,
    settings: string
}

export class Project implements Project {
    constructor(
        id: number,
        name: string,
        description: string,
        repository: string,
        rsa_key: string,
        owner_id: number,
        settings: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.repository = repository;
        this.rsa_key = rsa_key;
        this.owner_id = owner_id;
        this.settings = settings;
    }
}