import {useCallback} from 'react';
import {useLocation, Link} from 'react-router-dom';
import Logo from '../logo/logo';
import {AppRoute, AuthStatus} from '../../const';
import {AuthInfo} from '../../types/users';

type HeaderProps = {
  authInfo: AuthInfo | null;
  authStatus: AuthStatus;
  onLogout: () => void;
}

function Header(props: HeaderProps): JSX.Element {
  const {authStatus, authInfo, onLogout} = props;
  const {pathname} = useLocation();
  const isLogin = pathname === AppRoute.Login;
  const handleLogoutLink = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    onLogout();
  }, [onLogout]);

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
                      <a className="header__nav-link header__nav-link--profile" href="/">
                        <div className="header__avatar-wrapper user__avatar-wrapper"/>
                        <span className="header__user-name user__name">{authInfo?.email}</span>
                      </a>
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

export default Header;
