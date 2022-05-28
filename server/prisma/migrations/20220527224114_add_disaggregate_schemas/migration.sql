/*
  Warnings:

  - Added the required column `disaggregate_id` to the `indicator` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "disaggregate_type" AS ENUM ('number', 'with_parameters');

-- AlterTable
ALTER TABLE "indicator" ADD COLUMN     "disaggregate_id" UUID NOT NULL;

-- CreateTable
CREATE TABLE "disaggregate" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "type" "disaggregate_type" NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "disaggregate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disaggregate_option_set" (
    "id" UUID NOT NULL,
    "disaggregate_id" UUID NOT NULL,
    "option_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "disaggregate_option_set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disaggregate_option" (
    "id" UUID NOT NULL,
    "option_name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "disaggregate_option_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "disaggregate_name_key" ON "disaggregate"("name");

-- CreateIndex
CREATE UNIQUE INDEX "disaggregate_option_option_name_key" ON "disaggregate_option"("option_name");

-- AddForeignKey
ALTER TABLE "indicator" ADD CONSTRAINT "indicator_disaggregate_id_fkey" FOREIGN KEY ("disaggregate_id") REFERENCES "disaggregate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disaggregate_option_set" ADD CONSTRAINT "disaggregate_option_set_disaggregate_id_fkey" FOREIGN KEY ("disaggregate_id") REFERENCES "disaggregate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disaggregate_option_set" ADD CONSTRAINT "disaggregate_option_set_option_id_fkey" FOREIGN KEY ("option_id") REFERENCES "disaggregate_option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
