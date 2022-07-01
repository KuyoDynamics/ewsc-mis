/*
  Warnings:

  - You are about to drop the column `district_ids` on the `user_invitation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_invitation" DROP COLUMN "district_ids",
ADD COLUMN     "catchment_district_ids" UUID[];
