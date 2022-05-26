-- CreateEnum
CREATE TYPE "PermissionType" AS ENUM ('VIEW', 'CREATE', 'UPDATE', 'DELETE');

-- AlterTable
ALTER TABLE "user_role_scope" ADD COLUMN     "scope_permissions" "PermissionType"[];
