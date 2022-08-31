/*
  Warnings:

  - You are about to drop the column `indicator_disaggregate_id` on the `indicator_disaggregate_report` table. All the data in the column will be lost.
  - You are about to drop the `indicator_disaggregate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "indicator_disaggregate" DROP CONSTRAINT "indicator_disaggregate_disaggregate_option_id_fkey";

-- DropForeignKey
ALTER TABLE "indicator_disaggregate_report" DROP CONSTRAINT "indicator_disaggregate_report_indicator_disaggregate_id_fkey";

-- DropIndex
DROP INDEX "indicator_disaggregate_report_report_id_indicator_disaggreg_key";

-- AlterTable
ALTER TABLE "indicator_disaggregate_report" DROP COLUMN "indicator_disaggregate_id";

-- DropTable
DROP TABLE "indicator_disaggregate";
