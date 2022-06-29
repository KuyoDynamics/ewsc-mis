/*
  Warnings:

  - Made the column `is_default_user_district` on table `district_user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "district_user" ALTER COLUMN "is_default_user_district" SET NOT NULL,
ALTER COLUMN "is_default_user_district" SET DEFAULT false;
