class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }
  class Manager extends Employee {
    constructor(jobDescription, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.jobDescription = jobDescription;
    }
    ManagerInfo(){
        console.log(this.jobDescription+ " by the name of "+this.name+" who makes "+this.salary+" and gained employment "+this.hireDate);
    }
  }
  class Designer extends Manager {
    constructor(yearsExperience, jobDescription, name, salary, hireDate) {
        super(jobDescription, name, salary, hireDate);
        this.yearsExperience = yearsExperience;
    }
    DesignerInfo(){
        console.log(this.yearsExperience+" years of experience as a "+this.jobDescription+". By the name of "+this.name+" who makes"+this.salary+" annually. They started employment on "+this.hireDate);
    }
  }
  class SalesAssociate extends Designer {
    constructor(degreeCompleted, yearsExperience, jobDescription, name, salary, hireDate) {
        super(yearsExperience, jobDescription, name, salary, hireDate);
        this.degreeCompleted = degreeCompleted;
    }
    SalesAssociateInfo() {
        console.log(this.degreeCompleted+" from Portland State University with "+this.yearsExperience+" years of experience. "+this.jobDescription+" by the name of "+this.name+" bringing home "+this.salary+" annually. They began employment on "+this.hireDate);
    }
  }
  let manager = new Manager("Manager", "Delaney", 75000, "November 8th, 2020");
  let designer = new Designer(6, "Designer", "Keaton", 90000, "October 25th, 2016");
  let salesassociate = new SalesAssociate("Masters in Business", 33, "Sales Associate", "Kesley", 100000, "January 13th, 1990");
  Manager.ManagerInfo();
  Designer.DesignerInfo();
  SalesAssociate.SalesAssociateInfo();