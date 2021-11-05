import {Redirect} from 'react-router-dom';
import {toast} from 'react-toastify';
import {ChangeEvent, FormEvent, useCallback, useState} from 'react';
import Header from '../header/header-connected';
import {AppRoute, AuthStatus, PASSWORD_ERROR_MESSAGE, PASSWORD_REG_EXP, TOAST_CLOSE_TIME} from '../../const';
import {AuthData} from '../../types/users';

export type LoginScreenProps = {
  onLogout: ({email,password} :AuthData) => void;
  authStatus: AuthStatus;
  authLoading: boolean;
};

function LoginScreen(props: LoginScreenProps): JSX.Element {
  const {authStatus, onLogout, authLoading} = props;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleEmailInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setEmail(value);
  }, []);

  const handlePasswordInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setPassword(value);
    setIsValid(PASSWORD_REG_EXP.test(value));
  }, []);

  const handleSubmitForm = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(isValid) {
      onLogout({email,password});
    } else {
      toast.error(PASSWORD_ERROR_MESSAGE, {autoClose: TOAST_CLOSE_TIME});
    }
  }, [isValid, onLogout, email, password]);

  if(authStatus === AuthStatus.Auth) {
    return <Redirect to={AppRoute.Main}/>;
  }

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmitForm}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  value={email}
                  onChange={handleEmailInput}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  value={password}
                  onChange={handlePasswordInput}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button disabled={authLoading} className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
