// ==========================================================================
// Project:   ModelEditor.ModelDataSource
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

sc_require('models/model_definition');
ModelEditor.MODELS_QUERY = SC.Query.local(ModelEditor.ModelDefinition, {
  orderBy: 'name'
});

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/
ModelEditor.ModelDataSource = SC.DataSource.extend(
/** @scope ModelEditor.ModelDataSource.prototype */ {
  
  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query) {
    var modelsURL = ModelEditor.getPath('yogoConfig.modelsURL');
    if(query === ModelEditor.MODELS_QUERY) {
      var request =SC.Request.getUrl(modelsURL)
        .notify(this, 'didFetchModels', store, query);
      request.header('Accept', "application/json");
      request.json();
      request.send()
      return YES;
    }

    return NO ; // return YES if you handled the query
  },
  
  didFetchModels: function(response, store, query) {
    if(SC.ok(response)) {
      console.debug(response.get('body'));
      store.loadRecords(ModelEditor.ModelDefinition, response.get('body').models);
      store.dataSourceDidFetchQuery(query);
    }
    else {
      store.dataSourceDidErrorQuery(query, response);
    }
  },

  // ..........................................................
  // RECORD SUPPORT
  // 
  
  retrieveRecord: function(store, storeKey) {
    
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  createRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  updateRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return NO ; // return YES if you handled the storeKey
  }
  
}) ;
