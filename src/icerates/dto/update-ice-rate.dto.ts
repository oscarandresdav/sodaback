import { PartialType } from '@nestjs/mapped-types';
import { CreateIceRateDto } from './create-ice-rate.dto';

export class UpdateIceRateDto extends PartialType(CreateIceRateDto) {}
