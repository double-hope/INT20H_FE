import { useAuth } from './useAuth';

const useLogout = () => {
    const { auth, setAuth } = useAuth();

    const logout = async () => {
        localStorage.setItem('session', JSON.stringify({firstName: auth?.firstName, lastName: auth?.lastName}));
        setAuth({});
    }

    // add logout from backend side

    return logout;
}

export { useLogout };