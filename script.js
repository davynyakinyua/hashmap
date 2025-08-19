console.log("Hashmaps");

// hashing algorithm
class Hashing {
    constructor (){
        this.loadFactor = 0.8;
        this.capacity = 16;
        this.items = {};
        this.hashedKeys = [];
    }

    // hashing function
    hash (key){
        let hashCode = 0;

        const primeNumber = 31;

        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }

        return hashCode;        
    }

    // altering values of keys
    set (key, value){
        // check for collision
        
        // hash the key
        let hashedKey = this.hash(key);

        // push the hash to hashKeys array
        this.hashedKeys.push(hashedKey);

        // add the hashed key and value to the items object
         return this.items[hashedKey] = value;
    }

}