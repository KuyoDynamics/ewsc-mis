/*
  Warnings:

  - The values [accepted] on the enum `EmailStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EmailStatus_new" AS ENUM ('sent', 'rejected', 'failed', 'pending');
ALTER TABLE "user_invitation" ALTER COLUMN "email_status" DROP DEFAULT;
ALTER TABLE "user_invitation" ALTER COLUMN "email_status" TYPE "EmailStatus_new" USING ("email_status"::text::"EmailStatus_new");
ALTER TYPE "EmailStatus" RENAME TO "EmailStatus_old";
ALTER TYPE "EmailStatus_new" RENAME TO "EmailStatus";
DROP TYPE "EmailStatus_old";
ALTER TABLE "user_invitation" ALTER COLUMN "email_status" SET DEFAULT 'pending';
COMMIT;
