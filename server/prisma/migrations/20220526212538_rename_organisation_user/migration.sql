/*
  Warnings:

  - You are about to drop the `OrganisationUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrganisationUser" DROP CONSTRAINT "OrganisationUser_organisation_id_fkey";

-- DropForeignKey
ALTER TABLE "OrganisationUser" DROP CONSTRAINT "OrganisationUser_user_id_fkey";

-- DropTable
DROP TABLE "OrganisationUser";

-- CreateTable
CREATE TABLE "organisation_user" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "organisation_id" UUID NOT NULL,
    "is_owner" BOOLEAN NOT NULL DEFAULT false,
    "invited_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "invited_by" UUID NOT NULL,
    "invitation_mode" "user_invitation_mode" NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" UUID NOT NULL,

    CONSTRAINT "organisation_user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "organisation_user_user_id_organisation_id_key" ON "organisation_user"("user_id", "organisation_id");

-- AddForeignKey
ALTER TABLE "organisation_user" ADD CONSTRAINT "organisation_user_organisation_id_fkey" FOREIGN KEY ("organisation_id") REFERENCES "organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organisation_user" ADD CONSTRAINT "organisation_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
