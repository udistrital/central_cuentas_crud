import { Query,Controller, Res, Post, Get, Put, Delete, Param, Body, HttpStatus, NotFoundException} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrdenDevolucionDto } from './dto/orden-devolucion.dto';
import { OrdenDevolucionService } from './orden-devolucion.service';
import { FilterDto } from '../shared/dto/filter.dto';

@ApiTags('orden-devolucion')
@Controller('orden-devolucion')
export class OrdenDevolucionController {

    constructor(private readonly ordenDevolucionService: OrdenDevolucionService) { }

    @Post()
    post(@Body() ordenDevolucionDto: OrdenDevolucionDto) {
        return this.ordenDevolucionService.post(ordenDevolucionDto);
    }

    @Get()
    get(@Query() filterDto: FilterDto) {
        return this.ordenDevolucionService.getAll(filterDto)
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string) {
        const ordenDevolucion = await this.ordenDevolucionService.getById(id);
        if (!ordenDevolucion) throw new NotFoundException("not found resource");
        return res.status(HttpStatus.OK).json({
            Data: ordenDevolucion,
            Message: "Request successfull",
            Status: "200",
            Success: true
        });
    }

    @Put('/:id')
    put(@Param('id') id: string, @Body() ordenDevolucionDto: OrdenDevolucionDto) {
        return this.ordenDevolucionService.put(id, ordenDevolucionDto)
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.ordenDevolucionService.delete(id)
    }

}
