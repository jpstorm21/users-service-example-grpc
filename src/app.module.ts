import { Module } from '@nestjs/common';

import { UsersModule } from './modules';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
