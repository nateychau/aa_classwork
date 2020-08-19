class Employee

    attr_reader :salary

    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end

    def bonus(multiplier)
        return @salary * multiplier 
    end
end

class Manager < Employee

    attr_reader :subordinates

    def initialize(name, title, salary, boss)
        super
        @subordinates = []
    end

    def add_subordinate(employee)
        self.subordinates << employee
    end

    def bonus(multiplier)

        # sum of all subordinate salaries
        # + bonus if manager
        subordinates_calculation = self.subordinates.map do |subordinate| 
            if subordinate.is_a?(Manager)
                subordinate.bonus(multiplier) + subordinate.salary*multiplier 
            else
                subordinate.bonus(multiplier)
            end
        end
        subordinates_calculation.sum        
    end
end

ned = Manager.new('Ned', 'Founder', 1000000, nil)
darren = Manager.new('Darren', 'TA Manager', 78000, 'Ned')
shawna = Employee.new('Shawna', 'TA', 12000, 'Darren')
david = Employee.new('David', 'TA', 10000, 'Darren')
ned.add_subordinate(darren)
darren.add_subordinate(shawna)
darren.add_subordinate(david)


p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000
# X = CEO......multiplier
# Y works for X
# it would hte same as if Y had X's multiplier...

# Boss : small e employees who are not managers
# sum of bonus(boss_multiplier) for all employees



# BOSS REMUNERATION = own salary * multiplier + bonus(every subordinate, boss's multiplier)
                                # 
