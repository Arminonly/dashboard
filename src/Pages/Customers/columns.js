
import { Avatar} from 'antd';
export  const columns = [
  {
    title: 'Photo',
    dataIndex: 'image',
    render: link => {
      return <Avatar src={link} />;
    }
  },
  {
    title: 'FirstName',
    dataIndex: 'firstName'
  },
  {
    title: 'LastName',
    dataIndex: 'price'
  },
  {
    title: 'E-mail',
    dataIndex: 'email'
  },
  {
    title: 'Phone',
    dataIndex: 'phone'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    render: (address) => {
      return (
        <span>
          {' '}{address.address}, {address.city}
        </span>
      );
    }
  }
]