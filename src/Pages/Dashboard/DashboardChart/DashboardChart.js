import React, {useState, useEffect} from 'react'



 export default  function DashboardChart({getRevenue,Card,Bar}) {
    const [revenueData, setRevenueData] = useState({
      labels: [],
      datasets: []
    });
    useEffect(() => {
      getRevenue().then((res) => {
        const labels = res.carts.map((cart) => {
          return `User-${cart.userId}`;
        });
        const data = res.carts.map((cart) => {
          return cart.discountedTotal;
        });
        const dataSource = {
          labels,
          datasets: [
            {
              label: 'Revenue',
              data: data,
              backgroundColor: 'rgba(255, 0, 0, 1)'
            }
          ]
        };
        setRevenueData(dataSource);
      });
    }, []);
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Order Revenue'
        }
      }
    };
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ];

    return (
      <Card style={{width:500, height:250}} >
        <Bar options={options} data={revenueData} />
      </Card>
    );
  }