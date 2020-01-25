import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { Message } from '../../interfaces/Message';
@Component({
  selector: 'app-messages-form',
  templateUrl: './messages-form.component.html',
  styleUrls: ['./messages-form.component.scss']
})
export class MessagesFormComponent implements OnInit {

  messageForm: FormGroup;
  taskId: number;
  messages: Message[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    @Inject(MessagesService) private messagesService:MessagesService
  ) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      message: ['', Validators.required]
    });
    this.route.paramMap.subscribe(params => {
      this.taskId = Number(params.get('id'));

      this.messagesService.getAll(this.taskId).subscribe(messages => {
        this.messages = messages;
        console.log(messages);
      });
    }); 
  }

  onSubmit() {
    if (this.messageForm.valid) {
      let controls = this.messageForm.controls;
      let messageText = controls['message'].value;
      let message = new Message(
        null,
        null,
        this.taskId,
        messageText,
      );
      console.log(message);
      this.messagesService.send(message).subscribe(messages => {
        this.messages = messages;
      });
    }
  }

}
