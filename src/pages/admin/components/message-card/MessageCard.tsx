import axios from "axios";
import "./message-card.scss";
import domain from "../../../../statics/domain";
import { XOctagon } from "react-bootstrap-icons";

function MessageCard({ data, open, updateMessages }: PropsType) {
  return (
    <div
      className="message-card"
      onClick={() => {
        axios
          .get(domain(`messages/read/${data._id}`))
          .then((res) => {
            open(data);
            updateMessages(res.data);
          })
          .catch(() => {});
      }}
    >
      <div className="name-email-container">
        <div className="name">{data.name}</div>
        <div className="email">{data.email}</div>
      </div>
      <div className="org-phone-container">
        <div className="org">{data.organization}</div>
        <div className="phone">{data.phone}</div>
      </div>
      <div className="subject">{data.subject}</div>
    </div>
  );
}

type PropsType = {
  data: MessageType;
  open: React.Dispatch<React.SetStateAction<MessageType | undefined>>;
  updateMessages: React.Dispatch<
    React.SetStateAction<MessageType[] | undefined>
  >;
};

export type MessageType = {
  _id: string;
  name: string;
  seen: boolean;
  organization?: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default MessageCard;
