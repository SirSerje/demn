import {Body, Controller, Delete, Get, HttpException, Param, Post, Put} from '@nestjs/common';
import {CreateCatDto} from './dto/create-cat.dto';
import {CatsService} from './cats.service';
import {Cat} from './interfaces/cat.interface';
import {MongooseRemoveResponse} from "../typings";
import {statusCodes} from "../constants";

// TODO: simplify controller to simple requires, error validation into service
@Controller('cat')
export class CatController {
    constructor(private readonly catsService: CatsService) {
    }


    //C
    @Post()
    async createCat(@Body() createCatDto: CreateCatDto): Promise<string> {
        try {
            await this.catsService.create(createCatDto);
            return 'created success'
        } catch (error) {
            //TODO: make correct error handling
          throw new HttpException('cant CREATE cat ', statusCodes.NOT_FOUND)
        }
    }

    //R
    @Get('/:id')
    async readCat(@Param('id') catId): Promise<Cat> {
        try {
            return await this.catsService.getById(catId);
        } catch (error) {
          throw new HttpException('cant READ cat ', statusCodes.NOT_FOUND)
        }
    }

    //U
    @Put('/:id')
    async updateCat(@Body() createCatDto: CreateCatDto, @Param('id') catId): Promise<Cat> {
        try {
            return await this.catsService.update(catId, createCatDto)
        } catch (error) {
            //TODO: correct handling
            throw new HttpException('cant UPDATE cat', statusCodes.NOT_FOUND)
        }
    }

    //D
    @Delete('/:id')
    async deleteCat(@Param('id') catId): Promise<MongooseRemoveResponse> {
        try {
            return await this.catsService.remove(catId);
        } catch (error) {
            throw new HttpException('cant DELETE cat', statusCodes.NOT_FOUND)
        }
    }
}

//TODO: move into separate file
@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}
