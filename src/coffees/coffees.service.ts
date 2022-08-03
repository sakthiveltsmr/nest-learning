import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffee:Coffee[]=[{
        id:1,
        name:"sakthi",
        flavors:['chocolate','venilla']
    }]
    findAll(){
        return this.coffee    
    }

    findOne(id:number){
        const res=this.coffee.find(item=>item.id===+id)
        if(!res){
            throw new HttpException(`Coffe #${id} not found`,HttpStatus.NOT_FOUND)
        }
        return res
    }

    create(createdata){
        this.coffee.push(createdata)
        
        return "data added successfully"
       
    }

    update(id:number,updatecoffe:any){
        const existingCoffee=this.findOne(id)
        if(existingCoffee){
        return this.coffee.push(updatecoffe)
        }
    }

    remove(id:number){
        const coffeeindex=this.coffee.findIndex(item=>item.id===+id)
        if(coffeeindex>0){
            this.coffee.splice(coffeeindex,1);
        }
    }

}
  