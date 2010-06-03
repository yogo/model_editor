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
    commitRecordsAutomatically: YES
  }).from('ModelEditor.ModelDataSource'),
  
  store: function(){
    return this.coreStore.chain();
  }.property('coreStore').cacheable(),
  
  models: function(){
    //if(!this.get('yogoConfig.modelsURL')) return null;
    return this.get('store').find(ModelEditor.MODELS_QUERY);
  }.property('store','yogoConfig.modelsURL').cacheable(),
  
  // TODO: Add global constants or singleton objects needed by your app here.
  yogoConfig: SC.Object.create({
    baseURL: null,
    projectId: null,
    modelsURL: function() {
      if(!this.get('baseURL') || !this.get('projectId')) return null;
      return this.get('baseURL') + '/' + this.get('projectId') + '/yogo_models'
    }.property('baseURL', 'projectId').cacheable(),
  }),
  
  currentScene: null,
  modelDetailView: null,
  
  dataShouldBeReloaded: function() {
    this.get('store').reset();
    this.get('models').refresh();
  },
  
  changesShouldBeSaved: function() {
    ModelEditor.get('store').commitChanges(true);
    ModelEditor.get('store').reset();
    ModelEditor.get('coreStore').commitRecords();
  },
  
  changesShouldBeDiscarded: function() {
    ModelEditor.get('store').discardChanges();
  }
}) ;
