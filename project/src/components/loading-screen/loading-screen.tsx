import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className="spinner">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
