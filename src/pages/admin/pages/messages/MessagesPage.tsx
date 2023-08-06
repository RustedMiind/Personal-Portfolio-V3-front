import { useEffect, useState } from "react";
import MessageCard, {
  MessageType,
} from "../../components/message-card/MessageCard";
import axios from "axios";
import domain from "../../../../statics/domain";
import MessageOpen from "../../components/message-card/MessageOpen";

function MessagesPage() {
  const [messages, setMessages] = useState<undefined | MessageType[]>(
    undefined
  );
  const [opened, setopened] = useState<undefined | MessageType>(undefined);

  useEffect(() => {
    axios
      .get<MessageType[]>(domain("messages/unread"))
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.log("Error Fetching Messages ", err);
      });
  }, []);

  return (
    <div className="messages-page">
      <h2>Unseen Messages</h2>
      {messages
        ? messages.map((item) => (
            <MessageCard
              key={item._id}
              data={item}
              open={setopened}
              updateMessages={setMessages}
            />
          ))
        : null}
      {opened ? <MessageOpen data={opened} close={setopened} /> : null}
    </div>
  );
}

export default MessagesPage;
