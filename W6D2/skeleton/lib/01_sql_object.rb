require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    # ...
    if @columns
      @columns 
    else
      query = DBConnection.execute2(<<-SQL)
        SELECT
          *
        FROM
          #{self.table_name}
      SQL
      @columns = query[0].map do |col|
        :"#{col}"
      end
    end
  end

  def self.finalize!
    self.columns.each do |col|
      define_method(col) do
        attributes[:"#{col}"]
      end
      define_method("#{col}=") do |arg|
        attributes[:"#{col}"] = arg
      end
    end
  end

  def self.table_name=(table_name)
    # ...
    @table_name = table_name 
  end

  def self.table_name
    # ...
    @table_name || self.to_s.tableize
  end

  def self.all
    # ...
    query = DBConnection.execute(<<-SQL)
      SELECT
        *
      FROM
        "#{self.table_name}" 
    SQL
    self.parse_all(query)
  end

  def self.parse_all(results)
    # ...
    results.map do |instance|
      self.new(instance)
    end
  end

  def self.find(id)
    # ...
    query = DBConnection.execute(<<-SQL, id)
      SELECT
        *
      FROM
      "#{self.table_name}" 
      WHERE
        id = ?
    SQL
    query.empty? ? nil : self.new(query.first)
  end

  def initialize(params = {})
    # ...
    params.each do |attr_name,val|
      sym = :"#{attr_name}"
      raise "unknown attribute '#{sym}'" unless self.class.columns.include?(sym)
      self.send("#{sym}=", val) 
    end
  end

  def attributes
    @attributes ||= {}
    # ...
  end

  def attribute_values
    # ...
    self.class.columns.map do |col|
      self.send(col)
    end
  end

  def insert
    # ...
    col_names = self.class.columns.join(",")
    question_marks = (["?"]*(self.class.columns.length)).join(",")
    DBConnection.execute(<<-SQL, *self.attribute_values)
      INSERT INTO
        #{self.class.table_name} (#{col_names})
      VALUES
        (#{question_marks})
    SQL
    self.id = DBConnection.last_insert_row_id
  end

  def update
    # ...
    set_str = self.class.columns.map{|col| "#{col} = ?"}.join(",")
    DBConnection.execute(<<-SQL, *self.attribute_values, self.id)
      UPDATE
        #{self.class.table_name}
      SET
        #{set_str}
      WHERE
        id = ?
    SQL
  end

  def save
    # ...
    id.nil? ? insert : update
  end
end
