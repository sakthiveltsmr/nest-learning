import { Injectable } from '@nestjs/common';
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
        return this.coffee.find(item=>item.id===+id)
    }

    create(createdata:Coffee){
        this.coffee.push(createdata)
    }

    update(id:number,updatecoffe:any){
        const existingCoffee=this.findOne(id)
        if(existingCoffee){
         this.coffee.push(updatecoffe)
        }
    }

    remove(id:number){
        const coffeeindex=this.coffee.findIndex(item=>item.id===+id)
        if(coffeeindex>0){
            this.coffee.splice(coffeeindex,1);
        }
    }

}
  