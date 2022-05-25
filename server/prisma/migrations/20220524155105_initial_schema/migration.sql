-- CreateEnum
CREATE TYPE "ServiceAreaType" AS ENUM ('high-cost', 'low-cost', 'medium-cost', 'peri-urban', 'rural');

-- CreateEnum
CREATE TYPE "NetworkOwnershipType" AS ENUM ('independent', 'internal');

-- CreateEnum
CREATE TYPE "WaterStorageTankType" AS ENUM ('production', 'distribution');

-- CreateEnum
CREATE TYPE "WaterProductionSiteType" AS ENUM ('borehole', 'dam');

-- CreateEnum
CREATE TYPE "WaterSource" AS ENUM ('surface', 'ground');

-- CreateTable
CREATE TABLE "country" (
    "id" UUID NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "flag" BYTEA NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "province" (
    "id" UUID NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "district" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "province_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "district_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organisation" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "logo" BYTEA,
    "country_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "organisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organisation_district" (
    "id" UUID NOT NULL,
    "organisation_id" UUID NOT NULL,
    "district_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "organisation_district_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "water_treatment_plant" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "water_source" "WaterSource" NOT NULL,
    "production_capacity" DOUBLE PRECISION NOT NULL,
    "gps" TEXT,
    "organisation_district_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "water_treatment_plant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "water_production_site" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "static_suction_head" DOUBLE PRECISION NOT NULL,
    "static_discharge_head" DOUBLE PRECISION NOT NULL,
    "gps" TEXT,
    "type" "WaterProductionSiteType" NOT NULL,
    "plant_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "water_production_site_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "water_storage_tank" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "type" "WaterStorageTankType" NOT NULL,
    "storage_capacity" DOUBLE PRECISION NOT NULL,
    "gps" TEXT,
    "plant_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "water_storage_tank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "water_network" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "plant_id" UUID NOT NULL,
    "type" "NetworkOwnershipType" NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "water_network_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_area" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "cost_classification" "ServiceAreaType" NOT NULL,
    "organisation_district_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "service_area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_area_water_connection" (
    "connections" BIGINT NOT NULL,
    "water_netowrk_id" UUID NOT NULL,
    "service_area_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "service_area_water_connection_pkey" PRIMARY KEY ("water_netowrk_id","service_area_id")
);

-- CreateTable
CREATE TABLE "sewer_treatment_plant" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "capacity" DOUBLE PRECISION NOT NULL,
    "ponds" INTEGER NOT NULL,
    "gps" TEXT,
    "organisation_district_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "sewer_treatment_plant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sewer_network" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "plant_id" UUID NOT NULL,
    "type" "NetworkOwnershipType" NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "sewer_network_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_area_sewer_connection" (
    "connections" BIGINT NOT NULL,
    "sewer_netowrk_id" UUID NOT NULL,
    "service_area_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "service_area_sewer_connection_pkey" PRIMARY KEY ("sewer_netowrk_id","service_area_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "country_code_key" ON "country"("code");

-- CreateIndex
CREATE UNIQUE INDEX "country_name_key" ON "country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "province_code_key" ON "province"("code");

-- CreateIndex
CREATE UNIQUE INDEX "province_name_key" ON "province"("name");

-- CreateIndex
CREATE UNIQUE INDEX "province_code_name_country_id_key" ON "province"("code", "name", "country_id");

-- CreateIndex
CREATE UNIQUE INDEX "district_name_code_province_id_key" ON "district"("name", "code", "province_id");

-- CreateIndex
CREATE UNIQUE INDEX "organisation_name_key" ON "organisation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "organisation_district_organisation_id_district_id_key" ON "organisation_district"("organisation_id", "district_id");

-- CreateIndex
CREATE UNIQUE INDEX "water_treatment_plant_name_organisation_district_id_key" ON "water_treatment_plant"("name", "organisation_district_id");

-- CreateIndex
CREATE UNIQUE INDEX "water_storage_tank_name_plant_id_key" ON "water_storage_tank"("name", "plant_id");

-- CreateIndex
CREATE UNIQUE INDEX "water_network_name_plant_id_key" ON "water_network"("name", "plant_id");

-- CreateIndex
CREATE UNIQUE INDEX "service_area_name_organisation_district_id_key" ON "service_area"("name", "organisation_district_id");

-- CreateIndex
CREATE UNIQUE INDEX "sewer_treatment_plant_name_organisation_district_id_key" ON "sewer_treatment_plant"("name", "organisation_district_id");

-- CreateIndex
CREATE UNIQUE INDEX "sewer_network_name_plant_id_key" ON "sewer_network"("name", "plant_id");

-- AddForeignKey
ALTER TABLE "province" ADD CONSTRAINT "province_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "district" ADD CONSTRAINT "district_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organisation" ADD CONSTRAINT "organisation_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organisation_district" ADD CONSTRAINT "organisation_district_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organisation_district" ADD CONSTRAINT "organisation_district_organisation_id_fkey" FOREIGN KEY ("organisation_id") REFERENCES "organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "water_treatment_plant" ADD CONSTRAINT "water_treatment_plant_organisation_district_id_fkey" FOREIGN KEY ("organisation_district_id") REFERENCES "organisation_district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "water_production_site" ADD CONSTRAINT "water_production_site_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "water_treatment_plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "water_storage_tank" ADD CONSTRAINT "water_storage_tank_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "water_treatment_plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "water_network" ADD CONSTRAINT "water_network_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "water_treatment_plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_area" ADD CONSTRAINT "service_area_organisation_district_id_fkey" FOREIGN KEY ("organisation_district_id") REFERENCES "organisation_district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_area_water_connection" ADD CONSTRAINT "service_area_water_connection_water_netowrk_id_fkey" FOREIGN KEY ("water_netowrk_id") REFERENCES "water_network"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_area_water_connection" ADD CONSTRAINT "service_area_water_connection_service_area_id_fkey" FOREIGN KEY ("service_area_id") REFERENCES "service_area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sewer_treatment_plant" ADD CONSTRAINT "sewer_treatment_plant_organisation_district_id_fkey" FOREIGN KEY ("organisation_district_id") REFERENCES "organisation_district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sewer_network" ADD CONSTRAINT "sewer_network_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "sewer_treatment_plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_area_sewer_connection" ADD CONSTRAINT "service_area_sewer_connection_service_area_id_fkey" FOREIGN KEY ("service_area_id") REFERENCES "service_area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_area_sewer_connection" ADD CONSTRAINT "service_area_sewer_connection_sewer_netowrk_id_fkey" FOREIGN KEY ("sewer_netowrk_id") REFERENCES "sewer_network"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
