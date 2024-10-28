export interface GiphyResponse {
  data: Array<{
    images: {
      fixed_width: {
        url: string;
      };
    };
    title: string;
    rating: string;
  }>;
}
// export interface GiphyResponse {
//   data: [];
//   meta: {};
//   pagination: {};
// }

export interface Gif {
  image: string;
  title: string;
  rating: string;
}
