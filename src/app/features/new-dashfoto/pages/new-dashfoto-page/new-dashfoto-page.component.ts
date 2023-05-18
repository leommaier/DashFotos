import { Component } from '@angular/core';
import { Dashfoto } from 'src/app/shared/models/Dashfoto.model';
import { DashfotoService } from 'src/app/shared/services/dashfoto.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './new-dashfoto-page.component.html',
  styleUrls: ['./new-dashfoto-page.component.scss'],
})
export class NewDashfotoPageComponent {
  btnText = 'Enviar!';

  constructor(
    private dashfotoService: DashfotoService,
    private messageService: MessagesService,
    private router: Router
  ) {}

  async createHandler(dashfoto: Dashfoto) {
    const formData = new FormData();

    formData.append('title', dashfoto.title);
    formData.append('description', dashfoto.description);

    if (dashfoto.image) {
      formData.append('image', dashfoto.image);
    }

    await this.dashfotoService.createDashfoto(formData).subscribe();

    this.messageService.add('Publicação adicionada!');

    this.router.navigate(['/']);
  }
}
