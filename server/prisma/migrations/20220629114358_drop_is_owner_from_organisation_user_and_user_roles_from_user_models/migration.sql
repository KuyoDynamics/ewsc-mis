/*
  Warnings:

  - You are about to drop the column `is_owner` on the `organisation_user` table. All the data in the column will be lost.
  - You are about to drop the column `user_roles` on the `user` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "user_role_type" ADD VALUE 'owner';

-- AlterTable
ALTER TABLE "district_user" ADD COLUMN     "role" "user_role_type" NOT NULL DEFAULT E'user';

-- AlterTable
ALTER TABLE "organisation_user" DROP COLUMN "is_owner",
ADD COLUMN     "role" "user_role_type" NOT NULL DEFAULT E'user';

-- AlterTable
ALTER TABLE "user" DROP COLUMN "user_roles";
