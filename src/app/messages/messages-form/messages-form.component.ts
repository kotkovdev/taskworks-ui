import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { Message } from '../../interfaces/Message';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/interfaces/Task';
@Component({
  selector: 'app-messages-form',
  templateUrl: './messages-form.component.html',
  styleUrls: ['./messages-form.component.scss']
})
export class MessagesFormComponent implements OnInit {

  messageForm: FormGroup;
  taskId: number;
  task: Task;
  messages: Message[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    @Inject(TasksService) private taskService:TasksService,
    @Inject(MessagesService) private messagesService:MessagesService
  ) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      message: ['', Validators.required],
      status: ['', null],
      completion: ['', null]
    });
    this.route.paramMap.subscribe(params => {
      this.taskId = Number(params.get('id'));

      this.messagesService.getAll(this.taskId).subscribe(messages => {
        this.messages = messages;
        this.taskService.getById(this.taskId).subscribe(task => {
          this.task = task;
          this.messageForm.controls['completion'].setValue(this.task.completion);
          this.messageForm.controls['status'].setValue(this.task.status_id);
        });
      });
    }); 
  }

  onSubmit() {
    if (this.messageForm.valid) {
      let controls = this.messageForm.controls;
      let messageText = controls['message'].value;
      let status = controls['status'].value;
      let completion = controls['completion'].value;
      let message = new Message(
        null,
        null,
        this.taskId,
        messageText,
        status,
        completion
      );
      console.log(message);
      this.messagesService.send(message).subscribe(messages => {
        this.messages = messages;
      });
    }
  }

}
