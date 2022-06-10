/*
  Warnings:

  - You are about to drop the column `invitation_mode` on the `organisation_user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "organisation_user" DROP COLUMN "invitation_mode";

-- DropEnum
DROP TYPE "user_invitation_mode";
