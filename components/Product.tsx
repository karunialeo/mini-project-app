import React, { useState, useEffect } from "react";

import ProductItem from "./ProductItem";
import { View, Text } from "../components/Themed";
import { FlatList } from "react-native";
import { API } from "../config/api";

export default function Product() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Create Function to fetch
  const getProduct = () => {
    setIsLoading(true);
    API.get("/product")
      .then((res) => {
        setProduct(res.data.data);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Error Fetch Data");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={product}
        renderItem={({ item }) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
