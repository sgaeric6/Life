export class ChatService {
  static sendMessage(from: string, to: string, message: string) {
    return {
      from,
      to,
      message,
      sentAt: new Date().toISOString(),
    };
  }

  static getMessages() {
    return [
      { from: 'Tolu', text: 'Hey! Want to join me at Lekki?' },
      { from: 'You', text: 'Sure, I am on my way.' },
      { from: 'Tolu', text: 'Perfect, see you there.' },
    ];
  }
}
