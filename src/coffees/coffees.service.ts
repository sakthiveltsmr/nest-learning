import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    constructor(
        @InjectRepository(Coffee)
        private readonly coffeeRepository:Repository<Coffee>
    ){}
    findAll(){
        return this.coffeeRepository.find()    
    }

    async findOne(id:any){
        const res= await this.coffeeRepository.findOne(id);
        if(!res){
            throw new HttpException(`Coffe #${id} not found`,HttpStatus.NOT_FOUND)
        }
        return res
    }

   async create(createdata:CreateCoffeeDto){
        const coffee= await this.coffeeRepository.create(createdata)
        return this.coffeeRepository.save(coffee)
       
    }

     async update(id:number,updatecoffe:UpdateCoffeeDto){
        const coffee= await this.coffeeRepository.preload({
            id:+id,
            ...updatecoffe
        })
        if(!coffee){
            throw new HttpException(`coffee #${id} is not found`,HttpStatus.NOT_FOUND)
        }
        return this.coffeeRepository.save(coffee)
        }
    

   async remove(id:any){
       const coffee=await this.findOne(id)
       return this.coffeeRepository.remove(coffee)
    }

}
   