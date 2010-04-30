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
  
  store: SC.Store.create({
    commitRecordsAutomatically: NO
  }).from('ModelEditor.ModelDataSource'),
  
  bufferedStore: function() {
    return this.store.chain();
  }.property('store').cacheable(),
  
  // TODO: Add global constants or singleton objects needed by your app here.
  yogoConfig: SC.Object.create({
    baseURL: "/projects",
    projectId: "1",
    modelsURL: function() {
      return this.get('baseURL') + '/' + this.get('projectId') + '/yogo_models'
    }.property('baseURL', 'projectId').cacheable(),
  })
}) ;
