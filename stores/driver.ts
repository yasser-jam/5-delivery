export const useDriverStore = defineStore('driver', () => {
  const headers = ref([
    {
      key: 'name',
      sortable: false,
      title: 'Name',
    },
    { key: 'phonenumber', sortable: false, title: 'Phone Number' },
    { key: 'status', sortable: false, title: 'Status' },
    { key: 'cancel_count', sortable: false, title: 'Cancel Count' },
    { key: 'points', sortable: false, title: 'Points' },
    { key: 'actions', sortable: false, title: '', align: 'end' },
  ]);

  const driver = ref<Driver>(initDriver());

  const drivers = ref<Driver[]>([]);

  const list = async () : Promise<Driver[]> => {
    const res = await api('/drivers')

    return res
  }

  return {
    driver,
    drivers,

    headers,

    list
  };
});
