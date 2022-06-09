/*
  Warnings:

  - You are about to drop the `user_role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_role_scope` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_role" DROP CONSTRAINT "user_role_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_role_scope" DROP CONSTRAINT "user_role_scope_user_role_id_fkey";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "user_roles" "user_role_type"[];

-- DropTable
DROP TABLE "user_role";

-- DropTable
DROP TABLE "user_role_scope";

-- DropEnum
DROP TYPE "permission_type";

-- DropEnum
DROP TYPE "role_scope_level";
