class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def addNode(self, value):
        temp = Node(value)
        if self.head == None:
            self.head = temp
        else:
            runner = self.head
            while runner.next:
                runner = runner.next
            runner.next = temp
        return self

    def print(self):
        runner = self.head
        while runner:
            print(runner.value)
            runner = runner.next

        return self


sll = LinkedList()
sll.addNode(5).addNode(10).addNode(25).addNode(15).print()
