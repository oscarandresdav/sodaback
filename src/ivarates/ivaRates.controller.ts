import { IvaRatesService } from './ivaRates.service';
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
import { CreateIvaRateDto } from './dto/create-iva-rate.dto';
import { UpdateIvaRateDto } from './dto/update-iva-rate.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Controller('ivarates')
export class IvaRatesController {
  constructor(private readonly ivaRatesService: IvaRatesService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.ivaRatesService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ivaRatesService.findOne(id);
  }

  @Post()
  create(@Body() createIvaRateDto: CreateIvaRateDto) {
    return this.ivaRatesService.create(createIvaRateDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIvaRateDto: UpdateIvaRateDto) {
    return this.ivaRatesService.update(id, updateIvaRateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ivaRatesService.remove(id);
  }
}
