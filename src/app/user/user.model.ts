import { UserPhoto } from './userphoto.model';
export class User {
    id:	number;
    adress: string;
    city: string;
    country: string;
    email: string;
    state: string; 
    provider: string;
    token: string;
    lastlocation: string;
    name: string;
    zipcode: string;
    superuser: boolean;
    public photos: UserPhoto[];
}

