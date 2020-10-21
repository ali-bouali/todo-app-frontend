/* tslint:disable */
import { CategoryDto } from './category-dto';
export interface TodoDto {
  id?: number;
  title?: string;
  description?: string;
  startDate?: string;
  done?: boolean;
  favorite?: boolean;
  category?: CategoryDto;
}
