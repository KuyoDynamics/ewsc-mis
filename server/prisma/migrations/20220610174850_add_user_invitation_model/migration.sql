-- CreateTable
CREATE TABLE "user_invitation" (
    "id" UUID NOT NULL,
    "ttl" TIMESTAMP(3) NOT NULL,
    "invitation_token" TEXT NOT NULL,

    CONSTRAINT "user_invitation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_invitation_invitation_token_key" ON "user_invitation"("invitation_token");
