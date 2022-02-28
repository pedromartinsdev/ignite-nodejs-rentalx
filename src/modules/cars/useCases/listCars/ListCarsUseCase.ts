import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

class ListCarsUseCase {
  constructor(private carsRepsitory: ICarsRepository) {}
  async execute(): Promise<Car[]> {
    const cars = await this.carsRepsitory.findAvaliable();
    return cars;
  }
}

export { ListCarsUseCase };
