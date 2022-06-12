/*
  Warnings:

  - Added the required column `email` to the `user_invitation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organisation_id` to the `user_invitation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_invitation" ADD COLUMN     "district_ids" UUID[],
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "organisation_id" UUID NOT NULL;
