/*
  Warnings:

  - Added the required column `disaggregate_id` to the `indicator_report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disaggregate_option_set_id` to the `indicator_report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "indicator_report" ADD COLUMN     "disaggregate_id" UUID NOT NULL,
ADD COLUMN     "disaggregate_option_set_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "indicator_report" ADD CONSTRAINT "indicator_report_disaggregate_id_fkey" FOREIGN KEY ("disaggregate_id") REFERENCES "disaggregate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "indicator_report" ADD CONSTRAINT "indicator_report_disaggregate_option_set_id_fkey" FOREIGN KEY ("disaggregate_option_set_id") REFERENCES "disaggregate_option_set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
