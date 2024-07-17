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

  const list = async () : Promise<Driver[]> => {
    const res : any = await api('/auth/getDeliveryWorker')

    drivers.value = res
    
    return drivers.value
  }

  return {
    driver,
    drivers,

    headers,

    list
  };
});
