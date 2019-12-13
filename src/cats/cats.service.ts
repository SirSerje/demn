import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Cat} from './interfaces/cat.interface';
import {CreateCatDto} from './dto/create-cat.dto';
import {MongooseRemoveResponse, MongooseResponse} from "../typings";

@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {
    }

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        try {
            const createdCat = await new this.catModel(createCatDto).save();
            return createdCat
        } catch (error) {
            return error
        }
    }

    async update(id, createCatDto: CreateCatDto): Promise<Cat | object> {
        try {
            // TODO : fix type
            const updatedItem: any = await this.catModel.updateOne({"_id": id}, createCatDto).exec();
            if(updatedItem.nModified < 1) {
                return {body: 'item similar, nothing to update'}
            }
            return updatedItem
        } catch (error) {
            return error
        }
    }

    async getById(id: string): Promise<Cat | object> {
        try {
            const foundItem =  await this.catModel.findById(id).exec();
            if(foundItem===null) {
                return {body: 'id not found'}
            }
            return foundItem
        } catch (error) {
            return error
        }
    }

    // TODO : fix type
    async remove(id: string): Promise<any> {
        try {
            const deletedItem: MongooseRemoveResponse = await this.catModel.deleteOne({"_id": id}).exec();
            if(deletedItem.deletedCount === 0) {
                return {body: 'id not found'}
            }
            return {body: id}
        } catch (error) {
            return error;
        }
    }

    async findAll(): Promise<Cat[]> {
        return await this.catModel.find().exec();
    }
}
