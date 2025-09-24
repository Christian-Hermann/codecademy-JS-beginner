const team = {
  _players: [
    {
      firstName: "Kit",
      lastName: "Hermann",
      age: 42,
    },
    {
      firstName: "Lisa",
      lastName: "Hermann",
      age: 38,
    },
    {
      firstName: "Dreyfus",
      lastName: "Kennedy",
      age: 6,
    },
  ],
  get players() {
    return this._players;
  },

  _games: [
    {
      opponent: "Liz",
      teamPoints: 25,
      opponentPoints: 20,
    },
    {
      opponent: "Carl",
      teamPoints: 100,
      opponentPoints: 35,
    },
    {
      opponent: "Cricket",
      teamPoints: 50,
      opponentPoints: 30,
    },
  ],
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },
};
