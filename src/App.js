import "./App.css";
import Layout from "./Pages/Layout";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorProvider from "./context/ErrorProvider";
function App() {
  return (
    <>
      <ErrorProvider>
        <Layout />
      </ErrorProvider>
    </>
  );
}

export default App;
