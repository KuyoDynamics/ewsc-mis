-- CreateEnum
CREATE TYPE "RoleScopeLevel" AS ENUM ('organisation', 'district');

-- CreateTable
CREATE TABLE "user_role_scope" (
    "id" UUID NOT NULL,
    "scope_level" "RoleScopeLevel" NOT NULL,
    "scope_level_id" UUID NOT NULL,
    "user_role_id" UUID NOT NULL,

    CONSTRAINT "user_role_scope_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_role_scope_scope_level_scope_level_id_user_role_id_key" ON "user_role_scope"("scope_level", "scope_level_id", "user_role_id");

-- AddForeignKey
ALTER TABLE "user_role_scope" ADD CONSTRAINT "user_role_scope_user_role_id_fkey" FOREIGN KEY ("user_role_id") REFERENCES "user_role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
