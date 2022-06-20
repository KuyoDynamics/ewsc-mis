/*
  Warnings:

  - Made the column `contributing_organisation_id` on table `indicator` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "indicator" ALTER COLUMN "contributing_organisation_id" SET NOT NULL;
