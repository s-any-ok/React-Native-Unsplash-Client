import { action } from 'typesafe-actions'
import { ImagesActionTypes, UnsplashItem } from './types'

export const fetchRequest = () => action(ImagesActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: UnsplashItem[]) =>
    action(ImagesActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) =>
    action(ImagesActionTypes.FETCH_ERROR, message)
