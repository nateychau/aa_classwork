class AttrAccessorObject
  def self.my_attr_accessor(*names)
    # ...
    names.each do |var|
      define_method(var) do 
        instance_variable_get("@#{var}")
      end
      define_method("#{var}=") do |arg|
        instance_variable_set("@#{var}", arg)
      end
    end
  end
end
