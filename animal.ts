export  abstract  class Animal{
    name:string =''
    type:string =''
    constructor(animalName:string, animalType:string){
        this.name = animalName
        this.type = animalType
        let animalImg=document.createElement('img')
        animalImg.setAttribute('src',`assets/${this.type}.png`)
        animalImg.onclick = this.displayName();
        animalImg.setAttribute('width','200')
        document.body.append(animalImg)
    }

    makesound(){
        console.log("new sound");
    }

    displayName():()=> void{
        return ()=> {
            alert(`Hi my name is ${this.name}`)
        }
    }
}
