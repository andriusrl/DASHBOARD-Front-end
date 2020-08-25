const initialState = {
    menu: {
        dashboard: false,
        exit: false,
        about: false,
        login: false,
    }
}

const MenuData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MENU': {
            return {
                menu: {
                    ...state.menu,
                    [action.payload.nameMenu]: action.payload.statusMenu,
                }
            }
        }
        default:
            return state;
    }
}

export default MenuData;