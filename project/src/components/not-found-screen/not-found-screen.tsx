import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Header from '../header/header';
import './not-found-screen.css';

export type NotFoundScreenProps = {
  authorizationStatus: boolean;
};

function NotFoundScreen(props: NotFoundScreenProps): JSX.Element {
  const {authorizationStatus} = props;
  return (
    <div className="page page--gray">
      <Header authorizationStatus={authorizationStatus}/>

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
