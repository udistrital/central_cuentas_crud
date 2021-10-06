import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AutorizacionGiroController } from './autorizacion-giro.controller';
import { AutorizacionGiroService } from './autorizacion-giro.service';
import { AutorizacionGiro, AutorizacionGiroSchema } from './schemas/autorizacion-giro.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: AutorizacionGiro.name, schema: AutorizacionGiroSchema
    }])
  ],
  controllers: [AutorizacionGiroController],
  providers: [AutorizacionGiroService]
})
export class AutorizacionGiroModule {}
