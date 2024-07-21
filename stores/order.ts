export const useOrderStore = defineStore('order', () => {

  const toasterStore = useToasterStore()

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
    
    // ready from restaurant but not assigned to any driver
    const orders = ref<Order[]>([]);
  
    // ready and assigned but not confirmed from driver
    const assignedOrders = ref<Order[]>([])
    
    // ready and assigned and confirmed from driver => in progress
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

    const listAssigned = async () : Promise<Order[]> => {
      const res : Order[] = await api('/auth/AllOrder_Ready_ForMangerDelivery') as Order[]
      
      assignedOrders.value = res

      return assignedOrders.value
    }

    const get = async (id: number) : Promise<Order> => {
      const res : any = await api(`/auth/getOrderDetails/${id}`)

      order.value = res

      return order.value
    }

    const assign = async (driverId: number, orderId: number) : Promise<void> => {
      await api(`/auth/AssignOrderToDelivery/${orderId}/${driverId}`, {
        method: 'POST'
      })

      // re-list
      await list()
      await listAssigned()

      toasterStore.showSuccessMsg('Order Assigned Successfully!')
    }

    const getPosition = async () => {
      // return await api('')
      return {
        x: 10,
        y: 100
      }
    }

    return {
      order,
      orders,
      activeOrders,
      assignedOrders,
  
      headers,

      list,
      listUnderDelivery,
      listAssigned,
      get,
      assign,
      getPosition
    };
  });
  