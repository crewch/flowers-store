import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreateFlowersDto {
  @IsString()
  @ApiProperty()
  name: string

  @IsString()
  @ApiProperty()
  color: string

  @IsNumber()
  @ApiProperty()
  price: number
}

export class UpdateFlowerDto extends PartialType(CreateFlowersDto) {}
