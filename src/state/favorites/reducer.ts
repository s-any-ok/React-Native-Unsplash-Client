import {Reducer} from 'redux';
import {FavoritesState, FavoritesActionTypes} from './types';

export const initialState: FavoritesState = {
  data: [],
};

const reducer: Reducer<FavoritesState> = (state = initialState, action) => {
  switch (action.type) {
    case FavoritesActionTypes.ADD_FAVORITE: {
      return {...state, data: [...state.data, action.payload]};
    }
    case FavoritesActionTypes.REMOVE_FAVORITE: {
      return {
        ...state,
        data: state.data.filter(element => element !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export {reducer as favoritesReducer};
