import { Entreprise} from './Entreprise';
import { Contrat} from './Contrat';


export class Offre {
  id: Number;
  titre: String;
  dtParution: Date;
  pourvu: Boolean;
  salaireBrut: Number;
  description: String;
  contrat: Contrat;
  dureeContrat: Number;
  commune: String;
  entreprise: Entreprise;
  nbCandidature: Number;
}

