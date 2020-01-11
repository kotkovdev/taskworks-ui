export interface Report {
    id: number,
    title: string,
    description: string,
    attachments: string
}

export class Report implements Report {
    constructor(
        id: number,
        title: string,
        description: string,
        attachments: string
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.attachments = attachments;
    }
}