import { Ingredient } from './Ingredient'
import { Step } from './Step'

export class Recipe {

    id: String
    title: String
    description?: String
    ingredients: Ingredient[]
    steps: Step[]

    constructor(){
        this.ingredients = [];
        this.steps = [];
    }
}