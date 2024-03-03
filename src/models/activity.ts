export interface ActivityList {
    total: number,
    limit: number,
    skip: 0,
    data: ActivityData[]
}

export interface ActivityData {
    id: number,
    title: string,
    created_at: Date,
    updated_at?: Date,
    email?: string
}

export interface ActivityDetail {
    id: number,
    title: string,
    created_at: string,
    todo_items: TodoItems[]
}

export interface TodoItems {
    id: number, 
    title: string,
    activity_group_id: number, 
    is_active: number,
    priority: string
}

export interface PatchActivityPayload {
    title: string
}

export interface addActivityPayload {
    title: string,
    email: string
}

export interface AddActivityResponse {
    created_at: string,
    updated_at: string,
    id: number,
    title: string,
    email: string
}