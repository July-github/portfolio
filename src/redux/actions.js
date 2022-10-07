import { actions } from './reducer'
import { selectZoom } from './selector'

export function transformToZoom(){

    return (dispatch, getState) => {
        return selectZoom(getState()).zoom
    }
}