import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module.js';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { ProfileModule } from './profile/profile.module.js';
import { ProfileController } from './profile.controller.js';
import { ProfileService } from './profile.service.js';
import { RolesModule } from './roles/roles.module.js';
import { RolesController } from './roles.controller.js';
import { RolesService } from './roles.service.js';
import { PartnersModule } from './partners/partners.module.js';
import { PartnersController } from './partners.controller.js';
import { PartnersService } from './partners.service.js';

@Module({
  imports: [AuthModule, ProfileModule, RolesModule, PartnersModule],
  controllers: [AuthController, ProfileController, RolesController, PartnersController],
  providers: [AuthService, ProfileService, RolesService, PartnersService]
})
export class UsersModule {}
