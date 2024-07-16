export const useComplaintStore = defineStore('complaint', () => {
    const headers = ref([
      {
        key: 'complaint',
        sortable: false,
        title: 'Complaint',
      },
      { key: 'date', sortable: false, title: 'Date' },
      { key: 'driver', sortable: false, title: 'Driver Name' },
      { key: 'actions', sortable: false, title: '', align: 'end' },
    ]);
  
    const complaint = ref<Complaint>(initComplaint());
  
    const complaints = ref<Complaint[]>([]);
  
    return {
        complaint,
        complaints,
  
      headers,
    };
  });
  