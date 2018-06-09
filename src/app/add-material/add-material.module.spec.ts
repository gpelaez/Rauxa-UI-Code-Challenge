import { AddMaterialModule } from './add-material.module';

describe('AddMaterialModule', () => {
  let addMaterialModule: AddMaterialModule;

  beforeEach(() => {
    addMaterialModule = new AddMaterialModule();
  });

  it('should create an instance', () => {
    expect(addMaterialModule).toBeTruthy();
  });
});
