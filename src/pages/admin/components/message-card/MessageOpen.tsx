import { MessageType } from "./MessageCard";

function MessageOpen({ data, close }: PropsType) {
  return (
    <div
      className="message-open"
      onClick={() => {
        close(undefined);
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
      <div className="message">{data.message}</div>
    </div>
  );
}

type PropsType = {
  data: MessageType;
  close: React.Dispatch<React.SetStateAction<MessageType | undefined>>;
};

export default MessageOpen;
