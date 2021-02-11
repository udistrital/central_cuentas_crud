import { Controller, Post , Body, Get, Put, Param, Delete, Query} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {OrdenPagoDto} from './dto/orden-pago.dto'

@ApiTags('orden-pago')
@Controller('orden-pago')
export class OrdenPagoController {
    @Post() // http://localhost:3000/heroes
    post(@Body() ordenPagoDto: OrdenPagoDto ) {
    }
}
