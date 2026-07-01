import { DepartmentModel } from "../mongoose/department.schema";
import { DepartmentRepository } from "../../../domain/repositories/department.repository";

export class DepartmentMongoRepository implements DepartmentRepository {

  async create(dept: any) {
    return await DepartmentModel.create(dept);
  }

  async update(dept: any) {
    return await DepartmentModel.findByIdAndUpdate(
      dept.id,
      dept,
      { new: true }
    );
  }

  async findById(id: string) {
    return await DepartmentModel.findById(id);
  }

  async findAll() {
    return await DepartmentModel.find();
  }

  async delete(id: string) {
    await DepartmentModel.findByIdAndDelete(id);
  }
}