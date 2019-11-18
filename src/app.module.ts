import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {MongooseModule} from '@nestjs/mongoose';
import {CatsModule} from "./cats/cats.module";

@Module({
    imports: [AuthModule, UsersModule,
      MongooseModule.forRoot('mongodb://localhost:28012/cats'),
        CatsModule,],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
