import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }

  async update(id, createCatDto: CreateCatDto) {
    return this.catModel.update({"_id": id}, createCatDto);
  }

  //TODO: add return type
  async getById(id: string) {
    return this.catModel.findById(id);
  }

  //TODO: add return type
  async remove(id: string) {
    return this.catModel.remove({"_id": id})
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }
}
