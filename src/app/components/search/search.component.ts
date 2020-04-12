import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  resultHeroes:Heroe[] = [];
  textoBusqueda: string;

  constructor(private _heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.textoBusqueda = params['textoBusqueda'];
      this.resultHeroes = this._heroesService.buscarHeroe(this.textoBusqueda);
    } );
  }

  verHeroe( id: number){
    this.router.navigate( ['/heroe', id] );
  }

}
