import { Controller, Post, Get, Put, Delete, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrdenPagoDto } from 'src/orden-pago/dto/orden-pago.dto';
import { AutorizacionGiroService } from './autorizacion-giro.service';
import { AutorizacionGiroDTO } from './dto/autorizacion-giro.dto';

@ApiTags('autorizacion-giro')
@Controller('autorizacion-giro')
export class AutorizacionGiroController {

    constructor(private readonly autorizacionGiroServive: AutorizacionGiroService) {}

    @Post()
    post(@Body() autorizacionGiroDTO: AutorizacionGiroDTO) {
        return this.autorizacionGiroServive.post(autorizacionGiroDTO);
    }
}
