export const useToasterStore = defineStore('toaster', () => {


    const msg = ref<string>('')
    const showToaster = ref<boolean>(false)
    const toasterStatus = ref<'success' | 'error'>('success')

    const showMsg = (message: string) => {
       showToaster.value = true
       
       msg.value = message
    }

    const showSuccessMsg = (message: string) => {
        toasterStatus.value = 'success'
        
        showMsg(message)
     }

     const showErrorMsg = (message: string) => {
        toasterStatus.value = 'error'
        
        showMsg(message)
     }

    return {
        msg,
        showToaster,
        toasterStatus,

        showSuccessMsg,
        showErrorMsg
    }
})