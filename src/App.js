import "./App.css";
function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          className="header__img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1C92QvZvSrK2olHTKZDkErDpg4Pk1XFsf9w&usqp=CAU"
        />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="http://lestatus.ru/wp-content/uploads/%D0%A4%D1%8C%D0%BE%D1%80%D0%B4%D1%8B-%D0%9D%D0%BE%D1%80%D0%B2%D0%B5%D0%B3%D0%B8%D0%B8.jpg" />
        </div>
        <div>ava+descr</div>
        <div>
          my posts
          <div>new post</div>
        </div>
        <div>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
