import {Offre} from './Offre';
import {User} from './User';

export class Entreprise {
  id: Number;
  denom: String;
  telephone: String;
  email: String;
  siteweb: String;
  description: String;
  user: User;
  offres: Offre[];
}
