require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params)
    # ...
    where_line = params.keys.map{|k| "#{k} = ?"}.join(" AND ")
    query = DBConnection.execute(<<-SQL, *params.values)
      SELECT
        *
      FROM
        #{self.table_name}
      WHERE
        #{where_line}
    SQL
    self.parse_all(query)
  end
end

class SQLObject
  # Mixin Searchable here...
  extend Searchable
end
