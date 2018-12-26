import { Role } from './Role';
import { User } from './User';
import { Entreprise } from './Entreprise';
import { Candidat } from './Candidat';
import { Offre } from './Offre';
import { Contrat } from './Contrat';

const CONTRAT_CDD: Contrat    = {id: 1, nom: 'CDD'};
const CONTRAT_CDDI: Contrat   = {id: 2, nom: 'CDDI'};
const CONTRAT_CDI: Contrat    = {id: 3, nom: 'CDI'};

const ROLE_CANDIDAT: Role    = {nom: 'ROLE_CANDIDAT'};
const ROLE_ADMIN:  Role      = {nom: 'ROLE_ADMIN'};
const ROLE_ENTREPRISE:  Role = {nom: 'ROLE_ENTREPRISE'};

const USER_ADM: User     = {username: 'admin', password: '123', enable: true, role: ROLE_ADMIN};
const USER_CAND_1: User  = {username: 'cand1', password: '123', enable: true, role: ROLE_CANDIDAT};
const USER_ENT_1: User   = {username: 'ent1', password: '123', enable: true, role: ROLE_ENTREPRISE};

const ENTREPRISE_1: Entreprise =  {id: 1,
                                denom: 'Entreprise 1',
                                telephone: '06 92 41 15 45',
                                email: 'ent1@gmail.com',
                                siteweb: 'www.ent1.com',
                                description: 'Cette société SSII est en charge de ....',
                                user: USER_ENT_1,
                                offres: []};

const CANDIDAT_1: Candidat =  {id: 1,
                                nom: 'Nom Cand 1',
                                prenom: 'Prenom Cand 1',
                                email: 'cand1@gmail.com',
                                dtNaissance: new Date(),
                                user: USER_CAND_1};

const OFFRE_1: Offre = {id: 1,
                        titre: 'Developer Full stack',
                        dtParution: new Date(),
                        pourvu: false,
                        salaireBrut: 1946.00,
                        description: 'Cette offre s adresse au spatialiste Full stack ...',
                        contrat: CONTRAT_CDD,
                        dureeContrat: 6,
                        commune: 'Saint leu',
                        entreprise: ENTREPRISE_1,
                        nbCandidature: 1};

const OFFRE_2: Offre = {id: 2,
                        titre: 'Agent entretien',
                        dtParution: new Date(),
                        pourvu: false,
                        salaireBrut: 1423.00,
                        description: 'Cette offre s adresse au personne experimente dans l entretien ...',
                        contrat: CONTRAT_CDI,
                        dureeContrat: null,
                        commune: 'Saint Paul',
                        entreprise: ENTREPRISE_1,
                        nbCandidature: 1};


export const OFFRES_MOCK: Offre[] = [OFFRE_1, OFFRE_2];
export const USERS_MOCK: User[] = [USER_ADM, USER_CAND_1, USER_ENT_1];
