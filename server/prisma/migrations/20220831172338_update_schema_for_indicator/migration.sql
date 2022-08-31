-- DropForeignKey
ALTER TABLE "indicator" DROP CONSTRAINT "indicator_report_template_id_fkey";

-- AlterTable
ALTER TABLE "indicator" ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "report_template_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "indicator" ADD CONSTRAINT "indicator_report_template_id_fkey" FOREIGN KEY ("report_template_id") REFERENCES "report_emplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
