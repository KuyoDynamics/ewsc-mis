/*
  Warnings:

  - You are about to drop the column `email` on the `user_invitation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_invitation" DROP COLUMN "email",
ADD COLUMN     "emailAddresses" TEXT[];
