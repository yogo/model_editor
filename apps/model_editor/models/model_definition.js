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
  childRecordNamespace: ModelEditor.PropertyRecord,
  
  name: SC.Record.attr(String, {isRequired: YES}),
  properties: SC.Record.toMany("ModelEditor.ModelProperty", {nested: YES}),
  
  icon: "sc-icon-folder-16",
  propertyCount: function() {
    return this.getPath('properties.length');
  }.property('properties').cacheable()
}) ;
