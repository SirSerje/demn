import {Body, Controller, Delete, Get, HttpException, Param, Post, Put} from '@nestjs/common';
import {CreateCatDto} from './dto/create-cat.dto';
import {CatsService} from './cats.service';
import {Cat} from './interfaces/cat.interface';
import {MongooseRemoveResponse} from "../typings";

// TODO: simplify controller to simple requires, error validation into service
@Controller('cat')
export class CatController {
    constructor(private readonly catsService: CatsService) {
    }

    //C
    @Post()
    async createCat(@Body() createCatDto: CreateCatDto): Promise<Cat | object> {
        return await this.catsService.create(createCatDto);
    }

    //R
    @Get('/:id')
    async readCat(@Param('id') catId): Promise<Cat | object> {
        return await this.catsService.getById(catId);
    }

    //U
    @Put('/:id')
    async updateCat(@Body() createCatDto: CreateCatDto, @Param('id') catId): Promise<Cat | object> {
        return await this.catsService.update(catId, createCatDto)
    }

    //D
    @Delete('/:id')
    async deleteCat(@Param('id') catId): Promise<({ ok?: number; n?: number } & { deletedCount?: number }) | Error> {
        return await this.catsService.remove(catId);
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
