/*
  Warnings:

  - You are about to drop the `indicator_report` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "indicator_report" DROP CONSTRAINT "indicator_report_disaggregate_id_fkey";

-- DropForeignKey
ALTER TABLE "indicator_report" DROP CONSTRAINT "indicator_report_disaggregate_option_set_id_fkey";

-- DropForeignKey
ALTER TABLE "indicator_report" DROP CONSTRAINT "indicator_report_indicator_id_fkey";

-- DropForeignKey
ALTER TABLE "indicator_report" DROP CONSTRAINT "indicator_report_report_id_fkey";

-- DropTable
DROP TABLE "indicator_report";

-- CreateTable
CREATE TABLE "indicator_disaggregate_report" (
    "id" UUID NOT NULL,
    "target" DOUBLE PRECISION,
    "achieved" DOUBLE PRECISION NOT NULL,
    "comment" TEXT,
    "report_id" UUID NOT NULL,
    "disaggregate_option_set_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "indicator_disaggregate_report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "indicator_disaggregate_report_report_id_disaggregate_option_key" ON "indicator_disaggregate_report"("report_id", "disaggregate_option_set_id");

-- AddForeignKey
ALTER TABLE "indicator_disaggregate_report" ADD CONSTRAINT "indicator_disaggregate_report_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "indicator_disaggregate_report" ADD CONSTRAINT "indicator_disaggregate_report_disaggregate_option_set_id_fkey" FOREIGN KEY ("disaggregate_option_set_id") REFERENCES "disaggregate_option_set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
