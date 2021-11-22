import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <div data-testid="spinner" className="spinner">
      <div className="lds-ripple">
        <div className="lds-ripple__circle lds-ripple__circle--inner"/>
        <div className="lds-ripple__circle lds-ripple__circle--outer"/>
      </div>
    </div>
  );
}

export default LoadingScreen;
