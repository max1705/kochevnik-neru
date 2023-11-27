import { useEffect, useState } from 'react';

import { OrderContext } from '../contexts/OrderContext';

const OrderProvider = ({ children }: any) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    // setOrder(order);
    // console.log(order);
  }, [order]);

  return <OrderContext.Provider value={{ order, setOrder }}>{children}</OrderContext.Provider>;
};

export default OrderProvider;
