import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Logo from '../logo/logo';

const notFoundStyles = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
} as React.CSSProperties;

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main">
        <section style={notFoundStyles}>
          <h1>404. Page not found</h1>
          <Link to={AppRoute.Main}>Вернуться на главную</Link>
        </section>
      </main>
    </div>
  );
}

export default NotFoundScreen;
