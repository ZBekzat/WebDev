from models import Cat, Dog


def main():
    animals = [
        Dog("Buddy", 3, "Dog", "Labrador"),
        Dog("Rocky", 5, "Dog", "Beagle"),
        Cat("Luna", 2, "Cat", "White"),
        Cat("Milo", 4, "Cat", "Black"),
    ]

    for animal in animals:
        print(animal)
        print(f"Sound: {animal.speak()}")
        print("-" * 40)


if __name__ == "__main__":
    main()
