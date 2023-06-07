export interface Comments {
    _id: string;
    description: string;
    profile: {
      _id: string;
      name: string;
    };
  }

  export interface Post {
    _id: string;
    title: string;
    description: string;
    profile: {
        name: string;
    };
    comments: [];
    likes: string[];
    image: boolean;
    imageUrl: string
}