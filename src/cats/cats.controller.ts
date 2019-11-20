import {Controller, Get, Post, Body, Delete, Put, Param} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

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
    return `GET request ${catId}`
  }
  //U
  @Put('/:id')
  async updateCat(@Param('id') catId) {
    return `PUT request ${catId}`
  }
  //D
  @Delete('/:id')
  async deleteCat(@Param('id') catId) {
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
