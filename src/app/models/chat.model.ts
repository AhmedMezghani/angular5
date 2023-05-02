/**
 * Group User List
 */
 export interface GroupUser {
    name: string;
    unread?: string;
  }

  /**
   * Chat User List
   */
  export interface ChatUser {
    image?: string;
    id?: number;
    content?: string;
    date?: Date;
    fromm?:number;
    too?:number;
    chat_box_id
  }

  /**
   * Chat Message List
   */
  export interface ChatMessage {
    align?: string;
    name?: any;
    profile?: any;
    message?: string;
    time?: string;
    image?: string[];
  }
