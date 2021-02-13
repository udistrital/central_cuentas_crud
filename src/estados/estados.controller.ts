import { Query,Controller, Res, Post, Get, Put, Delete, Param, Body, HttpStatus, NotFoundException} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EstadosDto } from './dto/estados.dto'
import { EstadosService } from './estados.service';
import { FilterDto } from '../shared/dto/filter.dto';

@ApiTags('estados')
@Controller('estados')
export class EstadosController {
    constructor(private readonly estadosService: EstadosService) { }
    @Post()
    post(@Body() estadosDto: EstadosDto) {
        return this.estadosService.post(estadosDto);
    }
    @Get()
    get(@Query() filterDto: FilterDto) {
        return this.estadosService.getAll(filterDto)
    }
    @Put('/:id')
    put(@Param('id') id: string, @Body() estadosDto: EstadosDto) {
        return this.estadosService.put(id, estadosDto)
    }
    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.estadosService.delete(id)
    }
}
