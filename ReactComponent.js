function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  const root = ReactDOM.createRoot(document.getElementById('target'));
  const element = <Welcome name="world" />;
  root.render(element);