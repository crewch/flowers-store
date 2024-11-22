import { Controller, Get, Param, Query } from '@nestjs/common'
import { FlowersService } from './flowers.service'

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get(':id')
  findAll(@Param('id') id: string, @Query('count') count?: string) {
    console.log(id, count)

    return this.flowersService.findAll()
  }
}
