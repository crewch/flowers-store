import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { FlowersService } from './flowers.service'
import { CreateFlowersDto, UpdateFlowerDto } from './dto/flowers.dto'

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  findAll() {
    return this.flowersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.flowersService.findOne(id)
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() dto: CreateFlowersDto) {
    return this.flowersService.create(dto)
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id') id: number, @Body() dto: UpdateFlowerDto) {
    return this.flowersService.update(id, dto)
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.flowersService.delete(id)
  }
}
