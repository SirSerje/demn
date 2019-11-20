import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {CatController, CatsController} from './cats.controller';
import { CatsService } from './cats.service';
import { CatSchema } from './schemas/cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  controllers: [CatsController, CatController],
  providers: [CatsService],
})
export class CatsModule {}
