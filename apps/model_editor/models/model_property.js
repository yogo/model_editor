// ==========================================================================
// Project:   ModelEditor.ModelProperty
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/

ModelEditor.BasicPropertyConfig = SC.Object.create({
  "Text":     SC.Object.create({
                  type: "Text",
                  icon:static_url('icons/icon-text-16'),
                  options:{}
              }),
  "Decimal":  SC.Object.create({
                  type: "Decimal",
                  icon:static_url('icons/icon-number-16'),
                  options:{}
              }),
  "Integer":  SC.Object.create({
                  type: "Integer",
                  icon:static_url('icons/icon-number-16'),
                  options:{}
              }),
  "TrueFalse":SC.Object.create({
                  type: "TrueFalse",
                  icon:static_url('icons/icon-true_false-16'),
                  options:{}
              }),
  "Date":     SC.Object.create({
                  type: "Date",
                  icon:static_url('icons/icon-date-16'),
                  options:{}
              }),
  "Time":     SC.Object.create({
                  type: "Time",
                  icon:static_url('icons/icon-time-16'),
                  options:{}
              }),
  "DateTime": SC.Object.create({
                  type: "DateTime",
                  icon:static_url('icons/icon-date_time-16'),
                  options:{}
              }),
  "File":     SC.Object.create({
                  type: "File",
                  icon:static_url('icons/icon-file-16'),
                  options:{}
              }),
  "Image":    SC.Object.create({
                  type: "Image",
                  icon:static_url('icons/icon-image-16'),
                  options:{}
              }),
  "RecordLink":SC.Object.create({
                  type: "RecordLink",
                  icon:static_url('icons/icon-record_link-16'),
                  options:{ targetRecord:"", multiple:false }
              }),
  
  "propertyList": function() {
    return [this.Text, this.Integer, this.Decimal, this.TrueFalse, this.Date,
            this.Time, this.DateTime, this.Image, this.File, this.RecordLink];
  }.property('Text','Integer','Decimal','TrueFalse','Date','Time', 'DateTime',
             'Image', 'File', 'RecordLink').cacheable(),
             
  propertySet: function() {
    return SC.Set.create(this.get('propertyList'));
  }.property('propertyList').cacheable(),
  
  propertyNameList: function() {
    return this.get('propertyList').getEach('type');
  }.property('propertyList').cacheable()
});

ModelEditor.ModelPropertyOptions = SC.ChildRecord.extend({
  targetRecord: SC.Record.attr(String),
  multipleRecords:     SC.Record.attr(Boolean)
});

ModelEditor.ModelProperty = SC.ChildRecord.extend(
/** @scope ModelEditor.ModelProperty.prototype */   {
    childRecordNamespace: ModelEditor,
    
    name: SC.Record.attr(String, {isRequired: YES}),
    
    options: SC.ChildRecord.toOne("ModelEditor.ModelPropertyOptions", {nested: true}),
    
    propType: function(key, value) {
      if(value !== undefined) {
        this.beginEditing();
        var attr = this.get('attributes');
        attr['type'] = value;
        this.endEditing();
        return this;
      }
      else {
        var attr = this.get('readOnlyAttributes');
        return attr['type'];
      }
    }.property(),
    
    displayName: function() {
      return this.get('name') + " (" + this.get('propType') + ")";
    }.property('name', 'propType').cacheable(),
    
    displayIcon: function() {
      var propType = this.get('propType');
      return ModelEditor.BasicPropertyConfig.getPath(propType + ".icon") || "sc-icon-bookmark-16";
    }.property('propType').cacheable()
  });

// ModelEditor.PropertyType = SC.Object.extend({
//   typeName: "",
//   icon: "sc-icon-bookmark-16",
//   createProperty: function() {
//     var tname = this.get('typeName');
//     return {
//       type: tname,
//       name: "New " + tname + " property"
//     };
//   }
// });
                             
// ModelEditor.BasicPropertyTypes = [
//   ModelEditor.PropertyType.create({typeName: "Decimal"}),
//   ModelEditor.PropertyType.create({typeName: "Integer"}),
//   ModelEditor.PropertyType.create({typeName: "Text"}),
//   ModelEditor.PropertyType.create({typeName: "TrueFalse"}),
//   ModelEditor.PropertyType.create({typeName: "Date"}),
//   ModelEditor.PropertyType.create({typeName: "DateTime"}),
//   ModelEditor.PropertyType.create({typeName: "Time"}),
//   ModelEditor.PropertyType.create({typeName: "File"}),
//   ModelEditor.PropertyType.create({typeName: "Image"}),
//   ModelEditor.PropertyType.create({
//     typeName: "RecordLink",
//     recordType: "",
//     multipleRecords: false
//   })
// ];



ModelEditor.BasicPropertyTypes = SC.Set.create();
                                    
// ModelEditor.PropertyRecord = SC.Object.create({
//   typeNames: function() {
//     return ModelEditor.BasicPropertyTypes
//       .map(function(p) {return p.type})
//       .sort()
//       .map(function(name) {return {type:name}});
//   }.property().cacheable()
// });

// ModelEditor.BasicPropertyConfig.get('propertyList').forEach(function(typeDef) {
//   SC.Logger.debug(typeDef);
//   //if(!typeDef.icon) typeDef.icon = "sc-icon-bookmark-16";
//   var typeName = typeDef.get('type');
//   if(typeName === "RecordLink") return;
//   
//   // ModelEditor.PropertyRecord[typeName] = SC.ChildRecord.extend({
//   //     name: SC.Record.attr(String, {isRequired: YES}),
//   //   });
//   console.debug(typeDef.icon);
//   ModelEditor.PropertyRecord[typeName] = ModelEditor.ModelProperty.extend({
//     icon: typeDef.get('icon')
//   });
// });
// 
// ModelEditor.PropertyRecord.RecordLink = ModelEditor.ModelProperty.extend({
//   recordType: SC.Record.attr(String),
//   multipleRecords: SC.Record.attr(Boolean, {defaultValue: false}),
//   icon: static_url('icons/icon-record_link-16')
// });


