/*
  Warnings:

  - A unique constraint covering the columns `[reporting_period,report_type_id,catchment_area_id]` on the table `report` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "indicator_report" (
    "id" UUID NOT NULL,
    "target" DOUBLE PRECISION,
    "achieved" DOUBLE PRECISION NOT NULL,
    "comment" TEXT,
    "report_id" UUID NOT NULL,
    "indicator_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "indicator_report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "indicator_report_report_id_indicator_id_key" ON "indicator_report"("report_id", "indicator_id");

-- CreateIndex
CREATE UNIQUE INDEX "report_reporting_period_report_type_id_catchment_area_id_key" ON "report"("reporting_period", "report_type_id", "catchment_area_id");

-- AddForeignKey
ALTER TABLE "indicator_report" ADD CONSTRAINT "indicator_report_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "indicator_report" ADD CONSTRAINT "indicator_report_indicator_id_fkey" FOREIGN KEY ("indicator_id") REFERENCES "indicator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
