// {
//   "product": "Pirinc",
//   "user": "beko",
//   "purchase_case": "home",
//   "price": 30,
//   "createdAt": "2023-06",
//   "updatedAt": "2023-06"
// }

type ExpenseColumnType = {
  title: string
  dataIndex: string
  key: string
}

export const ExpensesColumns: ExpenseColumnType[] = [
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Purchase Case',
    dataIndex: 'purchase_case',
    key: 'purchase_case',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt', // FIX: fix this columns as snake case
    key: 'createdAt',
  },
  // {
  //   title: 'Actions',
  //   dataIndex: 'actions',
  //   key: 'actions',
  // },
]
