/*
  Warnings:

  - A unique constraint covering the columns `[role,user_id]` on the table `user_role` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_role_role_user_id_key" ON "user_role"("role", "user_id");
