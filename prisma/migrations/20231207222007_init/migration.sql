-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roleId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profile` (
    `id` INTEGER NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `address` TEXT NULL,
    `birthDate` DATETIME(3) NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `profile_email_key`(`email`),
    UNIQUE INDEX `profile_phone_key`(`phone`),
    UNIQUE INDEX `profile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `history` (
    `id` INTEGER NOT NULL,
    `condition` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `peminjamanId` INTEGER NOT NULL,

    UNIQUE INDEX `history_peminjamanId_key`(`peminjamanId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `address` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `images` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `peminjaman` (
    `id` INTEGER NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `description` TEXT NOT NULL,
    `userId` INTEGER NOT NULL,
    `inventoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history` ADD CONSTRAINT `history_peminjamanId_fkey` FOREIGN KEY (`peminjamanId`) REFERENCES `peminjaman`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `peminjaman` ADD CONSTRAINT `peminjaman_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `peminjaman` ADD CONSTRAINT `peminjaman_inventoryId_fkey` FOREIGN KEY (`inventoryId`) REFERENCES `inventory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
