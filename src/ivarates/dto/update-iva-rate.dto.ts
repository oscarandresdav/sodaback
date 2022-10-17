import { PartialType } from '@nestjs/mapped-types';
import { CreateIvaRateDto } from './create-iva-rate.dto';

export class UpdateIvaRateDto extends PartialType(CreateIvaRateDto) {}
