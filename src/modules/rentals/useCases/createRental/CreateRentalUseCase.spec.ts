import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;

describe("Create Rental", () => {
  beforeEach(() => {
    createRentalUseCase = new CreateRentalUseCase();
  });

  it("should be able to crete a new rental", async () => {
    await createRentalUseCase.execute();
  });
});
