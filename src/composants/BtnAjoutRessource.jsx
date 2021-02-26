import './BtnAjtRes.scss';
import Fab from '@material-ui/core/Fab';
import { positions } from '@material-ui/system';

export default function BtnAjoutRessource() {
  return (
    // <button className="BtnAjoutRessource">
    //   +
    // </button>
    
    <Fab color="primary" earia-label="add" size="medium" class="BtnAjoutRessource">
      +
    </Fab> 
  );
}