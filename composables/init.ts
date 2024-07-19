
export const initDriver = () : Driver => ({
    email: '',
    name: '',
    password: '',
    password_confirmation: '',
    phone: '',
    status: 'Inactive',
})

export const initComplaint = () : Complaint => ({
    complaint: '',
    created_at: ''
})