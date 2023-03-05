import { useAuth } from './useAuth';

const useLogout = () => {
    const { auth, setAuth } = useAuth();

    const logout = async () => {
        localStorage.setItem('session', JSON.stringify({firstName: auth?.firstName, lastName: auth?.lastName}));
        setAuth({});
    }

    return logout;
}

export { useLogout };