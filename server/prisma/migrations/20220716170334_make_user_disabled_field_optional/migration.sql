/*
  Warnings:

  - Made the column `theme` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `disabled` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `master_support` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "theme" SET NOT NULL,
ALTER COLUMN "disabled" SET NOT NULL,
ALTER COLUMN "master_support" SET NOT NULL;
