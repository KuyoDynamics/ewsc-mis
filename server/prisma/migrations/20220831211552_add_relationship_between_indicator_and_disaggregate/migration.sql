/*
  Warnings:

  - Added the required column `disaggregate_id` to the `indicator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "indicator" ADD COLUMN     "disaggregate_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "indicator" ADD CONSTRAINT "indicator_disaggregate_id_fkey" FOREIGN KEY ("disaggregate_id") REFERENCES "disaggregate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
