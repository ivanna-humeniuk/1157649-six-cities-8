import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className="spinner">
      <div className="lds-ripple">
        <div className="circle"/>
        <div className="circle"/>
      </div>
    </div>
  );
}

export default LoadingScreen;
