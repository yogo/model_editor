// ==========================================================================
// Project:   ModelEditor
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
ModelEditor = SC.Application.create(
  /** @scope ModelEditor.prototype */ {

  NAMESPACE: 'ModelEditor',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  //store: SC.Store.create().from(SC.Record.fixtures)
  
  coreStore: SC.Store.create({
    commitRecordsAutomatically: NO
  }).from('ModelEditor.ModelDataSource'),
  
  store: function(){
    return this.coreStore;
  }.property('coreStore').cacheable(),
  
  models: function(){
    return this.get('store').find(ModelEditor.ModelDefinition);
  }.property('store', 'yogoConfig*modelsURL').cacheable(),
  
  // TODO: Add global constants or singleton objects needed by your app here.
  yogoConfig: SC.Object.create({
    baseURL: null,
    projectId: null,
    modelsURL: function() {
      if(!this.get('baseURL') || !this.get('projectId')) return '';
      return this.get('baseURL') + '/' + this.get('projectId') + '/yogo_models'
    }.property('baseURL', 'projectId').cacheable(),
    fromUrl: "../"
  }),
  
  currentScene: null,
  modelDetailView: null,
  
  // EVENTS
  dataShouldBeReloaded: function() {
    //this.get('store').reset();
    this.get('models').refresh();
    return YES;
  },
  
  changesShouldBeSaved: function() {
    SC.Logger.info('changesShouldBeSaved');
    //ModelEditor.get('store').commitChanges();
    //ModelEditor.get('store').reset();
    ModelEditor.get('coreStore').commitRecords();
    return YES;
  },
  
  changesShouldBeDiscarded: function() {
    SC.Logger.info('changesShouldBeDiscarded');
    ModelEditor.get('store').discardChanges();
    return YES;
  },
  
  
  // ROUTES
  mainRouteHandler: function(args) {
    SC.Logger.info(arguments);
    ModelEditor.makeFirstResponder(ModelEditor.START);
    ModelEditor.yogoConfig.set('baseURL', args.project_url);
    ModelEditor.yogoConfig.set('projectId', args.project_id);
    ModelEditor.sendAction('dataShouldBeReloaded');
  }
}) ;
