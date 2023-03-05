import { useAuth } from './useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'store/auth';
import jwtDecode from 'jwt-decode';
import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';
import { DataStatusEnum } from 'common/enums';

const useLogin = () => {
    const { setAuth } = useAuth();
    const dispatch = useDispatch();
    const { tokens, status } = useSelector(state => state.auth);
    const [ session ] = useLocalStorage('session', '');

    const login = async () => {
        await dispatch(signIn({email: session?.email, password: atob(session?.login)}));
    }

    useEffect(() => {
        if(status === DataStatusEnum.SUCCESS) {
            const jwt = jwtDecode(tokens?.accessToken);

            setAuth({
                    firstName: session?.firstName,
                    lastName: session?.lastName,
                    email: session?.email,
                    password: atob(session?.login),
                    roles: jwt?.roles,
                    accessToken: tokens?.accessToken
            });
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    return login;
}

export { useLogin };