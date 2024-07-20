export const useDriverStore = defineStore('driver', () => {
  const headers = ref([
    {
      key: 'name',
      sortable: false,
      title: 'Name',
    },
    { key: 'phonenumber', sortable: false, title: 'Phone Number' },
    { key: 'status', sortable: false, title: 'Status' },
    { key: 'actions', sortable: false, title: '', align: 'end' },
  ]);

  const driver = ref<Driver>(initDriver());

  const drivers = ref<Driver[]>([]);

  const reset = () => driver.value = initDriver()

  const list = async () : Promise<Driver[]> => {
    const res : Driver[] = await api('/auth/getDeliveryWorker') as Driver[]

    drivers.value = res
    
    return drivers.value
  }

  const listActive = async () : Promise<Driver[]> => {
    const res : Driver[] = await api('/auth/getActiveDeliveryWorkers') as Driver[]
  
    drivers.value = res

    return drivers.value
  
  }

  const get = async (id: number) : Promise<Driver> => {
    const res : any = await api(`/auth/getUserInfo/${id}`)

    driver.value = res?.user?.[0]

    driver.value.complaints = res?.complaints
    
    return driver.value
  }

  const update = async (id: number) : Promise<void> => {
    await api(`/auth/updateDelivery/${id}`, {
      method: 'POST',
      body: driver.value
    })
  }

  const create = async () : Promise<void> => {
    await api(`/auth/AddAccountDelivery`, {
      method: 'POST',
      body: driver.value
    })
  }

  const remove = async (id: number) : Promise<void> => {
    await api(`/auth/AddAccountDelivery`, {
      method: 'DELETE'
    })
  }

  return {
    driver,
    drivers,

    headers,

    reset,
    listActive,
    list,
    get,
    update,
    create,
    remove
  };
});
