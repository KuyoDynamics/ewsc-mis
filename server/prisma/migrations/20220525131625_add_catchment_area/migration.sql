/*
  Warnings:

  - You are about to drop the column `organisation_district_id` on the `service_area` table. All the data in the column will be lost.
  - You are about to drop the column `organisation_district_id` on the `sewer_treatment_plant` table. All the data in the column will be lost.
  - You are about to drop the column `organisation_district_id` on the `water_treatment_plant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,country_id]` on the table `organisation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,district_id]` on the table `service_area` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[plant_id]` on the table `sewer_network` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,district_id]` on the table `sewer_treatment_plant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[plant_id]` on the table `water_network` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,plant_id]` on the table `water_production_site` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,district_id]` on the table `water_treatment_plant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `district_id` to the `service_area` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district_id` to the `sewer_treatment_plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district_id` to the `water_treatment_plant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "service_area" DROP CONSTRAINT "service_area_organisation_district_id_fkey";

-- DropForeignKey
ALTER TABLE "sewer_treatment_plant" DROP CONSTRAINT "sewer_treatment_plant_organisation_district_id_fkey";

-- DropForeignKey
ALTER TABLE "water_treatment_plant" DROP CONSTRAINT "water_treatment_plant_organisation_district_id_fkey";

-- DropIndex
DROP INDEX "province_code_key";

-- DropIndex
DROP INDEX "province_name_key";

-- DropIndex
DROP INDEX "service_area_name_organisation_district_id_key";

-- DropIndex
DROP INDEX "sewer_treatment_plant_name_organisation_district_id_key";

-- DropIndex
DROP INDEX "water_treatment_plant_name_organisation_district_id_key";

-- AlterTable
ALTER TABLE "country" ALTER COLUMN "flag" DROP NOT NULL;

-- AlterTable
ALTER TABLE "service_area" DROP COLUMN "organisation_district_id",
ADD COLUMN     "district_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "sewer_treatment_plant" DROP COLUMN "organisation_district_id",
ADD COLUMN     "district_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "water_treatment_plant" DROP COLUMN "organisation_district_id",
ADD COLUMN     "district_id" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "organisation_name_country_id_key" ON "organisation"("name", "country_id");

-- CreateIndex
CREATE UNIQUE INDEX "service_area_name_district_id_key" ON "service_area"("name", "district_id");

-- CreateIndex
CREATE UNIQUE INDEX "sewer_network_plant_id_key" ON "sewer_network"("plant_id");

-- CreateIndex
CREATE UNIQUE INDEX "sewer_treatment_plant_name_district_id_key" ON "sewer_treatment_plant"("name", "district_id");

-- CreateIndex
CREATE UNIQUE INDEX "water_network_plant_id_key" ON "water_network"("plant_id");

-- CreateIndex
CREATE UNIQUE INDEX "water_production_site_name_plant_id_key" ON "water_production_site"("name", "plant_id");

-- CreateIndex
CREATE UNIQUE INDEX "water_treatment_plant_name_district_id_key" ON "water_treatment_plant"("name", "district_id");

-- AddForeignKey
ALTER TABLE "water_treatment_plant" ADD CONSTRAINT "water_treatment_plant_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "organisation_district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_area" ADD CONSTRAINT "service_area_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "organisation_district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sewer_treatment_plant" ADD CONSTRAINT "sewer_treatment_plant_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "organisation_district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
