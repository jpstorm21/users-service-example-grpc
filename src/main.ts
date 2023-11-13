import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { protobufPackage } from './modules/users/users.pb';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50051',
        package: protobufPackage,
        protoPath: join('node_modules/proyectos-juegos-proto/proto/users.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();