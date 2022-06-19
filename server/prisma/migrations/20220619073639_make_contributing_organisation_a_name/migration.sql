/*
  Warnings:

  - You are about to drop the column `contributing_organisation_id` on the `indicator` table. All the data in the column will be lost.
  - Added the required column `contributing_organisation` to the `indicator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "indicator" DROP COLUMN "contributing_organisation_id",
ADD COLUMN     "contributing_organisation" TEXT NOT NULL;
