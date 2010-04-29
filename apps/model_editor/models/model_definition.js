// ==========================================================================
// Project:   ModelEditor.ModelDefinition
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
ModelEditor.ModelDefinition = SC.Record.extend(
/** @scope ModelEditor.ModelDefinition.prototype */ {
  //childRecordNamespace: ModelEditor,
  
  properties: SC.Record.toMany("ModelEditor.ModelProperty", {nested: YES}),
  
  name: function() {
    var id = this.get('id');
    return id.humanize().titleize();
  }.property('id').cacheable(),
  
  icon: "sc-icon-folder-16",
  propertyCount: function() {
    return this.getPath('properties.length');
  }.property('properties').cacheable()
}) ;
