/*
  Warnings:

  - You are about to drop the column `emailAddresses` on the `user_invitation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_invitation" DROP COLUMN "emailAddresses",
ADD COLUMN     "email_addresses" TEXT[];
