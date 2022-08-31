/*
  Warnings:

  - You are about to drop the column `organisation_id` on the `organisation_indicator` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "organisation_indicator" DROP CONSTRAINT "organisation_indicator_organisation_id_fkey";

-- AlterTable
ALTER TABLE "organisation_indicator" DROP COLUMN "organisation_id";
