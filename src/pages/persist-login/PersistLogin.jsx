import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth, useLocalStorage } from 'hooks';
import { useLogin } from 'hooks/useLogin';
import { MutatingDots } from 'react-loader-spinner';

const PersistLoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const login = useLogin();
  const { auth } = useAuth();
  const [ session ] = useLocalStorage('session', '');

  useEffect(() => {
      let isMounted = true;

      const relogin = async () => {
        try {
          await login();
        }
        catch (err) {
          console.error(err);
        }
        finally {
            isMounted && setIsLoading(false);
        }
      }

      !auth?.accessToken && !session?.user?.expired ? relogin() : setIsLoading(false);

      return () => isMounted = false;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      <>
          {isLoading
            ? <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <MutatingDots 
                  height='100'
                  width='100'
                  color='#AE9AFF'
                  secondaryColor= '#AE9AFF'
                  radius='12.5'
                  ariaLabel='mutating-dots-loading'
                  wrapperStyle={{}}
                  wrapperClass=''
                  visible={true}
                />
            </div>
            : <Outlet />
          }
      </>
  );
}

export default PersistLoginPage;