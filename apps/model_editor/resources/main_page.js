// ==========================================================================
// Project:   ModelEditor - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

// This page describes the main user interface for your application.  
ModelEditor.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'sideView centerView sidePaletteView'.w(),
    
    // topBarView: SC.ToolbarView.design({
    //       childViews: ''.w(),
    //       layout: { top:0, left:0, right:0, height:30 },
    //       anchorLocation: SC.ANCHOR_TOP
    //     }),
    
    sideView: SC.View.design({
      childViews: 'modelListView toolbarView'.w(),
      layout: {left:0, top:0, bottom:0, width:150 },
      
      modelListView: SC.ScrollView.design({
        layout:{left:0, top:0, right:0, bottom:20},
        contentView: SC.SourceListView.design({
          //rowHeight:50,
          exampleView: ModelEditor.PatchedListItemView,
          contentBinding: "ModelEditor.modelDefinitionsController.arrangedObjects",
          selectionBinding: "ModelEditor.modelDefinitionsController.selection",
          contentValueKey: "name",
          canEditContent: NO,
          hasContentIcon: YES,
          contentIconKey: "icon",
          contentUnreadCountKey: "propertyCount",
          actOnSelect: NO
        })
      }),
      
      toolbarView: SC.ToolbarView.design({
        childViews: 'modelAddButton modelDeleteButton saveButton'.w(),
        layout: { bottom:0, left:0, right:0, height:20 },
        anchorLocation: SC.ANCHOR_BOTTOM,

        modelAddButton: SC.ButtonView.design({
          layout: {left:0, top:0, bottom:0, width:18},
          title:"+",
          titleMinWidth:15,
          controlSize: SC.SMALL_CONTROL_SIZE,
          target:"ModelEditor.modelDefinitionsController",
          action:"showCreateModelView",
          isEnabledBinding:"ModelEditor.modelDefinitionsController.canAddContent"
        }),
        modelDeleteButton: SC.ButtonView.design({
          layout: {left:20, top:0, bottom:0, width:18},
          title:"-",
          titleMinWidth:15,
          controlSize: SC.SMALL_CONTROL_SIZE,
          target:"ModelEditor.modelDefinitionController",
          action:"deleteModel",
          isEnabledBinding:"ModelEditor.modelDefinitionController.hasContent"
        }),
        
        saveButton: SC.ButtonView.design({
          layout: {top:0, bottom:0, right:10, width:30},
          title:"Save",
          titleMinWidth:15,
          controlSize: SC.SMALL_CONTROL_SIZE,
          //isEnabledBinding: "ModelEditor.store.changelog",
          //isEnabledBindingDefault: SC.Binding.bool(),
          target:"ModelEditor.modelDefinitionsController",
          action: "saveModels"
        })
      })
    }),
    
    centerView: SC.View.design({
      childViews: 'propertyListView toolbarView'.w(),
      layout: { left:150, top:0, bottom:0, right:150 },
      
      // modelNameView: ModelEditor.PatchedLabelView.design({
      //         layout: { left:0, top:0, height:50, width:200 },
      //         valueBinding: "ModelEditor.modelDefinitionController.name",
      //         tagName: "h1",
      //         isEditable: YES
      //       }),
      propertyListView: SC.ScrollView.design({
        layout: { top:0, left:0, right:0, bottom:20},
        contentView: SC.ListView.design({
          rowHeight:30,
          exampleView: ModelEditor.PatchedListItemView,
          contentBinding: 'ModelEditor.modelPropertiesController.arrangedObjects',
          selectionBinding: 'ModelEditor.modelPropertiesController.selection',
          contentValueKey: "displayName",
          hasContentIcon: YES,
          contentIconKey: "displayIcon",
          canReorderContent: true,
          canEditContent: NO,
          isDropTarget: YES,
          target: "ModelEditor.modelPropertiesController",
          action: "editProperty"
        })
      }),
      
      toolbarView: SC.ToolbarView.design({
        childViews: 'propertyAddButton propertyDeleteButton devButton'.w(),
        layout: { bottom:0, left:0, right:0, height:20 },
        anchorLocation: SC.ANCHOR_BOTTOM,

        propertyAddButton: SC.ButtonView.design({
          layout: {left:0, top:0, bottom:0, width:18},
          title:"+",
          titleMinWidth:15,
          controlSize: SC.SMALL_CONTROL_SIZE,
          target:"ModelEditor.modelPropertiesController",
          action:"addProperty",
          //isEnabledBinding:"ModelEditor.modelPropertiesController.canAddContent"
        }),
        
        propertyDeleteButton: SC.ButtonView.design({
          layout: {left:20, top:0, bottom:0, width:18},
          title:"-",
          titleMinWidth:15,
          controlSize: SC.SMALL_CONTROL_SIZE,
          target:"ModelEditor.modelPropertiesController",
          action:"deleteProperty",
          //isEnabledBinding:"ModelEditor.modelPropertiesController.hasContent"
        }),
        
        devButton: SC.ButtonView.design({
          layout: {right:0, top:0, bottom:0, width:50},
          title: "debug prop",
          titleMinWidth:20,
          controlSize: SC.SMALL_CONTROL_SIZE,
          target: "ModelEditor.modelDefinitionController",
          action: "debugModelDefinition"
        })
      })
    }),
    
    sidePaletteView: SC.View.design({
      childViews: 'propertyPaletteView toolbarView'.w(),
      layout: { top:0, right:0, bottom:0, width:150},
      
      toolbarView: SC.ToolbarView.design({
        childViews: ''.w(),
        layout: { bottom:0, left:0, right:0, height:20 },
        anchorLocation: SC.ANCHOR_BOTTOM,
      }),
      
      propertyPaletteView: SC.ScrollView.design({
        layout: { top:0, left:0, right:0, bottom:20},
        contentView: SC.SourceListView.design({
          contentBinding: "ModelEditor.propertyPaletteController.arrangedObjects",
          contentValueKey: "type",
          hasContentIcon: YES,
          contentIconKey: "icon",
          // isSelectable: NO,
          selectOnMouseDown: YES,
          isEnabledBinding: SC.Binding.from("ModelEditor.modelDefinitionsController.selection").notEmpty()
        })
      })
    })
  })

});
