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
    updated_at?: Date
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