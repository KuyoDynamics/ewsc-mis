/*
  Warnings:

  - You are about to drop the `report_type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "report" DROP CONSTRAINT "report_organisation_report_template_id_fkey";

-- DropForeignKey
ALTER TABLE "report_type" DROP CONSTRAINT "report_type_organisation_id_fkey";

-- DropForeignKey
ALTER TABLE "report_type" DROP CONSTRAINT "report_type_report_template_id_fkey";

-- DropTable
DROP TABLE "report_type";

-- CreateTable
CREATE TABLE "organisation_report_template" (
    "id" UUID NOT NULL,
    "report_template_id" UUID NOT NULL,
    "organisation_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "organisation_report_template_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_organisation_report_template_id_fkey" FOREIGN KEY ("organisation_report_template_id") REFERENCES "organisation_report_template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organisation_report_template" ADD CONSTRAINT "organisation_report_template_organisation_id_fkey" FOREIGN KEY ("organisation_id") REFERENCES "organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organisation_report_template" ADD CONSTRAINT "organisation_report_template_report_template_id_fkey" FOREIGN KEY ("report_template_id") REFERENCES "report_emplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
