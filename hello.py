class Student:
    
    def __init__(self,id, name) -> None:
        self.id = id
        self.name = name
        self.next = None

    def display(self):
        print(f'id: {self.id} , name: {self.name}')

student1 = Student(1, "yash")

student2 = Student(2, "ash")
student3 = Student(3, "ankur")
student4 = Student(4, "nikhil")


l = [1,2,3,4]
for i in range(len(l)):
    print(l[i])


# student1.display()

student1.next= student2
student2.next = student3
student3.next = student4



head = student1
while(head.next!=None):
    print(head.display())
    head =head.next
        
