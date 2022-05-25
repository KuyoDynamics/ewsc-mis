/*
  Warnings:

  - You are about to drop the column `catchment_area_id` on the `report` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[reporting_period,report_type_id,reporting_district_id]` on the table `report` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "ApprovalStatus" AS ENUM ('pending', 'in_progress', 'approved', 'rejected');

-- DropForeignKey
ALTER TABLE "report" DROP CONSTRAINT "report_catchment_area_id_fkey";

-- DropIndex
DROP INDEX "report_reporting_period_report_type_id_catchment_area_id_key";

-- AlterTable
ALTER TABLE "report" DROP COLUMN "catchment_area_id",
ADD COLUMN     "reporting_district_id" UUID;

-- CreateTable
CREATE TABLE "report_approval" (
    "id" UUID NOT NULL,
    "status" "ApprovalStatus" NOT NULL,
    "date_approved" TIMESTAMP(3) NOT NULL,
    "date_rejected" TIMESTAMP(3) NOT NULL,
    "assigned_to" UUID NOT NULL,
    "approved_by" UUID NOT NULL,
    "rejected_by" UUID NOT NULL,
    "report_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "report_approval_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "report_approval_report_id_key" ON "report_approval"("report_id");

-- CreateIndex
CREATE UNIQUE INDEX "report_reporting_period_report_type_id_reporting_district_i_key" ON "report"("reporting_period", "report_type_id", "reporting_district_id");

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_reporting_district_id_fkey" FOREIGN KEY ("reporting_district_id") REFERENCES "organisation_district"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_approval" ADD CONSTRAINT "report_approval_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
