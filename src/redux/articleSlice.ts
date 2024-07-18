import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchArticles } from '../services/api'
import { Article } from '../interfaces/Article'

export interface ArticleState {
    data: Article[] | null,
    filteredArticles: Article[],
    latestArticle: Article | null;
    section:string[],
    loading:boolean,
    error:string | null
  }

const initialState: ArticleState = {
  data:[],
  section:[],
  filteredArticles: [],
  latestArticle:null,
  loading:false,
  error:""
}

export const getArticles = createAsyncThunk<Article[], void, { rejectValue: string }>(
    'articles',
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetchArticles();
        return response;
      } catch (error) {
        return rejectWithValue('Failed to fetch articles');
      }
    }
  );

export const articleSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    filterArticlesBySection: (state, action) => {
        const section = action.payload; 
        state.filteredArticles = state.data?state.data.filter(article => article.section === section):[];
    },
    findLatestArticle:(state,action)=>{
    const latestArticle = action.payload?action.payload.reduce((latest, article) => {
        const latestUpdated = new Date(latest.updated);
        const updatedDate = new Date(article.updated);
        return (updatedDate > latestUpdated) ? article : latest;
    }):null;
    state.latestArticle = latestArticle;
    }
  },
  extraReducers(builder){
    builder.addCase(getArticles.pending,(state)=>{
        state.loading=true;
    })
    .addCase(getArticles.fulfilled,(state,action)=>{
        state.loading=false;
        state.error = null;
        state.data = action.payload;
        state.section =  [...new Set(action.payload.map(item=>item.section))];
    })
    .addCase(getArticles.rejected,(state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.error=action.payload;
        state.data=[];
        state.section = [];
    })

  }
})

export const { findLatestArticle,filterArticlesBySection} = articleSlice.actions

export default articleSlice.reducer