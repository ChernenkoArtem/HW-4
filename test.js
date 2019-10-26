describe('Array list', function () {
    beforeEach(function () {
        ArrayList.clearList();
    });

    describe('Push method', function () {

        it('We write a new method push to our arrayList, this method accept value and creates a new kay-value ' +
            'like at a classic array', function () {
            const exp = 1;
            ArrayList.push(1);
            const act = ArrayList.collection[0];

            assert.equal(exp, act);
        });

        it('Push more', function () {
            const exp = 2;
            ArrayList.push(1);
            ArrayList.push(2);
            const act = ArrayList.collection[1];

            assert.equal(exp, act);
        });

        it('Push more', function () {
            const exp = 3;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            const act = ArrayList.collection[2];

            assert.equal(exp, act);
        });

        it('Push more', function () {
            const exp = 4;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            ArrayList.push(4);
            const act = ArrayList.collection[3];

            assert.equal(exp, act);
        });

        it('Try cause method push with 2 or more arg', function () {
            const exp = false;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            ArrayList.push(4);
            const act = ArrayList.push(4, 2);


            assert.equal(exp, act);
        });

        it('Try cause method push without  arg', function () {
            const exp = false;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            ArrayList.push(4);
            const act = ArrayList.push();


            assert.equal(exp, act);
        });

        it('We go to use method push 3 more times', function () {
            const exp = 7;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            ArrayList.push(4);
            ArrayList.push(5);
            ArrayList.push(6);
            ArrayList.push(7);
            const act = ArrayList.collection[6];

            assert.equal(exp, act)
        });

        it('We go to use method push more times, and we push + 2 const with null ', function () {
            const a = null;
            const b = null;
            const c = 7;
            const exp = 7;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            ArrayList.push(4);
            ArrayList.push(a);
            ArrayList.push(b);
            ArrayList.push(c);
            const act = ArrayList.collection[6];

            assert.equal(exp, act)
        })
    });

    describe('Length method', function () {

        it('We create new method lenght to get a new last index and zise of array Have' +
            ' already 0,1 and 2 index of array index on our arrayList, ' +
            'go to method getIndex and exp return 3', function () {
            const exp = 3;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            const act = ArrayList.size();

            assert.equal(exp, act)
        });

        it('Try cause method length with arg', function () {
            const exp = false;
            const arg = 1;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            const act = ArrayList.size(arg);

            assert.equal(exp, act)
        })
    });

    describe('Pop method', function () {

        it('Create method pop to delete a last kay-value in our arrayList', function () {
            const exp = 6;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            ArrayList.push(4);
            ArrayList.push(5);
            ArrayList.push(6);
            ArrayList.push(7);
            ArrayList.pop();
            const act = ArrayList.size();

            assert.equal(exp, act)
        });

        it('Pop more', function () {
            const exp = 5;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            ArrayList.push(4);
            ArrayList.push(5);
            ArrayList.push(6);
            ArrayList.push(7);
            ArrayList.pop();
            ArrayList.pop();
            const act = ArrayList.size();

            assert.equal(exp, act)
        });

        it('Pop more', function () {
            const exp = 4;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            ArrayList.push(4);
            ArrayList.push(5);
            ArrayList.push(6);
            ArrayList.push(7);
            ArrayList.pop();
            ArrayList.pop();
            ArrayList.pop();
            const act = ArrayList.size();

            assert.equal(exp, act)
        });

        it('Try cause method pop with arg', function () {
            const exp = false;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            ArrayList.push(4);
            const act = ArrayList.pop(1);

            assert.equal(exp, act);
        });

        it('Try cause method pop to ArrayList whithout kay=value', function () {
            const exp = false;
            const act = ArrayList.pop();

            assert.equal(exp, act)
        })
    });

    describe('unshift method', function () {

        it('create method unshift to add a new elem to start of our ArrayList', function () {
            const exp = 1;
            ArrayList.unshift(1);
            const act = ArrayList.collection[0];

            assert.equal(exp, act);
        });

        it('unshift more', function () {
            const exp = 2;
            ArrayList.unshift(1);
            ArrayList.unshift(2);
            const act = ArrayList.collection[0];

            assert.equal(exp, act);
        });

        it('unshift more', function () {
            const exp = 4;
            ArrayList.unshift(1);
            ArrayList.unshift(2);
            ArrayList.unshift(3);
            ArrayList.unshift(4);
            const act = ArrayList.collection[0];

            assert.equal(exp, act);
        });

        it('use method unshift more times to add a new null elem to start of our ArrayList', function () {
            const exp = null;
            ArrayList.unshift(1);
            ArrayList.unshift(2);
            ArrayList.unshift(3);
            ArrayList.unshift(null);
            const act = ArrayList.collection[0];

            assert.equal(exp, act);
        });

        it('Try cause method unshift with 2 or more arg', function () {
            const exp = false;
            ArrayList.unshift(1);
            ArrayList.unshift(2);
            ArrayList.unshift(3);
            ArrayList.unshift(4);
            const act = ArrayList.unshift(4, 2);

            assert.equal(exp, act);
        });

        it('Try cause method unshift without arg', function () {
            const exp = false;
            ArrayList.unshift(1);
            ArrayList.unshift(2);
            ArrayList.unshift(3);
            ArrayList.unshift(4);
            const act = ArrayList.unshift();

            assert.equal(exp, act);
        })
    });

    describe('shift method', function () {

        it('create method shift to delete a first elem of our ArrayList', function () {
            const exp = 3;
            ArrayList.unshift(1);
            ArrayList.unshift(2);
            ArrayList.unshift(3);
            ArrayList.unshift(4);
            ArrayList.shift();
            const act = ArrayList.collection[0];

            assert.equal(exp, act);
        });

        it('shift more', function () {
            const exp = 3;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            ArrayList.push(4);
            ArrayList.shift();
            ArrayList.shift();
            const act = ArrayList.collection[0];

            assert.equal(exp, act);
        });

        it('Try cause method shift with arg', function () {
            const exp = false;
            const arg = 1;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            ArrayList.push(4);
            const act = ArrayList.shift(arg);

            assert.equal(exp, act);
        });

        it('Try cause method shift to ArrayList whithout kay=value', function () {
            const exp = false;
            const act = ArrayList.shift();

            assert.equal(exp, act)
        })
    });

    describe('toString method', function () {

        it('create method toString to return the value of the keys of the object as a string', function () {
            const exp = '1,2,3,4,5';
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            ArrayList.push(4);
            ArrayList.push(5);
            const act = ArrayList.toString();

            assert.equal(exp, act);
        });

        it('Try cause method toString with arg', function () {
            const exp = false;
            const arg = 1;

            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            ArrayList.push(4);
            ArrayList.toString();
            const act = ArrayList.shift(arg);

            assert.equal(exp, act);
        })
    });

    describe('create method toLinkedList to create new the same object linkedLost inside ' +
        'our ArrayList ', function () {
        it('try cause mrthod toLinkedList with arg', function () {
            const exp = false;
            const arg = 1;
            ArrayList.push(1);
            ArrayList.push(2);
            ArrayList.push(3);
            const act = ArrayList.toLinkedList(arg);

            assert.equal(exp, act)
        });

        it('Try cause method toLinkedList to ArrayList whithout kay=value', function () {
            const exp = false;
            const act = ArrayList.toLinkedList();

            assert.equal(exp, act)
        });

    });

    describe('Sort method', function () {
        it("Sort method don't take arg", function () {
            const exp = 12;
            ArrayList.push(3);
            ArrayList.push(2);
            ArrayList.push(12);
            ArrayList.sort();
            const act = ArrayList.collection[0];

            assert.equal(exp, act)
        });

        it("Sort method don't take arg", function () {
            const exp = 2;
            ArrayList.push(3);
            ArrayList.push(2);
            ArrayList.push(12);
            ArrayList.sort();
            const act = ArrayList.collection[1];

            assert.equal(exp, act)
        });

        it("Sort method don't take arg", function () {
            const exp = 3;
            ArrayList.push(3);
            ArrayList.push(2);
            ArrayList.push(12);
            ArrayList.sort();
            const act = ArrayList.collection[2];

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 1;
            ArrayList.push(3);
            ArrayList.push(2);
            ArrayList.push(12);
            ArrayList.push(1);
            ArrayList.sort(function commit(a, b){return a-b});
            const act = ArrayList.collection[0];

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 3;
            ArrayList.push(3);
            ArrayList.push(2);
            ArrayList.push(12);
            ArrayList.push(1);
            ArrayList.sort(function commit(a, b){return a-b});
            const act = ArrayList.collection[2];

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 12;
            ArrayList.push(3);
            ArrayList.push(2);
            ArrayList.push(12);
            ArrayList.push(1);
            ArrayList.sort(function commit(a, b){return a-b});
            const act = ArrayList.collection[3];

            assert.equal(exp, act)
        });

        it('Sort method take arg not a function',function () {
            const exp = false;
            const arg = 1;
            const act = ArrayList.sort(arg);

            assert.equal(exp, act)
        })
    })
});

