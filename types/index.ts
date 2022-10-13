export type Review = {
  fields: {
    title: string;
    slug: string;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    rating: string;
    excerpt: string;
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    description: string;
  };
  sys: {
    id: string;
    createdAt: string;
  };
};

export type Reviews = {
  reviews: [Review];
};

export type ReviewItemProps = {
  review: Review;
}

export type ReviewDetailsProps = {
  review: Review;
};

export type Post = {
  fields: {
    title: string;
    slug: string;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    intro: string;
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    description: string;
    readingTime: string;
  };
  sys: {
    id: string;
    createdAt: string;
  };
};

export type Posts = {
  posts: [Post];
};

export interface PostItemProps {
  post: Post;
}

export type PostDetailsProps = {
  post: Post;
}

export type GalleryPhoto = {
  fields: {
    title: string;
    slug: string;
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    shortDescription: string;
    linkToInstagram: string;
  };
};

export type GalleryPhotos = {
  gallery: [GalleryPhoto];
};

export type GalleryPhotoDetailsProps = {
  photo: GalleryPhoto;
};

export type Event = {
  fields: {
    title: string;
    slug: string;
    eventDate: string;
    eventDescription: string;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    address: string;
    location: {
      lat: string;
      lon: string;
    };
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    intro: string;
    description: string;
  };
  sys: {
    id: string;
  };
};

export type Events = {
  events: [Event];
};

export type EventItemProps = {
  event: Event;
};

export type EventDetailsProps = {
  event: Event;
};
export type LayoutProps = {
  children: any;
};
