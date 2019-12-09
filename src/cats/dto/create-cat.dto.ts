import { ApiModelProperty } from '@nestjs/swagger';
import {IsNotEmpty, IsNumber, IsString} from 'class-validator';


export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiModelProperty()
  readonly age: number;

  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  readonly breed: string;
}
