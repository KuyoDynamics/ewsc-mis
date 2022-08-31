/*
  Warnings:

  - You are about to drop the column `organisation_indicator_id` on the `indicator_disaggregate` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "indicator_disaggregate" DROP CONSTRAINT "indicator_disaggregate_organisation_indicator_id_fkey";

-- AlterTable
ALTER TABLE "indicator_disaggregate" DROP COLUMN "organisation_indicator_id";
