import AuthenticateProvider from "../contexts/AuthenticateProvider";

const AppProvider = ({ children }) => (
    <>
        <AuthenticateProvider>{ children }</AuthenticateProvider>
    </>
);

export default AppProvider;