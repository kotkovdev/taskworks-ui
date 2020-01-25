export interface Message {
    id: number,
    user_id: number,
    task_id: number,
    message: string,
    status: number,
    completion: number,
    created_at: string,
    updated_at: string
}

export class Message implements Message {
    constructor(
        id: number,
        user_id: number,
        task_id: number,
        message: string,
        status: number,
        completion: number,
        created_at: string = null,
        updated_at: string = null
    ) {
        this.id = id;
        this.user_id = user_id;
        this.task_id = task_id;
        this.message = message;
        this.status = status;
        this.completion = completion;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}