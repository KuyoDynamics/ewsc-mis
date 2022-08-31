/*
  Warnings:

  - Added the required column `disaggregate_option_id` to the `indicator_disaggregate_report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "indicator_disaggregate_report" ADD COLUMN     "disaggregate_option_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "indicator_disaggregate_report" ADD CONSTRAINT "indicator_disaggregate_report_disaggregate_option_id_fkey" FOREIGN KEY ("disaggregate_option_id") REFERENCES "disaggregate_option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
