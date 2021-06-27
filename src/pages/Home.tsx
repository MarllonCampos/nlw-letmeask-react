import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../components/Button";

import {useAuth} from '../hooks/useAuth'


import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import { database } from "../services/firebase";

import "../styles/auth.scss";
export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode,setRoomCode] = useState('');


  async function handleCreateRoom() {
    if (!user) {
     await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

  async function handleJoinRoom(event:FormEvent) {
    event.preventDefault()

    if(roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()){

      return alert('Room does not exists');
    }

    
    if (roomRef.val().endedAt) {
      alert('Room already closed');
      return
    }

    history.push(`/rooms/${roomCode}`)
    

  }

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

          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do google" />
            Crie sua sala com o google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            <input 
              type="text" 
              placeholder="Digite o código da sala" 
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
