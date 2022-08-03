import { Body, Controller,Delete,Get, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';


@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesservie:CoffeesService){}

    @Get()
    findAll(){
        return this.coffeesservie.findAll()
    }
    @Get(':id')
    findone(@Param('id') id:number){
        return this.coffeesservie.findOne(id)
    }
    @Post()
    create(@Body() body){
        return this.coffeesservie.create(body)
    }
    @Patch(':id')
    update(@Param('id') id:number,@Body() body){
        return this.coffeesservie.update(id,body)
    }
    @Delete(':id')
    delete(@Param('id') id:number){
       return this.coffeesservie.remove(id)
    }
}
 