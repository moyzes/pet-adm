import { Attribute } from '../attribute/attribute.model';
import { Specie } from '../specie/specie.model';

export class Breed {
    id: number;
    specie: Specie;
    name: string;
    care: string;
    curiosity: string;
    information: string;
    look: string;
    maxheight: number;
    maxlifetime: number;
    maxweight: number;
    minheight: number;
    minlifetime: number;
    minweight: number;
    origin: string;
    slogan: string;
    summary: string;
    attributesbreed: Attribute[];
}