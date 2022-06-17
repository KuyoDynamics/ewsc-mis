/*
  Warnings:

  - Made the column `report_type_id` on table `report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `catchment_district_id` on table `report` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "report" DROP CONSTRAINT "report_catchment_district_id_fkey";

-- DropForeignKey
ALTER TABLE "report" DROP CONSTRAINT "report_report_type_id_fkey";

-- AlterTable
ALTER TABLE "report" ALTER COLUMN "report_type_id" SET NOT NULL,
ALTER COLUMN "catchment_district_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_catchment_district_id_fkey" FOREIGN KEY ("catchment_district_id") REFERENCES "catchment_district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_report_type_id_fkey" FOREIGN KEY ("report_type_id") REFERENCES "report_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
