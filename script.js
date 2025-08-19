console.log("Hashmaps");

// hashing algorithm
class Hashing {
    constructor (loadFactor = 0.8, capacity = 16){
        this.loadFactor = loadFactor;
        this.capacity = capacity;
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
        if(!this.has(key)){
            this.hashedKeys.push(hashedKey);
        }

        // add the hashed key and value to the items object
         return this.items[hashedKey] = value;
    }

    // get key method returns the value of the key
    get (key){
        if(!key){
            return null;
        }
        hash = this.hash(key);

        if(!hash in this.items) return null;

        return this.items[hash];
    }

    // has method checks if the key exist 
    has (key){
        return key in this.items;
    }

    // remove method to remove entry
    remove (key){

        let hashed = this.hash(key);
        if(this.has(hashed)){
            // delete entry from object
            delete this.items[hashed];

            this.hashedKeys = this.hashedKeys.filter(hash => hash !== hashed);

            return true;
        }
        return false;
    }

    // length method to return the number of stored keys
    length (){
        return this.hashedKeys.length;
    }

    // clear method removes all entries in the hash map
    clear (){
        this.items = {};
        this.hashedKeys = [];
        console.log("cleared");
    }

    // keys method returns and array containing all the keys in the hash map
    keys (){
        return this.hashedKeys;
    }

    // values method returns an array containing all the values
    values (){
        return this.hashedKeys.map(hash => this.items[hash]);
    }

    // entries method returns an array that contains each key and value pair
    entries (){
        return this.hashedKeys.map(hash => [hash, this.items[hash]]);
    }

}