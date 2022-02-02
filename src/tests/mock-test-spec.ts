import Animal from "@models/Animal";

test("This should works fine.", () => {
    const animal = new Animal();
    animal.breed = "Husky Siberiano";
    animal.name = "Lion";
    animal.sex = "male";

    expect(animal.breed).toEqual("Husky Siberiano");
});