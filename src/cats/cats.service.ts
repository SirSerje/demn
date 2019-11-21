import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Cat} from './interfaces/cat.interface';
import {CreateCatDto} from './dto/create-cat.dto';

@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {
    }

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return await createdCat.save();
    }

    async update(id, createCatDto: CreateCatDto): Promise<Cat> {
        return this.catModel.updateOne({"_id": id}, createCatDto).exec();
    }

    async getById(id: string): Promise<Cat> {
        return this.catModel.findById(id).exec();
    }

    //FIXME: for what exec()?
    //FIXME: for what save()?
    //TODO: add return type
    async remove(id: string) {
        return this.catModel.deleteOne({"_id": id}).exec()
    }

    async findAll(): Promise<Cat[]> {
        return await this.catModel.find().exec();
    }
}
