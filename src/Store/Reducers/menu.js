import {
  FETCH_MODULES_MENU,
  MENU_PATH_SELECTION,
  ROUTE_FINDING
} from "../Actions/actionTypes";

const initialState = {
  modulesMenu: [],
  menuPathways: {
    first: "",
    icon: "",
    second: "",
    third: ""
  },
  route: {
    path: "",
    menuParams: "",
    displayField: ""
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MODULES_MENU:
      return {
        ...state,
        modulesMenu: action.modulesMenu
      };

    case MENU_PATH_SELECTION:
      return {
        ...state,
        menuPathways: {
          first: action.firstMenu,
          icon: action.icon,
          second: action.secondMenu,
          third: action.thirdMenu
        }
      };

    case ROUTE_FINDING:
      return {
        ...state,
        route: {
          path: action.path,
          menuParams: action.menuParams,
          displayField: action.displayField
        }
      };

    default:
      return state;
  }
};
