require 'sqlite3'
require 'singleton'

class QuestionsDBConnections < SQLite3::Database
    include Singleton

    def initialize
        super('questions.db')
        self.type_translation = true
        self.results_as_hash = true 
    end

end

class Users
    
    def self.all
        current_info = QuestionsDBConnections.instance.execute('SELECT * FROM users')
        current_info.map{|data| Users.new(data)}
    end

    def initialize(parts)
        @id = parts['id']
        @fname = parts['fname']
        @lname = parts ['lname']
    end

    def self.find_by_id(id)
        user = QuestionsDBConnections.instance.execute(<<-SQL, id)
        SELECT 
            *
        FROM
            users
        WHERE
            id = ?
        SQL
        Users.new(*user)
    end


end

class Questions 

    def self.all
        current_info = QuestionsDBConnections.instance.execute('SELECT * FROM questions')
        current_info.map{|data| Questions.new(data)}
    end

    def initialize(parts)
        @id = parts['id']
        @title = parts['title']
        @body = parts['body']
        @author_id = parts['author_id']
    end

end

class QuestionFollows
    def self.all
        current_info = QuestionsDBConnections.instance.execute('SELECT * FROM question_follows')
        current_info.map{|data| QuestionFollows.new(data)}
    end

    def initialize(parts)
        @id = parts['id']
        @question_id = parts['question_id']
        @user_id = parts['user_id']
       
    end
end

class Replies
    def self.all
        current_info = QuestionsDBConnections.instance.execute('SELECT * FROM replies')
        current_info.map{|data| Replies.new(data)}
    end

    def initialize(parts)
        @id = parts['id']
        @question_id = parts['question_id']
        @body = parts['body']
        @parent_reply_id = parts['parent_reply_id']
        @user_id = parts['user_id']
       
    end
end

class QuestionLikes

    def self.all
        current_info = QuestionsDBConnections.instance.execute('SELECT * FROM question_likes')
        current_info.map{|data| QuestionLikes.new(data)}
    end

    def initialize(parts)
        @id = parts['id']
        @question_id = parts['question_id']
        @user_id = parts['user_id']  
    end

end