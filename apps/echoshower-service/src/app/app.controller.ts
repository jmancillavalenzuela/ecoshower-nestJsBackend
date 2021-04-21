import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Message } from '@google-cloud/pubsub';

export class AppController {
  constructor() {}

  @EventPattern('iotcore-topic')
  async handleMyTopicEvent(data: Message) {
    console.log(data.data.toString());
  }
}
