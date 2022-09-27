
class Node{
    constructor(val){
        this.payload = val;
    }
}

class LinkedList{
    append(val){
        if(!this.head){
            const node = new Node(val);
            this.head = node;
        }
        else {
            let node = this.head;
            while(node.next){
                node = node.next;
            }
            node.next= new Node(val);
        }
    }
    insertAfter(findVal, insVal){
        let node = this.head;
        if(!this.head){
            return null;
        } else {
            while(node){
                if(node.payload === findVal){
                    const next = node.next;
                    node.next = new Node(insVal);
                    node.next.next = next;
                    return node.next;
                } else {
                    node = node.next
                }
            }
        }
        return null;
    }
    insertBefore(findVal, insVal){
        let node = this.head;
        if(!node) { return null; }
        else{
            if(node.payload === findVal){
                const newNode = new Node(insVal);
                newNode.next = node; // node == this.head
                this.head = newNode;
                return newNode;
            }
            while(node.next){
                if(node.next.payload === findVal){
                    const newNode = new Node(insVal);
                    newNode.next = node.next;
                    node.next = newNode;
                    return newNode;
                } else {
                    node = node.next;
                }
            }
        }
    }
}

module.exports = LinkedList;
