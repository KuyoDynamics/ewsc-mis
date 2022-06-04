/*
  Warnings:

  - You are about to drop the column `organisation_id` on the `catchment_district` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[catchment_province_id,district_id]` on the table `catchment_district` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `catchment_province_id` to the `catchment_district` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "catchment_district" DROP CONSTRAINT "catchment_district_organisation_id_fkey";

-- DropIndex
DROP INDEX "catchment_district_organisation_id_district_id_key";

-- AlterTable
ALTER TABLE "catchment_district" DROP COLUMN "organisation_id",
ADD COLUMN     "catchment_province_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "hashed_confirmation_token" DROP NOT NULL,
ALTER COLUMN "hashed_password_reset_token" DROP NOT NULL,
ALTER COLUMN "theme" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user_role" ALTER COLUMN "role" SET DEFAULT E'user';

-- CreateTable
CREATE TABLE "catchment_province" (
    "id" UUID NOT NULL,
    "province_id" UUID NOT NULL,
    "organisation_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "catchment_province_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "catchment_district_catchment_province_id_district_id_key" ON "catchment_district"("catchment_province_id", "district_id");

-- AddForeignKey
ALTER TABLE "catchment_district" ADD CONSTRAINT "catchment_district_catchment_province_id_fkey" FOREIGN KEY ("catchment_province_id") REFERENCES "catchment_province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catchment_province" ADD CONSTRAINT "catchment_province_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catchment_province" ADD CONSTRAINT "catchment_province_organisation_id_fkey" FOREIGN KEY ("organisation_id") REFERENCES "organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
