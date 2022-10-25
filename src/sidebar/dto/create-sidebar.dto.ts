import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateSidebarDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly icon: string;

  @IsString()
  readonly path: string;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
