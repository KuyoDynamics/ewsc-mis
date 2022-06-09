/*
  Warnings:

  - Added the required column `created_by` to the `user_role_scope` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_modified_at` to the `user_role_scope` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_modified_by` to the `user_role_scope` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_role_scope" ADD COLUMN     "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT NOT NULL,
ADD COLUMN     "last_modified_at" TIMESTAMPTZ NOT NULL,
ADD COLUMN     "last_modified_by" TEXT NOT NULL;
