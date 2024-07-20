export const useOrderStore = defineStore('order', () => {
    const headers = ref([
      {
        key: 'id',
        sortable: false,
        title: 'Order ID',
      },
      { key: 'order_price', sortable: false, title: 'Order Price' },
      { key: 'order_date', sortable: false, title: 'Order Date' },
      { key: 'delivery_cost', sortable: false, title: 'Delivery Cost' },
      { key: 'status', sortable: false, title: 'Order Status' },
      { key: 'paid', sortable: false, title: 'Paid' },
    ]);
  
    const order = ref<Order>({} as Order)
    const orders = ref<Order[]>([]);
  
    const activeOrders = ref<Order[]>([])

    const list = async () : Promise<Order[]> => {
      const res : any = await api('/auth/AllOrderForMangerDelivery')
  
      orders.value = res
      
      return orders.value
    }

    const listUnderDelivery = async () : Promise<Order[]> => {
      const res : Order[] = await api('/auth/AllOrder_UnderDelivery_ForMangerDelivery') as Order[]
      
      activeOrders.value = res

      return activeOrders.value
    }

    const get = async (id: number) : Promise<Order> => {
      const res : any = await api('/auth/AllOrderForMangerDelivery')
  
      order.value = res
      
      return order.value
    }

    return {
      order,
      orders,
      activeOrders,
  
      headers,

      list,
      listUnderDelivery,
      get
    };
  });
  