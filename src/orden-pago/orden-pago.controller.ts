import { Query,Controller, Res, Post, Get, Put, Delete, Param, Body, HttpStatus, NotFoundException} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrdenPagoDto } from './dto/orden-pago.dto'
import { OrdenPagoService } from './orden-pago.service';
import { FilterDto } from '../shared/dto/filter.dto';

@ApiTags('orden-pago')
@Controller('orden-pago')
export class OrdenPagoController {

    constructor(private readonly ordenPagoService: OrdenPagoService) { }
    @Post()
    post(@Body() ordenPagoDto: OrdenPagoDto) {
        return this.ordenPagoService.post(ordenPagoDto);
    }
    @Get()
    get(@Query() filterDto: FilterDto) {
        return this.ordenPagoService.getAll(filterDto)
    }
    @Put('/:id')
    put(@Param('id') id: string, @Body() ordenPagoDto: OrdenPagoDto) {
        return this.ordenPagoService.put(id, ordenPagoDto)
    }
    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.ordenPagoService.delete(id)
    }

}
