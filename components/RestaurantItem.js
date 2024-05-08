import { View, Text, Image } from "react-native";
import React from "react";

export default function RestaurantItem() {
  return (
    <View>
      <Text>RestaurantItem</Text>
      {/* Resturant image*/}
      <RestaurentImage />
      {/* Resturant Info*/}
    </View>
  );
}

const RestaurentImage = () => (
  <>

  <Image
    source={{
      uri: "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
    }}
   
    style={{ width: "100%", height: 180 }}
  />
  </>
);
