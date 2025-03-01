import './App.css'

function App() {
  return (
    <>
      <body className="theme-1">
      <div className="container">
        <div className="cal-header">
          <h2>calc</h2>
          <div className="theme">
            <p>THEME</p>
            <div className="theme-box">
              <p className="btn-index"><a  href="/calculator/index.html">1</a>&nbsp;&nbsp;&nbsp;<a href="/calculator/theme2.html">2</a>&nbsp;&nbsp;&nbsp;<a href="/calculator/theme3.html">3</a></p>
              <div className="theme-area">
                <div className="theme-area-Dred"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="cal-main">
          <div className="cal-output">
            <div className="cal-output-txt">
              <h5 className="hesapSonuc"></h5>
            </div>
          </div>
          <div className="cal-buttons-area">
            <div className="buttons">
              <button>
                <p>7</p>
              </button>
              <button>
                <p>8</p>
              </button>
              <button>
                <p>9</p>
              </button>
              <button className="del-button">
                <p>DEL</p>
              </button>
              <button>
                <p>4</p>
              </button>
              <button>
                <p>5</p>
              </button>
              <button>
                <p>6</p>
              </button>
              <button>
                <p>+</p>
              </button>
              <button>
                <p>1</p>
              </button>
              <button>
                <p>2</p>
              </button>
              <button>
                <p>3</p>
              </button>
              <button>
                <p>-</p>
              </button>
              <button>
                <p>.</p>
              </button>
              <button>
                <p>0</p>
              </button>
              <button>
                <p>/</p>
              </button>
              <button>
                <p>*</p>
              </button>
            </div>
            <div className="last-buttons">
              <div className="reset-button">
                <button>
                  <h3>RESET</h3>
                </button>
              </div>
              <div className="conclusion">
                <button>
                  <h3>=</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </>
  )
}

export default App
