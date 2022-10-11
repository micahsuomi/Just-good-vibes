export type Post = {
  fields: {
    title: string;
    slug: string;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    intro: string;
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    description: string;
    readingTime: string;
  };
  sys: {
    id: string;
    createdAt: string;
  };
}

export type Posts = {
  posts: [Post];
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
  }
}

export type GalleryPhotos = {
  gallery: [GalleryPhoto];
}
export interface LayoutProps {
  children: any;
}
