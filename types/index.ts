export interface Driver {
    id?: number
    name: string
    email: string
    password: string
    password_confirmation: string
    phone: string
}

export interface Complaint {
    id?: number
    complaint: string
    created_at: string
    driver_name?: string
}