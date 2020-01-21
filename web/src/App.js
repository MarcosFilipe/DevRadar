import React, { useEffect, useState } from 'react'
import api from './services/api';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

// Componente: Um bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente pai passa para o componente filho
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)


function App() {

  const [github_username, setGithubUserName] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);

      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {github_username, techs, latitude, longitude});

    console.log(response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="username_github"
              required
              onChange={e => setGithubUserName(e.target.value)}
              value={github_username}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              onChange={e => setTechs(e.target.value)}
              value={techs}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)} />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/14968716?s=460&v=4" alt="Marcos Filipe"></img>
              <div className="user-info">
                <strong>Marcos Filipe</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>tuts tuts</p>
            <a href="https://github.com/marcosfilipe">Acessar Perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/14968716?s=460&v=4" alt="Marcos Filipe"></img>
              <div className="user-info">
                <strong>Marcos Filipe</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>tuts tuts</p>
            <a href="https://github.com/marcosfilipe">Acessar Perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/14968716?s=460&v=4" alt="Marcos Filipe"></img>
              <div className="user-info">
                <strong>Marcos Filipe</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>tuts tuts</p>
            <a href="https://github.com/marcosfilipe">Acessar Perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/14968716?s=460&v=4" alt="Marcos Filipe"></img>
              <div className="user-info">
                <strong>Marcos Filipe</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>tuts tuts</p>
            <a href="https://github.com/marcosfilipe">Acessar Perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
