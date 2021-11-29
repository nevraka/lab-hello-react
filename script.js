// Once you link both React and ReactDOM libraries
// you will have access to two global variables `React` and `ReactDOM`

console.log(React);
console.log(ReactDOM);

// let h1 = React.createElement('h1', null, 'Hello React');

const Header = () => {
  return (
    <div class="header">
      <div class="header-icon">
        <img class="header-image" src="./src/images/ironhack-logo-xs.png" />
        <img class="header-image" src="./src/images/menu-top-xs.png" />
      </div>
      <div class="message-button">
        <h1 class="say-hello-message">Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library,become a
          super Ninja developer
        </p>
        <div class="awasome">Awesome!</div>
      </div>
    </div>
  );
};

const Declarative = () => {
  return (
    <div>
      <img src="./src/images/icon1.png" />
      <div>React makes it painless to create interactive UIs</div>
    </div>
  );
};
const Components = () => {
  return (
    <div>
      <img src="./src/images/icon2.png" />
      <div>Build encapsulated components that manage their state</div>
    </div>
  );
};
const SingleWay = () => {
  return (
    <div>
      <img src="./src/images/icon3.png" />
      <div>A set of immutable values are passed to the component's.</div>
    </div>
  );
};

const Jsx = () => {
  return (
    <div>
      <img src="./src/images/icon4.png" />
      <div>Statically-typed'design to run on modern browsers.</div>
    </div>
  );
};

const MyApp = () => {
  return (
    <div>
      <Header />
      <div class="components">
        <Declarative />
        <Components />
        <SingleWay />
        <Jsx />
      </div>
    </div>
  );
};

ReactDOM.render(<MyApp />, document.querySelector('#app'));
