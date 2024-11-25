import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import Config from '@/config';

const VERSION = '2.0';

const apiKeyBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const {
    url,
    method = 'GET',
    params,
  } = typeof args === 'string' ? { url: args } : args;
  const newParams = { ...params, api_key: Config.API_KEY };
  return fetchBaseQuery({
    baseUrl: `${Config.API_URL}/${VERSION}`,
  })({ url, method, params: newParams }, api, extraOptions);
};

export const apiRTK = createApi({
  baseQuery: apiKeyBaseQuery,
  endpoints: builder => ({
    getTopAlbums: builder.query<TopAlbumsResponse, string>({
      query: (artistName: string) => ({
        url: `?method=artist.gettopalbums&artist=${artistName}&format=json`,
        method: 'GET',
      }),
    }),
    getArtistInfo: builder.query<ArtistResponse, string>({
      query: (artistName: string) => ({
        url: `?method=artist.getinfo&artist=${artistName}&format=json`,
        method: 'GET',
      }),
    }),
    getAlbumInfo: builder.query<AlbumInfoResponse, string>({
      query: (mbid: string) => ({
        url: `?method=album.getinfo&mbid=${mbid}&format=json`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetTopAlbumsQuery,
  useGetAlbumInfoQuery,
  useGetArtistInfoQuery,
} = apiRTK;
