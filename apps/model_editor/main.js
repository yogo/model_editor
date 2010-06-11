// ==========================================================================
// Project:   ModelEditor
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
ModelEditor.main = function main() {
  
  SC.CAPTURE_BACKSPACE_KEY = YES;

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  ModelEditor.getPath('mainPage.mainPane').append() ;
  
  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: ModelEditor.contactsController.set('content',ModelEditor.contacts);
  // if(window.self !== window.top) {
  //     // We're embedded in an iframe, and should wait for 
  //     // the parent page to set the datastore url configs
  //     // and invoke the ModelEditor.mainDataLoad();
  //   }
  //   else {
  //     // We're running in standalone mode!
  //     ModelEditor.mainDataLoad('/projects', '1');
  //   }
  
  SC.routes.add(':project_url/:project_id', ModelEditor, 'mainRouteHandler');
  SC.routes.add(':project_url/:project_id&from=:originalLocation', ModelEditor, 'mainRouteHandler');
  ModelEditor.makeFirstResponder(ModelEditor.START);
  
  //ModelEditor.propertyPaletteController.set('content', ModelEditor.BasicPropertyTypes);

} ;

ModelEditor.mainDataLoad = function(baseUrl, projectId) {
  ModelEditor.yogoConfig.set('baseURL', baseUrl);
  ModelEditor.yogoConfig.set('projectId', projectId);
  //ModelEditor.modelDefinitionsController.reload();
  ModelEditor.makeFirstResponder(ModelEditor.START);
};

function main() { ModelEditor.main(); }
