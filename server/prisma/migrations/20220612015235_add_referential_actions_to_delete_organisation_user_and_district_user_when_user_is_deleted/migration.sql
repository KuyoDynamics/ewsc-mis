-- DropForeignKey
ALTER TABLE "district_user" DROP CONSTRAINT "district_user_organisation_user_id_fkey";

-- DropForeignKey
ALTER TABLE "organisation_user" DROP CONSTRAINT "organisation_user_user_id_fkey";

-- AddForeignKey
ALTER TABLE "organisation_user" ADD CONSTRAINT "organisation_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "district_user" ADD CONSTRAINT "district_user_organisation_user_id_fkey" FOREIGN KEY ("organisation_user_id") REFERENCES "organisation_user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
