import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'efdb6d4d17msh1257f81c80c941dp1bbdc2jsn95dfdfb8673b',
//       'X-RapidAPI-Host': 'shazam-api7.p.rapidapi.com'
//     }
//   };
  
  // fetch('https://shazam-api7.p.rapidapi.com/search', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
  // https://spotify81.p.rapidapi.com
  // 'X-RapidAPI-Key','efdb6d4d17msh1257f81c80c941dp1bbdc2jsn95dfdfb8673b'
  // /top_200_tracks

    export const shazamCoreApi = createApi({
        reducerPath:"shazamCoreApi",
        baseQuery:fetchBaseQuery({
            baseUrl:"https://shazam.p.rapidapi.com",
            prepareHeaders:(headers)=>{
              headers.set('X-RapidAPI-Key' , 'efdb6d4d17msh1257f81c80c941dp1bbdc2jsn95dfdfb8673b',)  ;
              return headers;
            },
        }),
        endpoints:(builder)=>({
            getTopCharts:builder.query({query:()=>'/charts/track?locale=en-US&pageSize=20&startFrom=0'}),
            getSongDetails:builder.query({query: ({songid})=>`songs/get-details?key=${songid}&locale=en-US`}),
            getSongRelated:builder.query({query: ({songid})=>`songs/list-recommendations?key=${songid}&locale=en-US`}), 
            getArtistDetails: builder.query({query:(artistId)=>`/artists/get-details?id=${artistId}&l=en-US`}),             
        }),      
    });

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,

    } = shazamCoreApi;