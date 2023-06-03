-- CreateEnum
CREATE TYPE "TrainingTime" AS ENUM ('MORNING', 'AFTERNOON', 'BOTH');

-- CreateEnum
CREATE TYPE "TrainingStyle" AS ENUM ('CROSSFIT');

-- CreateTable
CREATE TABLE "Trainer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/768px-Windows_10_Default_Profile_Picture.svg.png',
    "trainingTime" "TrainingTime" NOT NULL,
    "style" "TrainingStyle" NOT NULL,
    "highlights" TEXT[],

    CONSTRAINT "Trainer_pkey" PRIMARY KEY ("id")
);
