import {Controller, Get, Post, Body, Delete, Put, Param, HttpException} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

//TODO: add return types
@Controller('cat')
export class CatController {
  constructor(private readonly catsService: CatsService) {}
  //C
  @Post()
  async createCat(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
  }
  //R
  @Get('/:id')
  async readCat(@Param('id') catId) {
    return await this.catsService.getById(catId);
    // return `GET request ${catId}`
  }
  //U
  @Put('/:id')
  async updateCat(@Body() createCatDto: CreateCatDto, @Param('id') catId) {
    try {
      await this.catsService.update(catId, createCatDto);
      //TODO: add type?
    } catch (error) {
      console.log(error);
      //TODO: correct handling
      throw new HttpException('kind like this', 600)
    }
    return `PUT request SUCCESS ${catId}`
  }
  //D
  @Delete('/:id')
  async deleteCat(@Param('id') catId) {
    //TODO : wrap in try catch
    await this.catsService.remove(catId);
    return `DEL request ${catId}`
  }
}

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
