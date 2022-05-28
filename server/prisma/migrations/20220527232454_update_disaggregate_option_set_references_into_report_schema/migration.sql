/*
  Warnings:

  - You are about to drop the column `option_id` on the `disaggregate_option_set` table. All the data in the column will be lost.
  - Added the required column `disaggregate_option_id` to the `disaggregate_option_set` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "disaggregate_option_set" DROP CONSTRAINT "disaggregate_option_set_option_id_fkey";

-- AlterTable
ALTER TABLE "disaggregate_option_set" DROP COLUMN "option_id",
ADD COLUMN     "disaggregate_option_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "disaggregate_option_set" ADD CONSTRAINT "disaggregate_option_set_disaggregate_option_id_fkey" FOREIGN KEY ("disaggregate_option_id") REFERENCES "disaggregate_option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
