import { Department } from "../entities/department.entity";

export interface DepartmentRepository {

  create(dept: Department): Promise<Department>;

  update(dept: Department): Promise<Department>;

  findById(id: string): Promise<Department | null>;

  findAll(): Promise<Department[]>;

  delete(id: string): Promise<void>;
}