class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return "Some animal sound"

    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}, Species: {self.species}"


class Dog(Animal):
    def __init__(self, name, age, species, breed):
        super().__init__(name, age, species)
        self.breed = breed

    def speak(self):
        return "Woof"

    def __str__(self):
        return (
            f"Name: {self.name}, Age: {self.age}, "
            f"Species: {self.species}, Breed: {self.breed}"
        )


class Cat(Animal):
    def __init__(self, name, age, species, color):
        super().__init__(name, age, species)
        self.color = color

    def speak(self):
        return "Meow"

    def __str__(self):
        return (
            f"Name: {self.name}, Age: {self.age}, "
            f"Species: {self.species}, Color: {self.color}"
        )