describe('LinkedList', function () {
    beforeEach(function () {
        LinkedList.clearList();
    });

    describe('Push method', function () {

        it('Create a linkedList push method to create new Noda in the end of our LinkedListand put there value,' +
            ' and way to next and prev noda ', function () {
            const exp = 2;
            LinkedList.push(1);
            LinkedList.push(2);
            LinkedList.push(3);
           const act = LinkedList.root.head.next.el;

            assert.equal(exp, act)

});
      it('do push same times but another exp', function () {
             const exp = 3;
            LinkedList.push(1);
            LinkedList.push(2);
            LinkedList.push(3);
            const act =  LinkedList.root.head.next.next.el;

            assert.equal(exp, act)
        });

        it('Try use method push() without arg', function () {
            const exp = false;
            const act = LinkedList.push();

            assert.equal(exp, act)
        });

        it('Try use method push() with to or more arg', function () {
            const exp = false;
            const a = 1;
            const b = 2;
            const act = LinkedList.push(a, b);

            assert.equal(exp, act)
        })
    });

    describe('size method', function () {

        it('Create size method to see which size in our LinkedList',function () {
            const exp = 3;
            LinkedList.push(1);
            LinkedList.push(2);
            LinkedList.push(3);
            const act = LinkedList.size();
            console.log(LinkedList.size());
            assert.equal(exp, act)
        });

        it('use method size wihout Noda in our list', function () {
            const exp = 0;
            const act = LinkedList.size();

            assert.equal(exp, act)
        });

        it('try use size method with arg',function () {
            const exp = false;
            const a = 1;
            LinkedList.push(1);
            LinkedList.push(1);
            const act = LinkedList.size(a);

            assert.equal(exp, act)
        })
    });

    describe('Unshift method', function () {

        it('Create a LinkedList unshift method to create new Noda in the end of our LinkedListand put there value,' +
            ' and way to next and prev noda ', function () {
            const exp = 3;
            LinkedList.unshift(1);
            LinkedList.unshift(2);
            LinkedList.unshift(3);
            const act = LinkedList.root.head.el;

            assert.equal(exp, act)
        });

        it('do unshift same times but another exp', function () {
            const exp = 5;
            LinkedList.unshift(1);
            LinkedList.unshift(2);
            LinkedList.unshift(3);
            LinkedList.unshift(4);
            LinkedList.unshift(5);
            LinkedList.unshift(6);
            const act = LinkedList.root.head.next.el;

            assert.equal(exp, act)
        });

        it('Try use method unshift() without arg', function () {
            const exp = false;
            const act = LinkedList.unshift();

            assert.equal(exp, act)
        });

        it('Try use method unshift() with to or more arg', function () {
            const exp = false;
            const a = 1;
            const b = 2;
            const act = LinkedList.unshift(a, b);

            assert.equal(exp, act)
        })
    });

    describe('Pop method', function () {

        it('Create method pop to delete a last Noda in our LinkedList', function () {
            const exp = 2;
            LinkedList.push(1);
            LinkedList.push(2);
            LinkedList.push(3);
            LinkedList.pop();
            const act = LinkedList.size();

            assert.equal(exp, act)
        });

        it('do pop some more times but another exp', function () {
            const exp = 3;
            LinkedList.push(1);
            LinkedList.push(2);
            LinkedList.push(3);
            LinkedList.push(4);
            LinkedList.push(5);
            LinkedList.push(6);
            LinkedList.pop();
            LinkedList.pop();
            LinkedList.pop();
            const act = LinkedList.size();

            assert.equal(exp, act)
        });

        it('Try use method pop() with arg', function () {
            const exp = false;
            const a = 1;
            const act = LinkedList.pop(a);

            assert.equal(exp, act)
        });

        it('Try cause method pop() to LinkedList whithout Nods', function () {
            const exp = false;
            const act = LinkedList.pop();

            assert.equal(exp, act)
        })
    });

    describe('Shift method', function () {

        it('Create method shift to delete a first Nods in our LinkedList', function () {
            const exp = 2;
            LinkedList.push(1);
            LinkedList.push(2);
            LinkedList.push(3);
            LinkedList.shift();
            const act = LinkedList.size();

            assert.equal(exp, act)
        });

        it('do shift some more times but another exp', function () {
            const exp = 3;
            LinkedList.push(1);
            LinkedList.push(2);
            LinkedList.push(3);
            LinkedList.push(4);
            LinkedList.push(5);
            LinkedList.push(6);
            LinkedList.shift();
            LinkedList.shift();
            LinkedList.shift();
            const act = LinkedList.size();

            assert.equal(exp, act)
        });

        it('Try use method shift() with arg', function () {
            const exp = false;
            const a = 1;
            const act = LinkedList.shift(a);

            assert.equal(exp, act)
        });

        it('Try cause method shift() to LinkedList whithout Nods', function () {
            const exp = false;
            const act = LinkedList.shift();

            assert.equal(exp, act)
        })
    });

    describe('create method toArrayList to create new the same object ArrayList inside ' +
        'our LinkedList ', function () {
        it('try cause method ArrayList with arg', function () {
            const exp = false;
            const arg = 1;
            LinkedList.push(1);
            LinkedList.push(2);
            LinkedList.push(3);
            const act = LinkedList.toAlist(arg);

            assert.equal(exp, act)
        });

        it('Try cause method toArrayList to ArrayList whithout Nods', function () {
            const exp = false;
            const act = LinkedList.toAlist();

            assert.equal(exp, act)
        });

    });

    describe('Sort method', function () {
        it("Sort method don't take arg", function () {
            const exp = 12;
            LinkedList.push(3);
            LinkedList.push(2);
            LinkedList.push(12);
            LinkedList.sort();
            const act = LinkedList.root.head.el;

            assert.equal(exp, act)
        });

        it("Sort method don't take arg", function () {
            const exp = 2;
            LinkedList.push(3);
            LinkedList.push(2);
            LinkedList.push(12);
            LinkedList.sort();
            const act = LinkedList.root.head.next.el;

            assert.equal(exp, act)
        });

        it("Sort method don't take arg", function () {
            const exp = 3;
            LinkedList.push(3);
            LinkedList.push(2);
            LinkedList.push(12);
            LinkedList.sort();
            const act = LinkedList.root.head.next.next.el;

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 1;
            LinkedList.push(3);
            LinkedList.push(2);
            LinkedList.push(12);
            LinkedList.push(1);
            LinkedList.sort(function commit(a, b){return a-b});
            const act = LinkedList.root.head.el;

            assert.equal(exp, act)
        });

        it('Sort method take arg function commit(a, b){return a-b}',function () {
            const exp = 3;
            LinkedList.push(3);
            LinkedList.push(2);
            LinkedList.push(12);
            LinkedList.push(1);
            LinkedList.sort(function commit(a, b){return a-b});
            const act = LinkedList.root.head.next.next.el;

            assert.equal(exp, act)
        });

        it('Sort method take arg not a function',function () {
            const exp = false;
            const arg = 1;
            const act = LinkedList.sort(arg);

            assert.equal(exp, act)
        })
    })
});