import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Dashfoto } from 'src/app/shared/models/Dashfoto.model';

import { DashfotoService } from 'src/app/shared/services/dashfoto.service';

import { MessagesService } from 'src/app/shared/services/messages.service';

@Component({
  templateUrl: './edit-dashfoto-page.component.html',
  styleUrls: ['./edit-dashfoto-page.component.scss'],
})
export class EditDashfotoPageComponent implements OnInit {
  dashfoto!: Dashfoto;
  btnText: string = 'Editar';

  constructor(
    private dashfotoService: DashfotoService,
    private route: ActivatedRoute,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.dashfotoService.getDashfoto(id).subscribe((item) => {
      this.dashfoto = item.data;
    });
  }

  async editHandler(dashfotoData: Dashfoto) {
    const id = this.dashfoto.id;

    const formData = new FormData();

    formData.append('title', dashfotoData.title);

    formData.append('description', dashfotoData.description);

    if (dashfotoData.image) {
      formData.append('image', dashfotoData.image);
    }

    await this.dashfotoService.updateDashfoto(id!, formData).subscribe();

    this.messagesService.add('A publicação foi atualizada com sucesso!');

    this.router.navigate(['/']);
  }
}
