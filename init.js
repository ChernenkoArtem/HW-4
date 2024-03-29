const  ArrayList = {
    collection : [],
    clearList : function () {
        this.length = 0;
        this.collection = [];
    },
    size: function () {
        if(arguments.length > 0) return false;
        return ArrayList.collection.length;
    },
    push : function (el) {
        if(arguments.length > 1 || arguments.length < 1) return false;
        let s = this.size();
        return this.collection[s] = el;
    },
    pop : function () {
        if(arguments.length > 0 || this.size() < 1) return false;
        tmpArr = [];
        let lastValue = this.collection[this.size() - 1];
        for (let i = 0; i < this.size()-1; i++){
            tmpArr[i] = this.collection[i];
        }
        this.collection = tmpArr;
        return lastValue;
    },
    unshift: function (el) {
        if(arguments.length > 1 || arguments.length < 1) return false;
        tmpArr = [];
        for (i = this.size()-1; 0 <=i; i--){
            tmpArr[i+1] = this.collection[i];
        }
        this.collection = tmpArr;
        tmpArr[0] = el;
    },
    shift: function () {
        if (arguments.length > 0 || this.size() < 1) return false;
        let tmpArr = [];
        for (let i = 1; i < this.size();i++){
            tmpArr[i-1] = this.collection[i];
        }
        this.collection = tmpArr;
    },
    toString : function () {
        tmpString = '';
        for (let i = 0; i< this.size();i++){
            if ( i == this.size()-1){
                tmpString += this.collection[i];
                break;
            }
            tmpString += this.collection[i] + ',';
        }
        return tmpString;
    },
    sort : function (compare) {
        if (compare){
            if (typeof compare == "function"){
                let temp;
                for (let i = 0; i < this.size();i++){
                    for (let j = 0; j < this.size();j++) {
                        if (compare(this.collection[j] , this.collection[i]) > 0) {
                            temp = this.collection[i];
                            this.collection[i] = this.collection[j];
                            this.collection[j] = temp;
                        }
                    }
                }
            }
            else {
                return false
            }
        }
       else{
            for (let i = 0; i < this.size();i++) {
                for (let j = 0; j < this.size(); j++) {
                    if (String(this.collection[j]) > String(this.collection[i])) {
                        let temp = this.collection[i];
                        this.collection[i] = this.collection[j];
                        this.collection[j] = temp;
                    }
                }
            }
        }
    },
    toLinkedList : function () {
        if (arguments.length > 0 || this.size() < 1) return false;
        let tmpLinked = {
                root : {
                    head : null,
                    tail : null,
                }
        };
        function createTmpNode(el) {
            return {
                el : el ? el : null,
                prev : null,
                next : null,
            };
        };
        for (let i=0; i < this.size();i++){
            let Node = createTmpNode(this.collection[i]);
            if(tmpLinked.root.head == null && tmpLinked.root.tail == null) {
                tmpLinked.root.tail = Node;
                tmpLinked.root.head = Node;
            }else{
                Node.prev = tmpLinked.root.tail ;
                tmpLinked.root.tail.next = Node;
                tmpLinked.root.tail = Node;
                Node.next = tmpLinked.root;
             }
        }
         return tmpLinked;

    },
};

const LinkedList = {
    root : {
        head : null,
        tail : null,
        length : 0,
    },
    clearList : function(){
        this.root = {
            head : null,
            tail : null,
            length : 0,
        }
    },
    createNode: function (el) {
        return {
            el: el ? el : null,
            prev: null,
            next: null,
        };
    },
    size : function () {
        if (arguments.length > 0 ) return false;
        return this.root.length;


    },
    push : function (el) {
        if ( arguments.length < 1 || arguments.length > 1 ) return false;
        let newNode = this.createNode(el);
        if(this.root.head == null && this.root.tail == null) {
            this.root.head = newNode;
            this.root.tail = newNode;
        }else{
            newNode.prev = this.root.tail;
            this.root.tail.next = newNode;

            this.root.tail = newNode;

            newNode.next = this.root;
        }
        this.root.length++;
    },
    pop : function () {
       if( arguments.length > 0 || this.size() < 1) return false;
       this.root.tail.prev.next = this.root;
       this.root.tail = this.root.tail.prev;
       this.root.length--;
    },
    unshift : function (el) {
        if (arguments.length < 1 || arguments.length > 1 ) return false;
        let newNode = this.createNode(el);
        if(this.root.head == null && this.root.tail == null) {
            this.root.tail = newNode;
            this.root.head = newNode;
        }else{
           newNode.prev = this.root;
           this.root.head.prev = newNode;
           newNode.next = this.root.head;
           this.root.head = newNode;
        }
        this.root.length++;
    },
    shift : function () {
        if( arguments.length > 0 || this.size() < 1) return false;
        this.root.head.next.prev = this.root;
        this.root.head = this.root.head.next;
        this.root.length--;
    },
    toString : function () {
        if(arguments.length > 0) return false;
        let tmpString = '';
        let tmpNode = this.root.head;
        while(tmpNode.next !== this.root){
            tmpString += tmpNode.el + ',';
            tmpNode = tmpNode.next;
        }
        tmpString += tmpNode.el + ',';
        tmpString = tmpString.substring(0, tmpString.length - 1);

        return tmpString
    },
    toAlist : function () {
        if( arguments.length > 0 || this.size() < 1) return false;
        let tmpArr = [];
        let tmpNode = this.root.head;
        let i = 0;
        while (tmpNode.next !== this.root){
            tmpArr[i]= tmpNode.el;
            i++;
            tmpNode = tmpNode.next;
        }
        tmpArr[i]= tmpNode.el;
        return tmpArr;
    },
    sort : function (compare) {
        if (compare){
            if (typeof compare == "function"){
                let temp;
                for (let i = 0; i < this.root.length;i++){
                    let Node = this.root.head;
                    for (let j = 0; j < this.root.length;j++) {
                        if (compare( Node.el , Node.next.el) > 0) {
                            temp = Node.el ;
                            Node.el  = Node.next.el;
                            Node.next.el = temp;
                        }
                        Node = Node.next;
                    }
                }
            }
            else {
                return false
            }
        }
        else{
            for (let i = 0; i < this.root.length;i++) {
                let Node = this.root.head;
                for (let j = 0; j < this.root.length; j++) {
                    if (String(Node.el) > String(Node.next.el)) {
                        let temp = Node.el;
                        Node.el = Node.next.el;
                        Node.next.el = temp;
                    }
                    Node = Node.next;
                }
            }
        }
    },
};
