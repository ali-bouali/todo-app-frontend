/* tslint:disable */
import { UserDto } from './user-dto';
import { TodoDto } from './todo-dto';
export interface CategoryDto {
  id?: number;
  name?: string;
  description?: string;
  user?: UserDto;
  todoList?: Array<TodoDto>;
}
