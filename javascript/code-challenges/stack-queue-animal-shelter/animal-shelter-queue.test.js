const {
  Animal,
  PreferenceQueue,
  preferCats,
  preferDogs,
  preferKind,
} = require("./animal-shelter-queue.js");

describe("PreferenceQueue", () => {
  test("should enqueue Animals of one kind", () => {
    const dogQueue = new PreferenceQueue();
    dogQueue.enqueue(new Animal({ kind: "dog", name: "Able", emoji: "🐶" }));
    dogQueue.enqueue(new Animal({ kind: "dog", name: "Bingo", emoji: "🐕" }));
    dogQueue.enqueue(new Animal({ kind: "dog", name: "Caddy", emoji: "🦮" }));
    dogQueue.enqueue(new Animal({ kind: "dog", name: "Dingo", emoji: "🐕‍🦺" }));
    expect(dogQueue.dequeue(preferDogs).name).toBe("Able");
    expect(dogQueue.dequeue(preferDogs).name).toBe("Bingo");
    expect(dogQueue.dequeue(preferDogs).name).toBe("Caddy");
    expect(dogQueue.dequeue(preferDogs).name).toBe("Dingo");
  });
  test("should enqueue Animals of two kinds", () => {
    const animalQueue = new PreferenceQueue();
    animalQueue.enqueue(new Animal({ kind: "dog", name: "Able", emoji: "🐶" }));
    animalQueue.enqueue(
      new Animal({ kind: "dog", name: "Bingo", emoji: "🐕" })
    );
    animalQueue.enqueue(
      new Animal({ kind: "dog", name: "Caddy", emoji: "🦮" })
    );
    animalQueue.enqueue(
      new Animal({ kind: "dog", name: "Dingo", emoji: "🐕‍🦺" })
    );
    animalQueue.enqueue(new Animal({ kind: "cat", name: "Abby", emoji: "🐈" }));
    animalQueue.enqueue(
      new Animal({ kind: "cat", name: "BeeBee", emoji: "🐱" })
    );
    animalQueue.enqueue(
      new Animal({ kind: "cat", name: "City Kitty", emoji: "🐈‍⬛" })
    );
    animalQueue.enqueue(
      new Animal({ kind: "cat", name: "Dee Dee", emoji: "🙀" })
    );
    expect(animalQueue.dequeue(preferCats).name).toBe("Abby");
    expect(animalQueue.dequeue(preferDogs).name).toBe("Able");
    expect(animalQueue.dequeue(preferCats).name).toBe("BeeBee");
    expect(animalQueue.dequeue(preferDogs).name).toBe("Bingo");
    expect(animalQueue.dequeue(preferCats).name).toBe("City Kitty");
    expect(animalQueue.dequeue(preferDogs).name).toBe("Caddy");
    expect(animalQueue.dequeue(preferCats).name).toBe("Dee Dee");
    expect(animalQueue.dequeue(preferDogs).name).toBe("Dingo");
    expect(animalQueue.isEmpty()).toBe(true);
  });
  test("should handle Animals of all kinds", () => {
    const animalQueue = new PreferenceQueue();
    animalQueue.enqueue(new Animal({ kind: "owl", name: "ORLY", emoji: "🦉" }));
    animalQueue.enqueue(
      new Animal({ kind: "horse", name: "Sea Biscuit", emoji: "🐎" })
    );
    animalQueue.enqueue(
      new Animal({ kind: "goat", name: "Billy", emoji: "🐐" })
    );
    animalQueue.enqueue(new Animal({ kind: "dog", name: "Able", emoji: "🐶" }));
    animalQueue.enqueue(
      new Animal({ kind: "dog", name: "Bingo", emoji: "🐕" })
    );
    animalQueue.enqueue(
      new Animal({ kind: "dog", name: "Caddy", emoji: "🦮" })
    );
    animalQueue.enqueue(
      new Animal({ kind: "dog", name: "Dingo", emoji: "🐕‍🦺" })
    );
    animalQueue.enqueue(new Animal({ kind: "cat", name: "Abby", emoji: "🐈" }));
    animalQueue.enqueue(
      new Animal({ kind: "cat", name: "BeeBee", emoji: "🐱" })
    );
    animalQueue.enqueue(
      new Animal({ kind: "cat", name: "City Kitty", emoji: "🐈‍⬛" })
    );
    animalQueue.enqueue(
      new Animal({ kind: "cat", name: "Dee Dee", emoji: "🙀" })
    );
    expect(animalQueue.dequeue(preferCats).name).toBe("Abby");
    expect(animalQueue.dequeue(preferDogs).name).toBe("Able");
    expect(animalQueue.dequeue(preferCats).name).toBe("BeeBee");
    expect(animalQueue.dequeue(preferDogs).name).toBe("Bingo");
    expect(animalQueue.dequeue(preferCats).name).toBe("City Kitty");
    expect(animalQueue.dequeue(preferDogs).name).toBe("Caddy");
    expect(animalQueue.dequeue(preferCats).name).toBe("Dee Dee");
    expect(animalQueue.dequeue(preferDogs).name).toBe("Dingo");
    expect(animalQueue.dequeue((animal) => animal.emoji === "🐐").name).toBe(
      "Billy"
    );
    expect(animalQueue.dequeue((animal) => animal.kind === "owl").name).toBe(
      "ORLY"
    );
    expect(
      animalQueue.dequeue((animal) => animal.name === "Sea Biscuit").kind
    ).toBe("horse");
    expect(animalQueue.isEmpty()).toBe(true);
  });
});
