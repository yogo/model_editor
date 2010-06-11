# ===========================================================================
# Project:   Yogo
# Copyright: ©2010 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore, :load_fixtures => true
config :model_editor, :required => [:sproutcore, :scui], :load_fixtures => true

proxy "/projects", :to => "localhost:3000"