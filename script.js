// Inizio esercizio 1
class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    whoIsOlder(userToCompare){
        if(this.age > userToCompare.age){
            return 'User ' + this.firstName + ' é più il vecchio'
        }else{
            return 'User ' + userToCompare.firstName + ' é più il vecchio'

        }
    }
}
const user1 = new User('Luca', 'Rossi', 25, 'Rome')
const user2 = new User('Mario', 'Bianchi', 33, 'Milan')
const user3 = new User('Luigi', 'Verdi', 43, 'Naples')
console.log(user1.whoIsOlder(user3))
// Fine esercizio 1

// Inizio esercizio 2
class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }

}
const animalArray = []
const petForm = document.getElementById('new-pet-form')
const animalList = document.getElementById('animal-list')
const formPetName = document.getElementById('petName')
const formOwnerName = document.getElementById('ownerName')
const formSpecies = document.getElementById('species')
const formBreed = document.getElementById('breed')
const newListItem  = function (){
    animalArray.forEach(animal=>{
        const newLi = document.createElement('li')
        newLi.innerText = `${animal.petName} ${animal.ownerName} ${animal.species} ${animal.breed}`
        animalList.appendChild(newLi)
    })

}


petForm.addEventListener('submit', function (e){
    e.preventDefault()
    const newPet = new Pet(formPetName.value, formOwnerName.value, formSpecies.value, formBreed.value)
    animalArray.push(newPet)
    animalList.innerHTML = ''
    newListItem()
})