import { Body, Controller,Delete,Get, Param, Patch, Post, Query, Res } from '@nestjs/common';


@Controller('coffees')
export class CoffeesController {

    @Get()
    findAll(@Res() response,@Query() paginationQuery){
        const{limit,offset}=paginationQuery
        response.status(200).send(`get method access successfull limit of ${limit} and ${offset}`)
    }
    @Get(':id')
    findone(@Param('id') id:number){
        return `This action returns ${id} in signle value`
    }
    @Post()
    create(@Body() body){
        return body
    }
    @Patch(':id')
    update(@Param('id') id:number,@Body() body){
        return `patch updated ${id} is success`
    }
    @Delete(':id')
    delete(@Param('id') id:number,@Res() response){
        response.status(200).send(`data will be deleted on ${id}`)
    }
}
 