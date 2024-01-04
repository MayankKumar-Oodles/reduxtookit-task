import Chance from "chance";

const chance =Chance();

export const fakeUserData=()=>{
     //return

     return chance.name({ middle: true });
}