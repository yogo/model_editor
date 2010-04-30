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
    
    if(SC.kindOf(store.recordTypeFor(storeKey), ModelEditor.ModelDefinition)) {
      var modelId = store.idFor(storeKey);
      var modelUrl = ModelEditor.getPath('yogoConfig.modelsURL') + '/' + modelId;
      
      var request = SC.Request.getUrl(url);
      request.header("Accept","application/json");
      request.json();
      request.notify(this, 'didRetrieveModel', store, storeKey);
      request.send();
      return YES;
    }
    
    return NO ; // return YES if you handled the storeKey
  },
  
  didRetrieveModel: function(response, store, storeKey) {
    if(SC.ok(response)) {
      var dataHash = response.get('body').Model;
      store.dataSourceDidComplete(storeKey, dataHash);
    }
    else {
      store.dataSourceDidError(storeKey, response);
    }
  },
  
  createRecord: function(store, storeKey) {
    
    if(SC.kindOf(store.recordTypeFor(storeKey), ModelEditor.ModelDefinition)) {
      var modelsUrl = ModelEditor.getPath('yogoConfig.modelsURL');
      var request = SC.Request.postUrl(modelsUrl);
      request.header('Content-Type','application/json');
      request.header('Accept', 'application/json')
      request.json();
      request.notify(this, 'didCreateModel', store, storeKey);
      console.debug('createRecord: sending');
      request.send({"Model": store.readDataHash(storeKey) });
      return YES;
    }
    
    return NO ; // return YES if you handled the storeKey
  },
  
  didCreateModel: function(response, store, storeKey) {
    console.debug('didCreateModel');
    if(SC.ok(response)) {
      var dataHash = response.get('body').Model;
      store.dataSourceDidComplete(storeKey, dataHash);
    }
    else {
      store.dataSourceDidError(storeKey, response);
    }
  },
  
  updateRecord: function(store, storeKey) {
    
    if(SC.kindOf(store.recordTypeFor(storeKey), ModelEditor.ModelDefinition)) {
      var modelId = store.idFor(storeKey);
      var modelUrl = ModelEditor.getPath('yogoConfig.modelsURL') + '/' + modelId;
      
      var request = SC.Request.putUrl(modelUrl);
      request.json();
      request.header('Content-Type','application/json');
      request.header('Accept', 'application/json');
      request.notify(this, 'didUpdateModel', store, storeKey);
      request.send({"Model": store.readDataHash(storeKey)});
      return YES;
    }

    return NO ; // return YES if you handled the storeKey
  },
  
  didUpdateModel: function(response, store, storeKey) {
    if(SC.ok(response)) {
      var data = response.get('body');
      data = data && data.Model;
      store.dataSourceDidComplete(storeKey, data);
    }
    else {
      store.dataSourceDidError(storeKey);
    }
  },
  
  destroyRecord: function(store, storeKey) {
    
    if(SC.kindOf(store.recordTypeFor(storeKey), ModelEditor.ModelDefinition)) {
      var modelId = store.idFor(storeKey);
      var modelUrl = ModelEditor.getPath('yogoConfig.modelsURL') + '/' + modelId;
      
      var request = SC.Request.deleteUrl(modelUrl);
      request.json();
      request.header('Content-Type','application/json');
      request.header('Accept', 'application/json');
      request.notify(this, 'didDestroyModel', store, storeKey);
      request.send();
      return YES;
    }
    
    return NO ; // return YES if you handled the storeKey
  },
  
  didDestroyModel: function(response, store, storeKey) {
    if(SC.ok(response)) {
      store.dataSourceDidDestroy(storeKey);
    }
    else {
      store.dataSourceDidError(response);
    }
  }
  
}) ;
