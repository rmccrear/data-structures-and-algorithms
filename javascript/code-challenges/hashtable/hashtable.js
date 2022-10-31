class Bucket {
  constructor(){
    this.list = [];
  }

  replace([key, value]){
    for(let i=0; i<this.list.length; i++) {
      const [k, v] = this.list[i];
      if(k===key) {
        this.list[i] = [key, value];
        return this.list[i];
      }
    }
    return null;
  }

  add([key, value]) {
    const result = this.replace([key, value]);
    if(!result) {
      this.list.push([key, value]);
    }
  }

  find(key) {
    for(let i=0; i<this.list.length; i++) {
      const [k, v] = this.list[i];
      if(k===key) {
        return this.list[i];
      }
    }
    return null;
  }
}

class Hashtable {
  constructor(len){
    this.arr = [];
    this.len = len || 10;
  }

  hash(key) {
    return key.charCodeAt(0) % this.len ;
  }

  set(key, value) {
    const hashKey = this.hash(key);
    let bucket;
    if(this.arr[hashKey]){
      bucket = this.arr[hashKey];
    } else {
      bucket = new Bucket();
      this.arr[hashKey] = bucket;
    }
    bucket.add([key, value]);
  }

  get(key) {
    const hashKey = this.hash(key);
    const bucket = this.arr[hashKey];
    if(bucket) {
      const [_key, value] = bucket.find(key);
      return value;
    } else {
      return null;
    }
  }
}

module.exports = {Hashtable};
