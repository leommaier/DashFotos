import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DashfotoService } from 'src/app/shared/services/dashfoto.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { CommentService } from 'src/app/shared/services/comment.service';
import { Dashfoto } from 'src/app/shared/models/Dashfoto.model';
import { Comment } from 'src/app/shared/models/Comment.model';

import { environment } from 'src/environments/environment';
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './dashfoto-page.component.html',
  styleUrls: ['./dashfoto-page.component.scss'],
})
export class DashfotoPageComponent implements OnInit {
  dashfoto?: Dashfoto;
  baseApiUrl = environment.baseApiUrl;

  commentForm!: FormGroup;

  constructor(
    private dashfotoService: DashfotoService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.dashfotoService
      .getDashfoto(id)
      .subscribe((item) => (this.dashfoto = item.data));

    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    });
  }

  get text() {
    return this.commentForm.get('text')!;
  }

  get username() {
    return this.commentForm.get('username')!;
  }

  async removeHandler(id: number) {
    await this.dashfotoService.removeDashfoto(id).subscribe();

    this.messagesService.add('Publicação excluída!');
    this.router.navigate(['/']);
  }

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) {
      return;
    }

    const data: Comment = this.commentForm.value;

    data.dashfotoId = Number(this.dashfoto!.id);

    await this.commentService
      .createComment(data)
      .subscribe((comment) => this.dashfoto!.comments!.push(comment.data));

    this.messagesService.add('Comentário adicionado!');

    this.commentForm.reset();

    formDirective.resetForm();
  }
}
