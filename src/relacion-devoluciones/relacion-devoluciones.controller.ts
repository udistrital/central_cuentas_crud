import { Query,Controller, Res, Post, Get, Put, Delete, Param, Body, HttpStatus, NotFoundException} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RelacionDevolucionesDto } from './dto/relacion-devoluciones.dto';
import { RelacionDevolucionesService } from './relacion-devoluciones.service';
import { FilterDto } from '../shared/dto/filter.dto';

@ApiTags('relacion-devoluciones')
@Controller('relacion-devoluciones')
export class RelacionDevolucionesController {

    constructor(private readonly relacionDevolucionesSerivce: RelacionDevolucionesService) { }

    @Post()
    post(@Body() relacionDevolucionesDto: RelacionDevolucionesDto) {
        return this.relacionDevolucionesSerivce.post(relacionDevolucionesDto);
    }

    @Get()
    get(@Query() filterDto: FilterDto) {
        return this.relacionDevolucionesSerivce.getAll(filterDto)
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string) {
        const relacionDevoluciones = await this.relacionDevolucionesSerivce.getById(id);
        return res.status(HttpStatus.OK).json({
            Data: relacionDevoluciones,
            Message: "Request successfull",
            Status: "200",
            Success: true
        });
    }

    @Put('/:id')
    put(@Param('id') id: string, @Body() relacionDevolucionesDto: RelacionDevolucionesDto) {
        return this.relacionDevolucionesSerivce.put(id, relacionDevolucionesDto)
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.relacionDevolucionesSerivce.delete(id)
    }
}
