import { Component, OnInit } from "@angular/core";
import { MenuObject } from "./menuObject";
import { Router } from "@angular/router";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {

  public menuProperties: Array<MenuObject> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'fas fa-chart-line',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'Vue d\'ensemble',
          icon: 'fas fa-chart-pie',
          url: '',
          
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: 'fas fa-chart-bar',
          url: 'statistiques',
          
        }
      ]
    },

    {
      id: '2',
      titre: 'Articles',
      icon: 'fas fa-boxes',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          icon: 'fas fa-boxes',
          url: '',
          
        },
        {
          id: '22',
          titre: 'Mouvement de stock',
          icon: 'fas fa-dolly',
          url: '',
          
        }
      ]
    },

    {
      id: '3',
      titre: 'Clients',
      icon: 'fas fa-user-tie',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'fas fa-user-tie',
          url: '',
        },
        {
          id: '32',
          titre: 'Commandes Clients',
          icon: 'fas fa-truck-loading',
          url: '',
        }
      ]
    },

    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fas fa-user-secret',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: 'fas fa-user-secret',
          url: '',
        },
        {
          id: '42',
          titre: 'Commandes Fournisseurs',
          icon: 'fas fa-cubes',
          url: '',
        }
      ]
    },

    {
      id: '5',
      titre: 'Parametrages',
      icon: 'fas fa-users-cog',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Cathegories',
          icon: 'fas fa-swatchbook',
          url: '',
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: 'fas fa-user-edit',
          url: '',
        }
      ]
    }

  ];
  

  constructor(
    private router: Router 
  ) { }

  ngOnInit(): void {
  }

  navigate(url?: string): void  {
    this.router.navigate([url]);
    }

}
