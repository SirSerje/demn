import { ApiModelProperty } from '@nestjs/swagger';


//FIXME: DTO was in example. For what, if Cat interface is the same?
export class CreateCatDto {
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly age: number;
  @ApiModelProperty()
  readonly breed: string;
}
