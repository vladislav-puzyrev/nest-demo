import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { CatsService } from './cats.service'
import { CreateCatDto } from './dto/create-cat.dto'
import { ListAllEntities } from './dto/list-all-entities.dto'
import { UpdateCatDto } from './dto/update-cat.dto'

@Controller('cats')
export class CatsController {
  constructor (private catsService: CatsService) {}

  @Post()
  create (@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
    return 'This action adds a new cat'
  }

  @Get()
  findAll (@Query() query: ListAllEntities) {
    return this.catsService.findAll()
  }

  @Get(':id')
  findOne (@Param('id') id: string) {
    return `This action returns a #${id} cat`
  }

  @Put(':id')
  update (@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return `This action removes a #${id} cat`
  }
}
