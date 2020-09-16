require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res)
    @req = req 
    @res = res 
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response
  end

  # Set the response status code and header
  def redirect_to(url)
    raise 'double render' if already_built_response?
    @res.location = url 
    @res.status = 302
    @already_built_response = true 
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    raise 'double render' if already_built_response?
    @res.write(content) 
    @res.content_type = content_type 
    @already_built_response = true 

  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    controller_name = self.class.to_s.underscore
    path_name = File.dirname("views/#{controller_name}/#{template_name}.html.erb")
    template_path = File.join(path_name, "#{template_name}.html.erb")
    template_file = File.read(template_path)
    template_erb = ERB.new(template_file)
    result = template_erb.result(binding)
    render_content(result, "text/html")
  end

  # method exposing a `Session` object
  def session
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
  end
end

