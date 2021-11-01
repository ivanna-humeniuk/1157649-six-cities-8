import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Header from '../header/header';
import './not-found-screen.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray">
      <Header authorizationStatus={AuthorizationStatus.NoAuth}/>

      <main className="page__main">
        <section className="not-found">
          <h1>404. Page not found</h1>
          <Link to={AppRoute.Main}>Return to Home page</Link>
        </section>
      </main>
    </div>
  );
}

export default NotFoundScreen;
