import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import experienceQuery, { experienceName, experienceReducer } from "../../server/query/experience";
import portfolioQuery, { portfolioName, portfolioReducer } from "../../server/query/portfolio";
import usersQuery, { usersName, usersReducer } from "../../server/query/users";
import { educationName, educationReducer } from "../slices/education";
import { skillName, skillReducer } from "../slices/skills";
import authQuery, { authAccountName, authAccountReducer } from "../../server/query/auth";
import  { authName, authReducer } from "../slices/auth";


const reducer = {
  [authName]: authReducer,
  [skillName]: skillReducer,
  [educationName]: educationReducer,
  [portfolioName]: portfolioReducer,
  [experienceName]: experienceReducer,
  [usersName]: usersReducer,
  [authAccountName]: authAccountReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([portfolioQuery.middleware, experienceQuery.middleware, usersQuery.middleware,  authQuery.middleware]),
});

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node,
};

export default StoreProvider;
