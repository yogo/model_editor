// ==========================================================================
// Project:   ModelEditor.propertyEditor
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

// This page describes a part of the interface for your application.
ModelEditor.propertyEditor = SC.Page.design({

  // Add your views here.  Ex:
  
  mainView: SC.View.design({
    childViews: "titleBar basicEditor optionsBar optionsEditor".w(),
    
    titleBar: SC.ToolbarView.design({
      layout: {height:20},
      childViews: "titleLabel".w(),
      
      titleLabel: SC.LabelView.design({
        value: "Property"
      })
    }),
    
    basicEditor: ModelEditor.PropertyEditView.design({
      layout: {top:20, height:75},
    }),
    
    optionsBar: SC.ToolbarView.design({
      layout: {top:95, height:20},
      childViews: "titleLabel".w(),
      
      titleLabel: SC.LabelView.design({
        value: "Options"
      })
    }),
    
    optionsEditor: SC.View.design({
      layout: {top:105}
      
    })
  })

});
