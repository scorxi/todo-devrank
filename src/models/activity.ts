export interface ActivityList {
    total: number,
    limit: number,
    skip: 0,
    data: ActivityData[]
}

export interface ActivityData {
    id: number,
    title: string,
    created_at: Date
}