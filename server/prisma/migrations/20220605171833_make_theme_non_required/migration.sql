/*
  Warnings:

  - The `theme` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "user_theme" AS ENUM ('dark', 'light');

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "confirmed_at" DROP NOT NULL,
ALTER COLUMN "last_login" DROP NOT NULL,
DROP COLUMN "theme",
ADD COLUMN     "theme" "user_theme" DEFAULT E'light';
