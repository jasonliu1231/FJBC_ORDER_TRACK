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
  return (
    <div className="w-screen h-screen text-black font-mono font-bold">
      <main className="w-full h-full bg-[#2c4457] flex justify-center items-center">
        <div className="w-10/12 h-full bg-gray-200 p-10">
          <div>
            <h1 className="text-4xl">產品歸類</h1>
          </div>
          <div className="w-full h-full  pt-20">
            <div className="flex">
              <div className="w-1/2 text-2xl">
                <p>選擇產品</p>
                <option className=" border">
                  <option value="">全部</option>
                  <option value="套��">套��</option>
                  <option value="��排">��排</option>
                  <option value="����">����</option>
                  <option value="������">������</option>
                  <option value="其他">其他</option>
                </option>
              </div>

              <div className="w-1/2 text-2xl">產品列表</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
