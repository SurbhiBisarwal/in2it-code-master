import { Injectable, signal, Signal } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
  course: string;
  email: string;
}


export type NewStudent = Omit<Student, 'id'>;
export type NewEmployee = Omit<Employee, 'id'>;

export interface Employee {
  id: number;
  name: string;
  age: number;
  department: string;
  position: string;
  salary: number;
  email: string;
}




@Injectable({
  providedIn: 'root',
})
export class homeSer {
  searchText = signal('');

  students = signal<Student[]>([
    {
      id: 1,
      name: "Aarav Sharma",
      age: 20,
      grade: "A",
      course: "Computer Science",
      email: "aarav.sharma@example.com",
    },
    {
      id: 2,
      name: "Priya Patel",
      age: 21,
      grade: "B+",
      course: "Information Technology",
      email: "priya.patel@example.com",
    },
    {
      id: 3,
      name: "Rahul Verma",
      age: 19,
      grade: "A-",
      course: "Electronics",
      email: "rahul.verma@example.com",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      age: 22,
      grade: "B",
      course: "Mechanical Engineering",
      email: "sneha.reddy@example.com",
    },
  ]);

  employees = signal<Employee[]>([
    {
      id: 101,
      name: "Rohan Mehta",
      age: 30,
      department: "Engineering",
      position: "Software Developer",
      salary: 75000,
      email: "rohan.mehta@example.com",
    },
    {
      id: 102,
      name: "Ananya Singh",
      age: 28,
      department: "Human Resources",
      position: "HR Manager",
      salary: 68000,
      email: "ananya.singh@example.com",
    },
    {
      id: 103,
      name: "Vikram Joshi",
      age: 35,
      department: "Finance",
      position: "Accountant",
      salary: 72000,
      email: "vikram.joshi@example.com",
    },
    {
      id: 104,
      name: "Neha Kapoor",
      age: 26,
      department: "Marketing",
      position: "Marketing Executive",
      salary: 60000,
      email: "neha.kapoor@example.com",
    },
  ]);

  setSearch(value: string) {
    this.searchText.set(value);
  }

  private getNextId<T extends { id: number }>(
    listSignal: Signal<T[]>,
    start = 1
  ): number {
    const list = listSignal();
    if (list.length === 0) {
      return start;
    }
    return Math.max(...list.map((item) => item.id)) + 1;
  }

  /* student helpers */
  addStudent(student: NewStudent) {
    const studentWithId: Student = {
      ...student,
      id: this.getNextId(this.students, 1),
    };
    this.students.update((list) => [...list, studentWithId]);
  }

  deleteStudents(ids: number[]) {
    this.students.update((list) => list.filter((s) => !ids.includes(s.id)));
  }
  deleteStudent(id: number) {
    this.students.update((list) => list.filter((s) => s.id !== id));
  }

  updateStudent(id: number, changes: Partial<NewStudent>) {
    this.students.update((list) =>
      list.map((s) => (s.id === id ? { ...s, ...changes } : s))
    );
  }

  /* employee helpers */
  addEmployee(employee: NewEmployee) : Employee {
    const employeeWithId: Employee = {
      ...employee,
      id: this.getNextId(this.employees, 101),
    };
    this.employees.update((list) => [...list, employeeWithId]);
    return employeeWithId;
  }

  deleteEmployees(ids: number[]) {
    this.employees.update((list) => list.filter((e) => !ids.includes(e.id)));
  }
  deleteEmployee(id: number) {
    this.employees.update((list) => list.filter((e) => e.id !== id));
  }

  updateEmployee(id: number, changes: Partial<NewEmployee>) {
    this.employees.update((list) =>
      list.map((e) => (e.id === id ? { ...e, ...changes } : e))
    );
  }
}
