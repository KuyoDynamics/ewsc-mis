/*
  Warnings:

  - You are about to drop the column `district_id` on the `district_user` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `district_user` table. All the data in the column will be lost.
  - You are about to drop the column `due_date` on the `report` table. All the data in the column will be lost.
  - You are about to drop the column `reporting_district_id` on the `report` table. All the data in the column will be lost.
  - You are about to drop the column `district_id` on the `service_area` table. All the data in the column will be lost.
  - You are about to drop the column `district_id` on the `sewer_treatment_plant` table. All the data in the column will be lost.
  - You are about to drop the column `district_id` on the `water_treatment_plant` table. All the data in the column will be lost.
  - You are about to drop the `organisation_district` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[organisation_user_id,catchment_district_id]` on the table `district_user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reporting_period,report_type_id,catchment_district_id]` on the table `report` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,catchment_district_id]` on the table `service_area` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,catchment_district_id]` on the table `sewer_treatment_plant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,catchment_district_id]` on the table `water_treatment_plant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `catchment_district_id` to the `district_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organisation_user_id` to the `district_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_due_date` to the `report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reporting_period_end_date` to the `report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reporting_period_start_date` to the `report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `catchment_district_id` to the `service_area` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `cost_classification` on the `service_area` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `catchment_district_id` to the `sewer_treatment_plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `catchment_district_id` to the `water_treatment_plant` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "service_area_classification" AS ENUM ('high-cost', 'low-cost', 'medium-cost', 'peri-urban', 'rural');

-- DropForeignKey
ALTER TABLE "district_user" DROP CONSTRAINT "district_user_district_id_fkey";

-- DropForeignKey
ALTER TABLE "district_user" DROP CONSTRAINT "district_user_user_id_fkey";

-- DropForeignKey
ALTER TABLE "organisation_district" DROP CONSTRAINT "organisation_district_district_id_fkey";

-- DropForeignKey
ALTER TABLE "organisation_district" DROP CONSTRAINT "organisation_district_organisation_id_fkey";

-- DropForeignKey
ALTER TABLE "report" DROP CONSTRAINT "report_reporting_district_id_fkey";

-- DropForeignKey
ALTER TABLE "service_area" DROP CONSTRAINT "service_area_district_id_fkey";

-- DropForeignKey
ALTER TABLE "sewer_treatment_plant" DROP CONSTRAINT "sewer_treatment_plant_district_id_fkey";

-- DropForeignKey
ALTER TABLE "water_treatment_plant" DROP CONSTRAINT "water_treatment_plant_district_id_fkey";

-- DropIndex
DROP INDEX "district_user_user_id_district_id_key";

-- DropIndex
DROP INDEX "report_reporting_period_report_type_id_reporting_district_i_key";

-- DropIndex
DROP INDEX "service_area_name_district_id_key";

-- DropIndex
DROP INDEX "sewer_treatment_plant_name_district_id_key";

-- DropIndex
DROP INDEX "water_treatment_plant_name_district_id_key";

-- AlterTable
ALTER TABLE "district_user" DROP COLUMN "district_id",
DROP COLUMN "user_id",
ADD COLUMN     "catchment_district_id" UUID NOT NULL,
ADD COLUMN     "organisation_user_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "report" DROP COLUMN "due_date",
DROP COLUMN "reporting_district_id",
ADD COLUMN     "catchment_district_id" UUID,
ADD COLUMN     "report_due_date" TIMESTAMPTZ NOT NULL,
ADD COLUMN     "reporting_period_end_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "reporting_period_start_date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "service_area" DROP COLUMN "district_id",
ADD COLUMN     "catchment_district_id" UUID NOT NULL,
DROP COLUMN "cost_classification",
ADD COLUMN     "cost_classification" "service_area_classification" NOT NULL;

-- AlterTable
ALTER TABLE "sewer_treatment_plant" DROP COLUMN "district_id",
ADD COLUMN     "catchment_district_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "water_treatment_plant" DROP COLUMN "district_id",
ADD COLUMN     "catchment_district_id" UUID NOT NULL;

-- DropTable
DROP TABLE "organisation_district";

-- DropEnum
DROP TYPE "service_area_type";

-- CreateTable
CREATE TABLE "catchment_district" (
    "id" UUID NOT NULL,
    "district_id" UUID NOT NULL,
    "organisation_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "catchment_district_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "catchment_district_organisation_id_district_id_key" ON "catchment_district"("organisation_id", "district_id");

-- CreateIndex
CREATE UNIQUE INDEX "district_user_organisation_user_id_catchment_district_id_key" ON "district_user"("organisation_user_id", "catchment_district_id");

-- CreateIndex
CREATE UNIQUE INDEX "report_reporting_period_report_type_id_catchment_district_i_key" ON "report"("reporting_period", "report_type_id", "catchment_district_id");

-- CreateIndex
CREATE UNIQUE INDEX "service_area_name_catchment_district_id_key" ON "service_area"("name", "catchment_district_id");

-- CreateIndex
CREATE UNIQUE INDEX "sewer_treatment_plant_name_catchment_district_id_key" ON "sewer_treatment_plant"("name", "catchment_district_id");

-- CreateIndex
CREATE UNIQUE INDEX "water_treatment_plant_name_catchment_district_id_key" ON "water_treatment_plant"("name", "catchment_district_id");

-- AddForeignKey
ALTER TABLE "district_user" ADD CONSTRAINT "district_user_organisation_user_id_fkey" FOREIGN KEY ("organisation_user_id") REFERENCES "organisation_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "district_user" ADD CONSTRAINT "district_user_catchment_district_id_fkey" FOREIGN KEY ("catchment_district_id") REFERENCES "catchment_district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catchment_district" ADD CONSTRAINT "catchment_district_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catchment_district" ADD CONSTRAINT "catchment_district_organisation_id_fkey" FOREIGN KEY ("organisation_id") REFERENCES "organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "water_treatment_plant" ADD CONSTRAINT "water_treatment_plant_catchment_district_id_fkey" FOREIGN KEY ("catchment_district_id") REFERENCES "catchment_district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_area" ADD CONSTRAINT "service_area_catchment_district_id_fkey" FOREIGN KEY ("catchment_district_id") REFERENCES "catchment_district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sewer_treatment_plant" ADD CONSTRAINT "sewer_treatment_plant_catchment_district_id_fkey" FOREIGN KEY ("catchment_district_id") REFERENCES "catchment_district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_catchment_district_id_fkey" FOREIGN KEY ("catchment_district_id") REFERENCES "catchment_district"("id") ON DELETE SET NULL ON UPDATE CASCADE;
