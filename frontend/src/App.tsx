import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"

function App() {

  return (
    <>
      <title>Meta</title>
      <ToastContainer/>
      <Header />

      <main>
        <section id="sales">
          <div className="meta-container">

            <SalesCard />

          </div>
        </section>
      </main>
    </>
  )

}

export default App
