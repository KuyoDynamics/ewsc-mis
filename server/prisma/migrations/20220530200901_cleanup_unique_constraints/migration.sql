/*
  Warnings:

  - You are about to alter the column `connections` on the `service_area_sewer_connection` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - A unique constraint covering the columns `[code]` on the table `district` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,province_id]` on the table `district` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `province` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,country_id]` on the table `province` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "district_name_code_province_id_key";

-- DropIndex
DROP INDEX "province_code_name_country_id_key";

-- AlterTable
ALTER TABLE "service_area_sewer_connection" ALTER COLUMN "connections" SET DATA TYPE INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "district_code_key" ON "district"("code");

-- CreateIndex
CREATE UNIQUE INDEX "district_name_province_id_key" ON "district"("name", "province_id");

-- CreateIndex
CREATE UNIQUE INDEX "province_code_key" ON "province"("code");

-- CreateIndex
CREATE UNIQUE INDEX "province_name_country_id_key" ON "province"("name", "country_id");
