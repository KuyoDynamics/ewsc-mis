/*
  Warnings:

  - A unique constraint covering the columns `[organisation_id,province_id]` on the table `catchment_province` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "catchment_province_organisation_id_province_id_key" ON "catchment_province"("organisation_id", "province_id");
