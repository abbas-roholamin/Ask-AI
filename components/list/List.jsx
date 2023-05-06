/** @format */

import React from "react";
import Item from "./Item";
import { FlatList } from "react-native";

function List({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.message.toString()}
      renderItem={({ item }) => <Item message={item.message} />}
      ref={(ref) => (this.flatList = ref)}
      onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
      onLayout={() => this.flatList.scrollToEnd({ animated: true })}
    />
  );
}

export default List;
