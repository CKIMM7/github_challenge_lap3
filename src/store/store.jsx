import { createSlice } from '@reduxjs/toolkit';

const artsSlice = createSlice({
  name: 'arts',
  initialState: {
      userRepos: [],
      pageNum: 1,
      nextPage: false,
      arts: [],
      artist: [],
      categories:[],
      artistImage: '',
      searchValue: '',
      textInput: '' ,
      searchArray: [],
      isLoading: false
  },
  reducers: {
    setUserRepos(state, action) {
      state.userRepos = action.payload;
    },

    setPageNum(state, action) {
      state.pageNum = state.pageNum + action.payload
    },

    getMoreArts(state, action) {
        console.log(state.nextPage)
        state.nextPage = !state.nextPage
      },

    setArts(state, action) {
        console.log(action.payload)
        state.arts = action.payload
      },

    setArtist(state, action) {
        console.log(action.payload)
        state.artist = action.payload
    },

    setCategories(state, action) {
      console.log(action.payload)
      state.categories = action.payload
    },

    setArtistImage(state, action) {
      console.log(action.payload)
      state.artistImage = action.payload
    },

    setTextInput(state, action) {
      console.log(action.payload)
      state.textInput = action.payload
    },
  
    setSearchValue(state, action) {
      console.log(action.payload)
      state.searchValue = action.payload
    },

    setSearchArray(state, action) {
      //console.log(action.payload)
      state.searchArray = action.payload
    },

    setIsLoading(state, action) {
      //console.log(action.payload)
      state.isLoading = action.payload
    }

  },
});

export const artsActions = artsSlice.actions;

export default artsSlice;
