import { push } from "connected-react-router";
import { routes } from '../containers/Router';
export const setMenu = (nameMenu, statusMenu) => {
    return {
        type: 'SET_MENU',
        payload: {
            nameMenu: nameMenu,
            statusMenu: statusMenu,
        }
    }
}