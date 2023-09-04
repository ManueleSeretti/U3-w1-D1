import "./App.css";
import ButtonComponent from "./component/ButtonComponent";
import ImageComponent from "./component/ImageComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent text="clicca il primo bottone" />
      <ButtonComponent text="clicca il secondo bottone" />
      <ImageComponent
        src="https://images.unsplash.com/photo-1683009680116-b5c04463551d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="deserto"
        style={{ width: "500px" }}
      />
    </div>
  );
}

export default App;
