/*
  Warnings:

  - Added the required column `organisation_report_template_id` to the `organisation_indicator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "organisation_indicator" ADD COLUMN     "organisation_report_template_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "organisation_indicator" ADD CONSTRAINT "organisation_indicator_organisation_report_template_id_fkey" FOREIGN KEY ("organisation_report_template_id") REFERENCES "organisation_report_template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
