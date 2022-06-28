/*
  Warnings:

  - Made the column `is_owner` on table `organisation_user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_default_organisation` on table `organisation_user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "organisation_user" ALTER COLUMN "is_owner" SET NOT NULL,
ALTER COLUMN "is_default_organisation" SET NOT NULL;
