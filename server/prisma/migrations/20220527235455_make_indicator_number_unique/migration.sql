/*
  Warnings:

  - A unique constraint covering the columns `[indicator_number]` on the table `indicator` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "indicator_indicator_number_key" ON "indicator"("indicator_number");
