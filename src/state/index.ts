import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'

import { ImageState } from './images/types'
import imagesSaga from './images/sagas'
import { imagesReducer } from './images/reducer'

import { FavoritesState } from './favorites/types'
import { favoritesReducer } from './favorites/reducer'

export interface ApplicationState {
    images: ImageState
    favorites: FavoritesState
}

export const createRootReducer = () =>
    combineReducers({
        images: imagesReducer,
        favorites: favoritesReducer,
    })

export function* rootSaga() {
    yield all([fork(imagesSaga)])
}
