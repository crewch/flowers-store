/*
  Warnings:

  - You are about to drop the `Flower` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Flower";

-- CreateTable
CREATE TABLE "flowers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "flowers_pkey" PRIMARY KEY ("id")
);
