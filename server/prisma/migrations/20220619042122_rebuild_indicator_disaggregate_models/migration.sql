/*
  Warnings:

  - You are about to drop the column `option_name` on the `disaggregate_option` table. All the data in the column will be lost.
  - You are about to drop the column `disaggregate_id` on the `indicator` table. All the data in the column will be lost.
  - You are about to drop the `disaggregate_option_set` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `disaggregate_option_set_report` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `disaggregate_id` to the `disaggregate_option` table without a default value. This is not possible if the table is not empty.
  - Added the required column `option_id` to the `disaggregate_option` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "disaggregate_option_set" DROP CONSTRAINT "disaggregate_option_set_disaggregate_id_fkey";

-- DropForeignKey
ALTER TABLE "disaggregate_option_set" DROP CONSTRAINT "disaggregate_option_set_disaggregate_option_id_fkey";

-- DropForeignKey
ALTER TABLE "disaggregate_option_set_report" DROP CONSTRAINT "disaggregate_option_set_report_disaggregate_option_set_id_fkey";

-- DropForeignKey
ALTER TABLE "disaggregate_option_set_report" DROP CONSTRAINT "disaggregate_option_set_report_report_id_fkey";

-- DropForeignKey
ALTER TABLE "indicator" DROP CONSTRAINT "indicator_disaggregate_id_fkey";

-- DropIndex
DROP INDEX "disaggregate_option_option_name_key";

-- AlterTable
ALTER TABLE "disaggregate_option" DROP COLUMN "option_name",
ADD COLUMN     "disaggregate_id" UUID NOT NULL,
ADD COLUMN     "option_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "indicator" DROP COLUMN "disaggregate_id";

-- DropTable
DROP TABLE "disaggregate_option_set";

-- DropTable
DROP TABLE "disaggregate_option_set_report";

-- CreateTable
CREATE TABLE "indicator_disaggregate_report" (
    "id" UUID NOT NULL,
    "target" DOUBLE PRECISION,
    "achieved" DOUBLE PRECISION NOT NULL,
    "comment" TEXT,
    "report_id" UUID NOT NULL,
    "indicator_disaggregate_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "indicator_disaggregate_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "indicator_disaggregate" (
    "id" UUID NOT NULL,
    "indicator_id" UUID NOT NULL,
    "disaggregate_option_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "indicator_disaggregate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "option" (
    "id" UUID NOT NULL,
    "option_name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "option_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "indicator_disaggregate_report_report_id_indicator_disaggreg_key" ON "indicator_disaggregate_report"("report_id", "indicator_disaggregate_id");

-- CreateIndex
CREATE UNIQUE INDEX "option_option_name_key" ON "option"("option_name");

-- AddForeignKey
ALTER TABLE "indicator_disaggregate_report" ADD CONSTRAINT "indicator_disaggregate_report_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "indicator_disaggregate_report" ADD CONSTRAINT "indicator_disaggregate_report_indicator_disaggregate_id_fkey" FOREIGN KEY ("indicator_disaggregate_id") REFERENCES "indicator_disaggregate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "indicator_disaggregate" ADD CONSTRAINT "indicator_disaggregate_indicator_id_fkey" FOREIGN KEY ("indicator_id") REFERENCES "indicator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "indicator_disaggregate" ADD CONSTRAINT "indicator_disaggregate_disaggregate_option_id_fkey" FOREIGN KEY ("disaggregate_option_id") REFERENCES "disaggregate_option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disaggregate_option" ADD CONSTRAINT "disaggregate_option_disaggregate_id_fkey" FOREIGN KEY ("disaggregate_id") REFERENCES "disaggregate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disaggregate_option" ADD CONSTRAINT "disaggregate_option_option_id_fkey" FOREIGN KEY ("option_id") REFERENCES "option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
