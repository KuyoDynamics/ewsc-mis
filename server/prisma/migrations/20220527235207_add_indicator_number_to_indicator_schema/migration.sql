/*
  Warnings:

  - Added the required column `indicator_number` to the `indicator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "indicator" ADD COLUMN     "indicator_number" TEXT NOT NULL;
