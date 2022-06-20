/*
  Warnings:

  - You are about to drop the column `report_type_id` on the `indicator` table. All the data in the column will be lost.
  - You are about to drop the column `indicator_id` on the `indicator_disaggregate` table. All the data in the column will be lost.
  - You are about to drop the column `report_type_id` on the `report` table. All the data in the column will be lost.
  - You are about to drop the column `frequency` on the `report_type` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `report_type` table. All the data in the column will be lost.
  - You are about to drop the column `window` on the `report_type` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[reporting_period,organisation_report_template_id,catchment_district_id]` on the table `report` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `report_template_id` to the `indicator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `indicator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organisation_indicator_id` to the `indicator_disaggregate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organisation_report_template_id` to the `report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organisation_id` to the `report_type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_template_id` to the `report_type` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "IndicatorType" AS ENUM ('custom', 'nis');

-- DropForeignKey
ALTER TABLE "indicator" DROP CONSTRAINT "indicator_report_type_id_fkey";

-- DropForeignKey
ALTER TABLE "indicator_disaggregate" DROP CONSTRAINT "indicator_disaggregate_indicator_id_fkey";

-- DropForeignKey
ALTER TABLE "report" DROP CONSTRAINT "report_report_type_id_fkey";

-- DropIndex
DROP INDEX "report_reporting_period_report_type_id_catchment_district_i_key";

-- AlterTable
ALTER TABLE "indicator" DROP COLUMN "report_type_id",
ADD COLUMN     "contributing_organisation_id" UUID,
ADD COLUMN     "report_template_id" UUID NOT NULL,
ADD COLUMN     "type" "IndicatorType" NOT NULL;

-- AlterTable
ALTER TABLE "indicator_disaggregate" DROP COLUMN "indicator_id",
ADD COLUMN     "organisation_indicator_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "report" DROP COLUMN "report_type_id",
ADD COLUMN     "organisation_report_template_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "report_type" DROP COLUMN "frequency",
DROP COLUMN "type",
DROP COLUMN "window",
ADD COLUMN     "organisation_id" UUID NOT NULL,
ADD COLUMN     "report_template_id" UUID NOT NULL;

-- CreateTable
CREATE TABLE "report_emplate" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "type" "IndicatorType" NOT NULL,
    "frequency" "reporting_frequency" NOT NULL,
    "window" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "report_emplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organisation_indicator" (
    "id" UUID NOT NULL,
    "organisation_id" UUID NOT NULL,
    "indicator_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "organisation_indicator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "report_reporting_period_organisation_report_template_id_cat_key" ON "report"("reporting_period", "organisation_report_template_id", "catchment_district_id");

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_organisation_report_template_id_fkey" FOREIGN KEY ("organisation_report_template_id") REFERENCES "report_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_type" ADD CONSTRAINT "report_type_organisation_id_fkey" FOREIGN KEY ("organisation_id") REFERENCES "organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_type" ADD CONSTRAINT "report_type_report_template_id_fkey" FOREIGN KEY ("report_template_id") REFERENCES "report_emplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "indicator" ADD CONSTRAINT "indicator_report_template_id_fkey" FOREIGN KEY ("report_template_id") REFERENCES "report_emplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organisation_indicator" ADD CONSTRAINT "organisation_indicator_organisation_id_fkey" FOREIGN KEY ("organisation_id") REFERENCES "organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organisation_indicator" ADD CONSTRAINT "organisation_indicator_indicator_id_fkey" FOREIGN KEY ("indicator_id") REFERENCES "indicator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "indicator_disaggregate" ADD CONSTRAINT "indicator_disaggregate_organisation_indicator_id_fkey" FOREIGN KEY ("organisation_indicator_id") REFERENCES "organisation_indicator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
