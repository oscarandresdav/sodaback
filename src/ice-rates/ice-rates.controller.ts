import { IceRatesService } from './ice-rates.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateIceRateDto } from './dto/create-ice-rate.dto';
import { UpdateIceRateDto } from './dto/update-ice-rate.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Controller('icerates')
export class IceRatesController {
  constructor(private readonly iceRatesService: IceRatesService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.iceRatesService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iceRatesService.findOne(id);
  }

  @Post()
  create(@Body() createIceRateDto: CreateIceRateDto) {
    return this.iceRatesService.create(createIceRateDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIceRateDto: UpdateIceRateDto) {
    return this.iceRatesService.update(id, updateIceRateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iceRatesService.remove(id);
  }
}
