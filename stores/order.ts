export const useOrderStore = defineStore('order', () => {
    const headers = ref([
      {
        key: 'id',
        sortable: false,
        title: 'Order ID',
      },
      { key: 'driver_name', sortable: false, title: 'Driver Name' },
      { key: 'status', sortable: false, title: 'Status' },
      { key: 'actions', sortable: false, title: '', align: 'end' },
    ]);
  
    // const driver = ref(initDriver());
  
    const orders = ref([]);
  
    return {
      orders,
  
      headers,
    };
  });
  