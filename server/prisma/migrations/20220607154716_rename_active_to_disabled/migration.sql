/*
  Warnings:

  - You are about to drop the column `active` on the `catchment_province` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "catchment_province" DROP COLUMN "active",
ADD COLUMN     "disabled" BOOLEAN NOT NULL DEFAULT true;
