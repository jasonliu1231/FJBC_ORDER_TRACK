"use client";
import { useEffect, useState } from "react";

const mock = [
  {
    order_id: 1,
    item_name: "套餐",
    quantity: 1,
    status: "counter_received",
  },
  {
    order_id: 2,
    item_name: "雞排",
    quantity: 4,
    status: "counter_received",
  },
  {
    order_id: 3,
    item_name: "漢堡",
    quantity: 2,
    status: "counter_received",
  },
  {
    order_id: 4,
    item_name: "咖哩飯A",
    quantity: 1,
    status: "counter_received",
  },
  {
    order_id: 5,
    item_name: "咖哩飯B",
    quantity: 3,
    status: "counter_received",
  },
  {
    order_id: 6,
    item_name: "咖哩飯C",
    quantity: 1,
    status: "counter_received",
  },
  {
    order_id: 7,
    item_name: "咖哩飯D",
    quantity: 1,
    status: "counter_received",
  },
  {
    order_id: 8,
    item_name: "咖哩飯E",
    quantity: 1,
    status: "counter_received",
  },
  {
    order_id: 9,
    item_name: "咖哩飯F",
    quantity: 1,
    status: "counter_received",
  },
  {
    order_id: 10,
    item_name: "咖哩飯G",
    quantity: 1,
    status: "counter_received",
  },
];

export default function TrackPage() {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    setOrderList(mock);
  }, []);

  // 分類
  const counterOrders = orderList.filter(
    item => item.status === "counter_received"
  );
  const kitchenOrders = orderList.filter(
    item => item.status === "kitchen_received"
  );
  const completedOrders = orderList.filter(
    item => item.status === "kitchen_completed"
  );
  const servedOrders = orderList.filter(
    item => item.status === "counter_served"
  );

  return (
    <div className="w-screen h-screen text-black font-mono font-bold">
      <main className="w-full h-full bg-[#2c4457] grid grid-cols-2 grid-rows-2 gap-2 p-4">
        {/* 櫃台接單 */}
        <div className="bg-amber-200 p-4 rounded-xl overflow-y-auto">
          <h2 className="text-xl mb-2">櫃台接單</h2>
          <ul className="space-y-1">
            {counterOrders.map((item, index) => (
              <li key={item.order_id} className="bg-white p-2 rounded shadow">
                <div>
                  #{item.order_id} - {item.item_name} x {item.quantity}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 廚房接單 */}
        <div className="bg-fuchsia-200 p-4 rounded-xl overflow-y-auto">
          <h2 className="text-xl mb-2">廚房接單</h2>
          <ul className="space-y-1">
            {kitchenOrders.map((item, index) => (
              <li key={item.order_id} className="bg-white p-2 rounded shadow">
                <div>
                  #{item.order_id} - {item.item_name} x {item.quantity}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 廚房出單 */}
        <div className="bg-lime-200 p-4 rounded-xl overflow-y-auto">
          <h2 className="text-xl mb-2">廚房完成</h2>
          <ul className="space-y-1">
            {completedOrders.map((item, index) => (
              <li key={item.order_id} className="bg-white p-2 rounded shadow">
                <div>
                  #{item.order_id} - {item.item_name} x {item.quantity}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 櫃台出餐 */}
        <div className="bg-blue-200 p-4 rounded-xl overflow-y-auto">
          <h2 className="text-xl mb-2">櫃台出餐</h2>
          <ul className="space-y-1">
            {servedOrders.map((item, index) => (
              <li key={item.order_id} className="bg-white p-2 rounded shadow">
                <div>
                  #{item.order_id} - {item.item_name} x {item.quantity}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
