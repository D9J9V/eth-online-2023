interface Entry {
  ammount: number;
  user: string;
  minDescription: string;
  fullDescription: string;
  type: string;
}

interface Message {
  text: string;
  createdAt: admin.firestore.Timestamp;
  user: {
    _id: string | undefined;
    name: string | undefined;
    avatar: string | undefined;
  };
}
