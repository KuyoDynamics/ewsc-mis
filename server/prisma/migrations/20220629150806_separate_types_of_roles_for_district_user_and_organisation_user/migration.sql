/*
  Warnings:

  - You are about to drop the column `role` on the `district_user` table. All the data in the column will be lost.
  - The `role` column on the `organisation_user` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "organisation_user_role_type" AS ENUM ('support', 'owner', 'admin', 'user');

-- CreateEnum
CREATE TYPE "district_user_role_type" AS ENUM ('district_manager', 'approver', 'data_entry', 'user');

-- AlterTable
ALTER TABLE "district_user" DROP COLUMN "role",
ADD COLUMN     "roles" "district_user_role_type"[];

-- AlterTable
ALTER TABLE "organisation_user" DROP COLUMN "role",
ADD COLUMN     "role" "organisation_user_role_type" NOT NULL DEFAULT E'user';

-- DropEnum
DROP TYPE "user_role_type";
