import { Component, OnInit } from '@angular/core';
import { DashfotoService } from 'src/app/shared/services/dashfoto.service';
import { Dashfoto } from 'src/app/shared/models/Dashfoto.model';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  allDashfotos: Dashfoto[] = [];
  dashfotos: Dashfoto[] = [];
  baseApiUrl = environment.baseApiUrl;

  searchTerm: string = '';

  constructor(private dashfotoService: DashfotoService) {}

  ngOnInit(): void {
    this.dashfotoService.getDashfotos().subscribe((items) => {
      const data = items.data;
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allDashfotos = data;
      this.dashfotos = data;
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.dashfotos = this.allDashfotos.filter((dashfoto) => {
      return dashfoto.title.toLowerCase().includes(value);
    });
  }
}
