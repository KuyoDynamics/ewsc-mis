/*
  Warnings:

  - Changed the type of `status` on the `report_approval` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `report_type` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `frequency` on the `report_type` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cost_classification` on the `service_area` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `sewer_network` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `water_network` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `water_production_site` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `water_storage_tank` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `water_source` on the `water_treatment_plant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "approval_status" AS ENUM ('pending', 'in_progress', 'approved', 'rejected');

-- CreateEnum
CREATE TYPE "report_type_option" AS ENUM ('public_relations', 'commercial', 'technical', 'purchase_supply', 'personnel', 'finance', 'it', 'inventory');

-- CreateEnum
CREATE TYPE "reporting_frequency" AS ENUM ('weekly', 'monthly', 'quarterly', 'bi_annually', 'annually');

-- CreateEnum
CREATE TYPE "service_area_type" AS ENUM ('high-cost', 'low-cost', 'medium-cost', 'peri-urban', 'rural');

-- CreateEnum
CREATE TYPE "network_ownership_type" AS ENUM ('independent', 'internal');

-- CreateEnum
CREATE TYPE "water_storage_tank_type" AS ENUM ('production', 'distribution');

-- CreateEnum
CREATE TYPE "water_production_site_type" AS ENUM ('borehole', 'dam');

-- CreateEnum
CREATE TYPE "water_source_type" AS ENUM ('surface', 'ground');

-- AlterTable
ALTER TABLE "report_approval" DROP COLUMN "status",
ADD COLUMN     "status" "approval_status" NOT NULL;

-- AlterTable
ALTER TABLE "report_type" DROP COLUMN "type",
ADD COLUMN     "type" "report_type_option" NOT NULL,
DROP COLUMN "frequency",
ADD COLUMN     "frequency" "reporting_frequency" NOT NULL;

-- AlterTable
ALTER TABLE "service_area" DROP COLUMN "cost_classification",
ADD COLUMN     "cost_classification" "service_area_type" NOT NULL;

-- AlterTable
ALTER TABLE "sewer_network" DROP COLUMN "type",
ADD COLUMN     "type" "network_ownership_type" NOT NULL;

-- AlterTable
ALTER TABLE "water_network" DROP COLUMN "type",
ADD COLUMN     "type" "network_ownership_type" NOT NULL;

-- AlterTable
ALTER TABLE "water_production_site" DROP COLUMN "type",
ADD COLUMN     "type" "water_production_site_type" NOT NULL;

-- AlterTable
ALTER TABLE "water_storage_tank" DROP COLUMN "type",
ADD COLUMN     "type" "water_storage_tank_type" NOT NULL;

-- AlterTable
ALTER TABLE "water_treatment_plant" DROP COLUMN "water_source",
ADD COLUMN     "water_source" "water_source_type" NOT NULL;

-- DropEnum
DROP TYPE "ApprovalStatus";

-- DropEnum
DROP TYPE "NetworkOwnershipType";

-- DropEnum
DROP TYPE "ReportTypeOptions";

-- DropEnum
DROP TYPE "ReportingFrequency";

-- DropEnum
DROP TYPE "ServiceAreaType";

-- DropEnum
DROP TYPE "WaterProductionSiteType";

-- DropEnum
DROP TYPE "WaterSource";

-- DropEnum
DROP TYPE "WaterStorageTankType";
