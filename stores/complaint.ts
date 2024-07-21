export const useComplaintStore = defineStore('complaint', () => {
  const headers = ref([
    {
      key: 'complaint',
      sortable: false,
      title: 'Complaint',
    },
    { key: 'date', sortable: false, title: 'Date' },
    { key: 'order_id', sortable: false, title: 'Order ID' },
  ]);

  const complaint = ref<Complaint>(initComplaint());

  const complaints = ref<Complaint[]>([]);

  const list = async (): Promise<Complaint[]> => {
    const res: any = (await api('/auth/allComplaint'));

    complaints.value = res?.[0];

    return complaints.value;
  };

  const get = async (id: number): Promise<Complaint> => {
    const res: any = (await api(`/auth/DetailComplaint/${id}`));

    complaint.value = res?.[0]?.[0];

    return complaint.value;
  };

  return {
    complaint,
    complaints,

    headers,
    list,
    get
  };
});
