import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  playersURL = './assets/json/players.json';

  getPlayers(): Observable<Player[]>{   // retorna un observable al que cal subscriure's
    return this.http.get<{players: Player[]}>(this.playersURL).pipe( // get retorna un observable i pipe accepta funcions de manipulació de les dades
      map(response => response.players) // de la resposta traguem l'array que ens interessa
      );
  }
}
