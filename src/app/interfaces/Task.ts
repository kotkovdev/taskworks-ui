export interface Task {
    id: number,
    title: string,
    status_id: number,
    user_id: number,
    report_id: number,
    project_id: number,
    description: string
}

export class Task implements Task {
    constructor(
        id: number,
        title: string,
        status_id: number,
        user_id: number,
        report_id: number,
        project_id: number,
        description: string
    ) {
        this.id = id;
        this.title = title;
        this.status_id = status_id;
        this.user_id = user_id;
        this.report_id = report_id;
        this.project_id = project_id;
        this.description = description;
    }
}