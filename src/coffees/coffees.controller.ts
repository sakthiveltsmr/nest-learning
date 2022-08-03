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
    async findone(@Param('id') id:string){
        const a= await this.coffeesservie.findOne(id)
        console.log(a)
    }
    @Post()
    create(@Body() createCoffeDto:CreateCoffeeDto){
        console.log(createCoffeDto instanceof CreateCoffeeDto)
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
 