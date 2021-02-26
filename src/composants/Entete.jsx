import avatar from '../images/avatar.png';
import './Entete.scss';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">Pascal Deslauriers <img src={avatar} alt="Pascal Deslauriers" /></div>
    </header>
  );
}