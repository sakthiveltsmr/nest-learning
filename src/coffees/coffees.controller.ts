import { Body, Controller,Delete,Get, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';


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
    create(@Body() createCoffeDto:CreateCoffeeDto){
        return this.coffeesservie.create(createCoffeDto)
    }
    @Patch(':id')
    update(@Param('id') id:number,@Body() updateCoffeeDto:UpdateCoffeeDto){
        return this.coffeesservie.update(id,updateCoffeeDto)
    }
    @Delete(':id')
    delete(@Param('id') id:number){
       return this.coffeesservie.remove(id)
    }
}
 