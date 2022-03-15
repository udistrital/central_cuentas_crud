import { Controller, Post, Get, Put, Delete, Body, Query, Param, NotFoundException, HttpStatus, Res, } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrdenPagoDto } from 'src/orden-pago/dto/orden-pago.dto';
import { FilterDto } from 'src/shared/dto/filter.dto';
import { AutorizacionGiroService } from './autorizacion-giro.service';
import { AutorizacionGiroDTO } from './dto/autorizacion-giro.dto';

@ApiTags('autorizacion-giro')
@Controller('autorizacion-giro')
export class AutorizacionGiroController {

    constructor(private readonly autorizacionGiroServive: AutorizacionGiroService) {}

    @Post()
    post(@Body() autorizacionGiroDTO: AutorizacionGiroDTO) {
        console.log(autorizacionGiroDTO)
        return this.autorizacionGiroServive.post(autorizacionGiroDTO);
    }
    @Get()
    getAll(@Query() filterDto: FilterDto) {
        return this.autorizacionGiroServive.getAll(filterDto)
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string) {
        const autorizacionGiro = await this.autorizacionGiroServive.getById(id);
        if (!autorizacionGiro) throw new NotFoundException("not found resource");
        return res.status(HttpStatus.OK).json({
            Data: autorizacionGiro,
            Message: "Request successfull",
            Status: "200",
            Success: true
        });
  }

    @Put(':id')
    put(@Param('id') id: string, @Body() autorizacionGiroDTO: AutorizacionGiroDTO){
        return this.autorizacionGiroServive.put(id, autorizacionGiroDTO)
    }
    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.autorizacionGiroServive.delete(id)
    }
}
