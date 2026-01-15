import './App.css'

function App() {
  const openHadimkoy = () => {
    window.location.href =
      '/01_Yol2Hadimkoy20260114_3MX/App/index.html'
  }

  return (
    <div className="hadimkoy-page">
      <button className="hadimkoy-button" onClick={openHadimkoy}>
        Hadımkoy
      </button>
    </div>
  )
}

export default App
