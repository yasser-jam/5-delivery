export const useDriverStore = defineStore('driver', () => {
  const toasterStore = useToasterStore();

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

  const reset = () => (driver.value = initDriver());

  const list = async (): Promise<Driver[]> => {
    const res: Driver[] = (await api('/auth/getDeliveryWorker')) as Driver[];

    drivers.value = res;

    return drivers.value;
  };

  const listActive = async (): Promise<Driver[]> => {
    const res: Driver[] = (await api(
      '/auth/getActiveDeliveryWorkers'
    )) as Driver[];

    drivers.value = res;

    return drivers.value;
  };

  const get = async (id: number): Promise<Driver> => {
    const res: any = await api(`/auth/getUserInfo/${id}`);

    driver.value = res?.user?.[0];

    driver.value.complaints = res?.complaints;

    return driver.value;
  };

  const update = async (id: number): Promise<void> => {
    await api(`/auth/updateDelivery/${id}`, {
      method: 'POST',
      body: driver.value,
    });

    // re-list
    await list();

    toasterStore.showSuccessMsg('Driver Updated Successfully!');
  };

  const create = async (): Promise<void> => {
    await api(`/auth/AddAccountDelivery`, {
      method: 'POST',
      body: driver.value,
    });

    // re-list
    await list();

    toasterStore.showSuccessMsg('Driver Created Successfully!');
  };

  const remove = async (id: number): Promise<void> => {
    await api(`/auth/Cancel_delivery_worker/${id}`, {
      method: 'POST',
    });

    // re-list
    await list();

    toasterStore.showSuccessMsg('Driver Removed Successfully!');
  };


  // get driver address

  interface Address {
    address_name: string
    x: number
    y: number
  }

  const driverAddress = ref<Address>({} as Address)

  const getPosition = async (id: number) => {
    const res =  await api(`/auth/getDeliveryAddresses/${id}`) as Address[]

    driverAddress.value = res?.[0]
    
    return driverAddress.value
  }

  return {
    driver,
    drivers,

    driverAddress,
    headers,

    reset,
    listActive,
    list,
    get,
    update,
    create,
    remove,
    getPosition
  };
});
