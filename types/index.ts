export type ContentType = {
  sys: {
    contentType: {
      sys: {
        id: string;
      };
    };
  };
};

export type Review = {
  fields: {
    title: string;
    slug: string;
    thumbnail: ThumbnailImage;
    rating: string;
    excerpt: string;
    featuredImage: FeaturedImage;
    description: string;
  };
  sys: {
    contentType: ContentType;
    id: string;
    createdAt: string;
  };
};

export type Reviews = {
  reviews: [Review];
};

export type ReviewItemProps = {
  review: Review;
};

export type ReviewDetailsProps = {
  review: Review;
};

export type Post = {
  fields: {
    title: string;
    slug: string;
    thumbnail: ThumbnailImage;
    intro: string;
    featuredImage: FeaturedImage;
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
};

export type GalleryPhoto = {
  fields: {
    title: string;
    slug: string;
    featuredImage: FeaturedImage;
    shortDescription: string;
    linkToInstagram: string;
  };
  sys: {
    id: string;
    contentType: ContentType;
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
    thumbnail: ThumbnailImage;
    address: string;
    location: {
      lat: string;
      lon: string;
    };
    featuredImage: FeaturedImage;
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

export type ContentBodyProps = {
  bodyText: Document;
};

export type About = {
  map: any;
  fields: {
    title: string;
    slug: string;
    featuredImage: FeaturedImage;
    description: string;
  };
};

export type AboutPageProps = {
  about: About;
};

export type ThumbnailImage = {
  fields: {
    file: {
      url: string;
    };
    title: string;
  };
};

export type FeaturedImage = {
  map: Function;
  fields: {
    file: {
      url: string;
    };
    title: string;
  };
};

export type MixedContentTypes = {
  sys: any;
  filter: any;
  post: [Review] | [Post] | [Event] | [GalleryPhoto];
};

export type Home = {
  [x: string]: any;
  fields: {
    title: string;
    slug: string;
    description: string;
    featuredImage: FeaturedImage;
    latestPosts: MixedContentTypes;
  };
  sys: {
    id: string;
  };
};

export type HomeItemsProps = {
  homeItems: Home;
};

// UI types

export type HeaderProps = {
  showOverlay: Function;
};

export type ToggleBarProps = {
  openNavItems: Function;
  toggle: boolean;
};

export type OverlayBackgroundProps = {
  open: boolean;
};

export type LayoutProps = {
  children: any;
};

export type Form = {
  fields: {
    title: string;
    description: string;
    formToken: string;
  };
  sys: {
    id: string;
  };
};
export type Contact = {
  formItems: [Form];
};
export type ContactFormProps = {
  token: string;
};
