/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `report_emplate` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "report_emplate_name_key" ON "report_emplate"("name");
