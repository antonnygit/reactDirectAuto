
function IsAuth (Component) {
    function isAuthenticated () {
        const token = localStorage.getItem('token');

        if (token) {
            return <Component />;
        } else {
            return window.location.href = '/login';
        }
    }

    return isAuthenticated;
}

export default IsAuth;