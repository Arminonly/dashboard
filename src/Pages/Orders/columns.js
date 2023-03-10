

export   const  columns=[
  {
    title: 'Title',
    dataIndex: 'title'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    render: value =>
      <span>
        ${value}
      </span>
  },
  {
    title: 'DiscountedPrice',
    dataIndex: 'discountedPrice',
    render: value =>
      <span>
        ${value}
      </span>
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity'
  },
  {
    title: 'Total',
    dataIndex: 'total'
  }
]