import { Link } from "react-router-dom";

import { Button } from "../components/Button";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";


// import {useAuth} from '../hooks/useAuth'

import "../styles/auth.scss";
export function NewRoom() {
  // const {user} = useAuth()

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <h3>Tire as dúvidas da sua audiência em tempo real</h3>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo do LetMeAsk" />
          <h2>Crie uma nova sala</h2>
          <form action="">
            <input type="text" placeholder="Nome da sala" />

            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}