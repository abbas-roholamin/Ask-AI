/** @format */

import React, { useState } from "react";
import { View } from "react-native";
import { useAskMutation } from "../../redux/chat";
import Form from "../form/Form";
import Empty from "../Empty";
import List from "../list/List";

function Home() {
  const [input, setInput] = useState("");
  const [ask, response] = useAskMutation();
  const [messages, setMessages] = useState([]);

  const handleSubmit = async () => {
    setInput("");
    const history = [
      ...(messages.length > 0 ? messages : []),
      { user: "me", message: input },
    ];

    setMessages(history);
    const { data } = await ask(input);
    const { choices } = data;
    setMessages([
      ...history,
      {
        user: "bot",
        message: choices[0].message.content,
      },
    ]);
  };

  return (
    <View className="flex-1 gap-2 py-2 pb-4">
      <View className="justify-center gap-0 px-4 shrink">
        <View className="h-full shrink">
          {messages.length > 0 ? <List data={messages} /> : <Empty />}
        </View>

        <Form className="ml-0.5">
          <Form.Input value={input} handleChange={setInput} />
          <Form.Button handlePress={handleSubmit} />
        </Form>
      </View>
    </View>
  );
}

export default Home;
