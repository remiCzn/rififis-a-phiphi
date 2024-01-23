-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "water" INTEGER,
    "wood" INTEGER,
    "food" INTEGER,
    "playerTurnId" INTEGER,
    "turnId" INTEGER,
    "started" BOOLEAN NOT NULL,
    CONSTRAINT "Game_playerTurnId_fkey" FOREIGN KEY ("playerTurnId") REFERENCES "Player" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,
    CONSTRAINT "Player_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Player_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WeatherDays" (
    "waterValue" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,
    "turnId" INTEGER NOT NULL,

    PRIMARY KEY ("gameId", "turnId"),
    CONSTRAINT "WeatherDays_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
