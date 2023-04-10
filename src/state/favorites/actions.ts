import {action} from 'typesafe-actions';
import {UnsplashItem} from '../images/types';
import {FavoritesActionTypes} from './types';

export const addFavorite = (payload: UnsplashItem) =>
  action(FavoritesActionTypes.ADD_FAVORITE, payload);
export const removeFavorite = (payload: UnsplashItem) =>
  action(FavoritesActionTypes.REMOVE_FAVORITE, payload);
