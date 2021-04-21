/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
 import { NestFactory } from '@nestjs/core';
 import { PubSubServer } from 'nestjs-google-pubsub';
 import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    strategy: new PubSubServer({
      projectId: 'feisty-mechanic-310318',
      topics: {
        'iotcore-topic': {
          subscriptionId: 'iotcore-subscription'
        }
      }
    })
  });
  app.listen(() => console.log('Microservice is listening'));
}

bootstrap();
