function AppHeader() {
    return (
      <header className="ui fixed menu">
        <nav className="ui container">
          <a href="#" className="header item">
            <img
              className="logo"
              src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png"
            />
            Lista kontaktów
          </a>
          <div className="header item">
            <button className="ui button">Dodaj</button>
          </div>
        </nav>
      </header>
    );
  }
  
  function ContactsList() {
    return (
      <ul className="ui relaxed divided list selection">
        <ContactItem
          login="Janusz"
          name="Janusz Wąsacz"
          department="JavaScript Developer"
        />
        <ContactItem
          login="typeofweb2"
          name="Brian"
          department="Human Resources"
        />
        <ContactItem
          login="typeofweb3"
          name="Rick"
          department="QA"
        />
      </ul>
    );
  }
  

  function UserAvatar({ login }) {
  
    let avt;
  
    if (login.includes("@")) {
  
      avt = "https://s.gravatar.com/avatar/90f803814126296a80c6a3b19a3d41d1?s=80"; 
  
    } else {
  
      avt = `https://api.adorable.io/avatars/55/${login}.png`;
  
    }
  
    return <img src={avt} classname="ui mini rounded image" />
  
  }


  function ContactItem({ login, name, department }) { 

    return (
  
      <li classname="item">
  
        <UserAvatar login={login} />
  
        <div classname="content">
  
          <h4 classname="header">{name}</h4>
  
          <div classname="description">{department}</div>
  
        </div>
  
      </li>
  
    );
  
  }
  
  function App() {
    return (
      <div>
        <AppHeader />
        <main className="ui main text container">
          <ContactsList />
        </main>
      </div>
    );
  }
  ReactDOM.render(<App />, document.getElementById("app"));


  
  
  
  
  