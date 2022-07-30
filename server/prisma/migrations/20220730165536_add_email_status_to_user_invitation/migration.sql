-- CreateEnum
CREATE TYPE "EmailStatus" AS ENUM ('accepted', 'rejected', 'failed', 'pending');

-- AlterTable
ALTER TABLE "user_invitation" ADD COLUMN     "email_status" "EmailStatus" NOT NULL DEFAULT E'pending';
