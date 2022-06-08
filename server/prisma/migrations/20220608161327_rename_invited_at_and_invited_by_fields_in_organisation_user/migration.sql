/*
  Warnings:

  - You are about to drop the column `invited_at` on the `organisation_user` table. All the data in the column will be lost.
  - You are about to drop the column `invited_by` on the `organisation_user` table. All the data in the column will be lost.
  - Added the required column `created_by` to the `organisation_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "organisation_user" DROP COLUMN "invited_at",
DROP COLUMN "invited_by",
ADD COLUMN     "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" UUID NOT NULL;
