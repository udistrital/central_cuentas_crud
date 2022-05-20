import { Query,Controller, Res, Post, Get, Put, Delete, Param, Body, HttpStatus, NotFoundException} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DevolucionTributariaDto } from './dto/devolucion-tributaria.dto'
import { DevolucionTributariaService } from './devolucion-tributaria.service';
import { FilterDto } from '../shared/dto/filter.dto';

@ApiTags('devolucion-tributaria')
@Controller('devolucion-tributaria')
export class DevolucionTributariaController {

    constructor(private readonly devolucionTributariaService: DevolucionTributariaService) { }
    @Post()
    post(@Body() devolucionTributariaDto: DevolucionTributariaDto) {
        return this.devolucionTributariaService.post(devolucionTributariaDto);
    }
    @Get()
    get(@Query() filterDto: FilterDto) {
        return this.devolucionTributariaService.getAll(filterDto)
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string) {
        const devolucionTributaria = await this.devolucionTributariaService.getById(id);
        if (!devolucionTributaria) throw new NotFoundException("not found resource");
        return res.status(HttpStatus.OK).json({
            Data: devolucionTributaria,
            Message: "Request successfull",
            Status: "200",
            Success: true
        });
    }
    @Put('/:id')
    put(@Param('id') id: string, @Body() devolucionTributariaDto: DevolucionTributariaDto) {
        return this.devolucionTributariaService.put(id, devolucionTributariaDto)
    }
    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.devolucionTributariaService.delete(id)
    }

}
