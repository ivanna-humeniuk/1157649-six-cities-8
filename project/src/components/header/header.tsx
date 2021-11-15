import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation, Link} from 'react-router-dom';
import Logo from '../logo/logo';
import {AppRoute, AuthStatus} from '../../const';
import {logoutAction} from '../../store/actions/api-actions';
import {getAuthInfo, getAuthStatus} from '../../store/auth-data/selectors';

function Header(): JSX.Element {
  const authInfo = useSelector(getAuthInfo);
  const authStatus = useSelector(getAuthStatus);
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  const isLogin = pathname === AppRoute.Login;

  const handleLogoutLink = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(logoutAction());
  }, [dispatch]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          {!isLogin && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authStatus === AuthStatus.Auth ? (
                  <>
                    <li className="header__nav-item user">
                      <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper"/>
                        <span className="header__user-name user__name">{authInfo?.email}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="/" onClick={handleLogoutLink}>
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </>
                ) : (
                  <li className="header__nav-item user">
                    <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile" >
                      <div className="header__avatar-wrapper user__avatar-wrapper"/>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
