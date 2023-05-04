import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { HomeBlockService } from './home-block.service'
import { CreateHomeBlockDto } from './dto/create-home-block.dto'
import { UpdateHomeBlockDto } from './dto/update-home-block.dto'

@Controller('home-block')
export class HomeBlockController {
  constructor(private readonly homeBlockService: HomeBlockService) {}

  @Post()
  create(@Body() createHomeBlockDto: CreateHomeBlockDto) {
    return this.homeBlockService.create(createHomeBlockDto)
  }

  @Get()
  findAll() {
    return this.homeBlockService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeBlockService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomeBlockDto: UpdateHomeBlockDto) {
    return this.homeBlockService.update(+id, updateHomeBlockDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homeBlockService.remove(+id)
  }
}
