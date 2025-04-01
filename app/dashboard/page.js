"use client";
import { useEffect, useState } from "react";
import mock_products from "../data/mock_orders";
import CookingMethodSelect from "@/app/dashboard/components/CookingMethodSelect";

export default function TrackPage() {
  const products = mock_products;
  const [pName, setPName] = useState();
  const [pList, setPList] = useState([]);

  const [choosePName, setChoosePName] = useState();
  const [choosePList, setChoosePList] = useState([]);
  const [method, setMethod] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const selectBox = item => {
    setSelectedProduct(item);
    setIsModalOpen(true);
  };

  const editMethod = () => {
    if (!selectedProduct || !selectedMethod) return;

    const newItem = {
      ...selectedProduct,
      method: selectedMethod,
    };

    setChoosePList(prevList => {
      const exists = prevList.some(
        item =>
          item.order_id === newItem.order_id && item.method === newItem.method
      );
      return exists ? prevList : [...prevList, newItem];
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMethod("");
    setSelectedProduct(null);
  };

  useEffect(() => {
    setPList(products);
  }, [products]);

  useEffect(() => {
    console.log(choosePList, "choosePList");
    console.log(method, "method");
  }, [choosePList]);

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">加入產品</h2>
            <p>
              你要「{selectedProduct?.item_name}」加入到{" "}
              <CookingMethodSelect
                onChange={e => setSelectedMethod(e.target.value)}
              />
              嗎？
            </p>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                取消
              </button>
              <button
                onClick={() => {
                  editMethod();
                  closeModal();
                }}
                className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-600"
              >
                確認加入
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-screen h-screen text-black font-mono text-xl">
        <main className="w-full h-full bg-[#2c4457] flex justify-center items-center">
          <div className="w-10/12 h-full bg-gray-200 p-10">
            <div>
              <h1 className="text-4xl">產品歸類</h1>
            </div>
            <div className="w-full h-full pt-20">
              <div className="flex h-full ">
                <div className="w-1/2 h-full px-4">
                  <p className="text-2xl">選擇產品</p>
                  <div className="flex gap-4 mb-4">
                    <CookingMethodSelect
                      onChange={e => setMethod(e.target.value)}
                    />
                    <input
                      className="w-3/4 border p-1 "
                      onChange={e => setChoosePName(e.target.value)}
                    ></input>
                  </div>
                  <div className="w-full max-h-[70vh] overflow-y-auto">
                    {choosePList
                      .filter(
                        item =>
                          (!choosePName ||
                            item.item_name.includes(choosePName)) &&
                          (!method || item.method === method)
                      )
                      .map((item, index) => (
                        <li
                          key={item.order_id}
                          className="flex justify-between p-4 border-b"
                        >
                          {item.item_name}
                          <div>
                            <button
                              className="w-20 h-10 bg-red-200 rounded-2xl cursor-pointer shadow-xl hover:bg-red-400"
                              onClick={() => {
                                setChoosePList(prev =>
                                  prev.filter(
                                    p =>
                                      !(
                                        p.order_id === item.order_id &&
                                        p.method === item.method
                                      )
                                  )
                                );
                              }}
                            >
                              移除
                            </button>
                          </div>
                        </li>
                      ))}
                  </div>
                </div>
                <div className="w-1/2 h-full px-4">
                  <p className="text-2xl ">產品列表</p>
                  <input
                    className="w-3/4 border p-1 mb-4"
                    onChange={e => setPName(e.target.value)}
                  ></input>

                  <div className="w-full max-h-[70vh] overflow-y-auto">
                    {pList
                      .filter(item => !pName || item.item_name.includes(pName))
                      .map((item, index) => {
                        const isSelected = choosePList.some(
                          p => p.order_id === item.order_id
                        );
                        return (
                          <li
                            key={item.order_id}
                            className={`flex justify-between p-4 border-b ${
                              isSelected ? "bg-red-400/80" : ""
                            }`}
                          >
                            {item.item_name}
                            <div>
                              <button
                                disabled={isSelected}
                                className={`w-20 h-10 rounded-2xl shadow-xl ${
                                  isSelected
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-green-200 hover:bg-green-400 cursor-pointer"
                                }`}
                                onClick={() => !isSelected && selectBox(item)}
                              >
                                加入至
                              </button>
                            </div>
                          </li>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
