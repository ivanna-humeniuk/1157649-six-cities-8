import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import './not-found-screen.css';
import Header from '../header/header';


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
