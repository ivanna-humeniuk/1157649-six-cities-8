import {Redirect} from 'react-router-dom';
import {toast} from 'react-toastify';
import {ChangeEvent, FormEvent, useCallback, useState} from 'react';
import Header from '../header/header-connected';
import {AppRoute, AuthorizationStatus, PASSWORD_ERROR_MESSAGE} from '../../const';
import {AuthData} from '../../types/users';

export type LoginScreenProps = {
  handleLogin: ({email,password} :AuthData) => void;
  authorizationStatus: AuthorizationStatus;
  authLoading: boolean;
};

const regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/);

function LoginScreen(props: LoginScreenProps): JSX.Element {
  const {authorizationStatus, handleLogin, authLoading} = props;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleEmailInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value.trim());
  }, []);

  const handlePasswordInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value.trim());
    setIsValid(regExp.test(value.trim()));
  }, []);

  const handleSubmitForm = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!isValid) {
      toast.error(PASSWORD_ERROR_MESSAGE, {autoClose: 2500});
    } else {
      handleLogin({email,password});
    }
  }, [isValid, handleLogin, email, password]);

  if(authorizationStatus === AuthorizationStatus.Auth) {
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
