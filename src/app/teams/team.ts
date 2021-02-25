import { PathLocationStrategy } from '@angular/common';

export interface Team {
    id: string;
    nombre: string;
    partidos: number;
    wins: number;
    loses: number;
    tie: number;
    photo: string;
    puntos: number[];
    fieldname: string;
    fieldphoto: string;
    league: string;
}
