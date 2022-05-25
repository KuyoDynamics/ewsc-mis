-- CreateEnum
CREATE TYPE "ReportTypeOptions" AS ENUM ('public_relations', 'commercial', 'technical', 'purchase_supply', 'personnel', 'finance', 'it', 'inventory');

-- CreateEnum
CREATE TYPE "ReportingFrequency" AS ENUM ('weekly', 'monthly', 'quarterly', 'bi_annually', 'annually');

-- CreateTable
CREATE TABLE "report" (
    "id" UUID NOT NULL,
    "reporting_period" TEXT NOT NULL,
    "due_date" TIMESTAMPTZ NOT NULL,
    "reporting_date" TIMESTAMPTZ NOT NULL,
    "report_type_id" UUID,
    "catchment_area_id" UUID,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report_type" (
    "id" UUID NOT NULL,
    "type" "ReportTypeOptions" NOT NULL,
    "frequency" "ReportingFrequency" NOT NULL,
    "window" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "report_type_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_catchment_area_id_fkey" FOREIGN KEY ("catchment_area_id") REFERENCES "organisation_district"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_report_type_id_fkey" FOREIGN KEY ("report_type_id") REFERENCES "report_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
