import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateStoreDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  region: string;

  @IsNumber()
  @IsNotEmpty()
  numberPhone: number;

  @IsNumber()
  @IsNotEmpty()
  location: string;

  @IsString()
  @Length(25)
  description: string;
}
