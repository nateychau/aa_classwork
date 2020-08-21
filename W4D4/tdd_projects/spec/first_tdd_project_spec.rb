require "first_tdd_project.rb"
require "rspec"

#Remove dups
describe "Array#my_uniq" do 
    it "takes in an array and returns a new one with uniq elements." do
        arr = [1,1,1,2,2,3]
        expect(arr.my_uniq).to eq([1,2,3])
    end
end


#Two Sum
describe "Array#two_sum" do
    it "takes in an array, and returns all pairs where the elements at those positions sum to zero" do
        arr_1 = [-1, 0, 2, -2, 1]
        expect(arr_1.two_sum).to eq([[0,4], [2,3]])
    end
end




#My Transpose
describe "Array#my_transpose" do 
    it "takes in a grid, and does a transpose on the grid" do
        grid = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
        expect(grid.my_transpose).to eq([[0, 3, 6],[1, 4, 7],[2, 5, 8]])
    end
end

#Stock Picker

# a = [1,2,3,3,4,100]
# buy at 1, idx = 0
# sell at 100, idx = 5
#[0,5]

describe "Array#stock_picker" do
    it "takes in an array of stock prices and returns a pair of indices with max profit." do
        stocks = [3,1,7,9,4]
        expect(stocks.stock_picker).to eq([1,3])
    end
end

describe Towers do 
    subject(:hanoi) {Towers.new}

    describe "#initialize" do
        it "initializes three stacks and three items" do
             expect(hanoi.stacks.length).to eq(3)
             expect(hanoi.stacks[0].length).to eq(3)
             expect(hanoi.stacks[1].length).to eq(0)
             expect(hanoi.stacks[2].length).to eq(0)
        end

        it "it initializes the three items in decending order." do
            expect(hanoi.stacks[0]).to eq(["Lar","Me","S"])
        end
    end

    describe "#move" do 
        it "it moves the top item from one stack to another." do
            hanoi.move(0,1)
            expect(hanoi.stacks[0]).to eq(["Lar","Me"])
            expect(hanoi.stacks[1]).to eq(["S"])
        end

        it "only allows an item to be moved to an empty stack or on top of a larger item" do
            hanoi.move(0,1)
            expect{hanoi.move(0,1)}.to raise_error 

        end

        it "it allows an item to be moved on top of a larger item" do
            hanoi.move(0,1)
            hanoi.move(0,2)
            hanoi.move(1,2)
            expect(hanoi.stacks[2]).to eq(["Me","S"])
        end
        
    end

    describe "#win?" do 
        context "when stack 1 or stack 2 contain all items in ascending order" do
            it "should return true" do
                hanoi.move(0,2)
                hanoi.move(0,1)
                hanoi.move(2,1)
                hanoi.move(0,2)
                hanoi.move(1,0)
                hanoi.move(1,2)
                hanoi.move(0,2)
                expect(hanoi.win?).to be true
                
            end
        end
        context "when no stacks contain all items" do
            it "should return false" do
                hanoi.move(0,2)
                hanoi.move(0,1)
                hanoi.move(2,1)
                expect(hanoi.win?).to be false
            end
        end
    end
end

