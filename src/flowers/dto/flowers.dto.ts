import { PartialType } from '@nestjs/mapped-types'
import { IsNumber, IsString } from 'class-validator'

export class CreateFlowersDto {
  @IsString()
  name: string

  @IsString()
  color: string

  @IsNumber()
  price: number
}

export class UpdateFlowerDto extends PartialType(CreateFlowersDto) {}
