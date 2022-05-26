/*
  Warnings:

  - The `scope_permissions` column on the `user_role_scope` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `scope_level` on the `user_role_scope` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "permission_type" AS ENUM ('view', 'create', 'update', 'delete');

-- CreateEnum
CREATE TYPE "role_scope_level" AS ENUM ('organisation', 'district');

-- AlterTable
ALTER TABLE "user_role_scope" DROP COLUMN "scope_level",
ADD COLUMN     "scope_level" "role_scope_level" NOT NULL,
DROP COLUMN "scope_permissions",
ADD COLUMN     "scope_permissions" "permission_type"[];

-- DropEnum
DROP TYPE "PermissionType";

-- DropEnum
DROP TYPE "RoleScopeLevel";

-- CreateIndex
CREATE UNIQUE INDEX "user_role_scope_scope_level_scope_level_id_user_role_id_key" ON "user_role_scope"("scope_level", "scope_level_id", "user_role_id");
