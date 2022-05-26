-- CreateTable
CREATE TABLE "district_user" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "district_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "district_user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "district_user_user_id_district_id_key" ON "district_user"("user_id", "district_id");

-- AddForeignKey
ALTER TABLE "district_user" ADD CONSTRAINT "district_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "organisation_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "district_user" ADD CONSTRAINT "district_user_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "organisation_district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
