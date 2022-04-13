import React, { useState, useEffect } from "react";

import CustomerItem from "./CustomerItem";
import { View, Text } from "../components/Themed";
import { FlatList } from "react-native";
import { expAPI, API } from "../config/api";
import axios from "axios";

export default function Customer() {
  const [customer, setCustomer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Create Function to fetch
  const getCustomer = () => {
    setIsLoading(true);
    API.get("/customer")
      .then((res) => {
        setCustomer(res.data.data);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Error Fetch Data");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCustomer();
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
        data={customer}
        renderItem={({ item }) => <CustomerItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
