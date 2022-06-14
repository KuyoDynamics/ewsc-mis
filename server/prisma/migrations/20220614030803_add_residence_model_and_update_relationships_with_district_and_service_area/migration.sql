/*
  Warnings:

  - You are about to drop the column `cost_classification` on the `service_area` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `service_area` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[residence_id,catchment_district_id]` on the table `service_area` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `residence_id` to the `service_area` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "residence_classification" AS ENUM ('high-cost', 'low-cost', 'medium-cost', 'peri-urban', 'rural');

-- DropIndex
DROP INDEX "service_area_name_catchment_district_id_key";

-- AlterTable
ALTER TABLE "service_area" DROP COLUMN "cost_classification",
DROP COLUMN "name",
ADD COLUMN     "residence_id" UUID NOT NULL;

-- DropEnum
DROP TYPE "service_area_classification";

-- CreateTable
CREATE TABLE "residence" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "cost_classification" "residence_classification" NOT NULL,
    "district_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "residence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "residence_name_district_id_key" ON "residence"("name", "district_id");

-- CreateIndex
CREATE UNIQUE INDEX "service_area_residence_id_catchment_district_id_key" ON "service_area"("residence_id", "catchment_district_id");

-- AddForeignKey
ALTER TABLE "residence" ADD CONSTRAINT "residence_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_area" ADD CONSTRAINT "service_area_residence_id_fkey" FOREIGN KEY ("residence_id") REFERENCES "residence"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
