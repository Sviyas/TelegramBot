// ? fetch users info
export interface botMessage {
  update_id: number;
  message: {
    message_id: number;
    from: {
      id: number;
      is_bot: boolean;
      first_name: string;
      username: string;
      language_code: string;
    };
    chat: {
      id: number;
      first_name: string;
      username: string;
      type: string;
    };
    date: number;
    text: string;
  };
}

export interface TGbotMessage {
  update: {
    update_id: number;
    message: {
      message_id: number;
      from: {};
      chat: {};
      date: number;
      text: string;
    };
  };
}
