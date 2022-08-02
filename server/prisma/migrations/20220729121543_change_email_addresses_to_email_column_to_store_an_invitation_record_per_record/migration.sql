/*
  Warnings:

  - You are about to drop the column `email_addresses` on the `user_invitation` table. All the data in the column will be lost.
  - Added the required column `email` to the `user_invitation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_invitation" DROP COLUMN "email_addresses",
ADD COLUMN     "email" TEXT NOT NULL;
