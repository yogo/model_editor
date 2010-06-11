// ==========================================================================
// Project:   ModelEditor.propertyBrowser
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

// This page describes a part of the interface for your application.
ModelEditor.propertyBrowser = SC.Page.design({

  // Add your views here.  Ex:
  
  mainView: SC.SplitView.design({
    dividerThickness: 1,
    defaultThickness: 200,
    autoresizeBehavior: SC.RESIZE_TOP_LEFT,
    canCollapseViews: NO,
    acceptsFirstResponder: YES,
    
    topLeftView: SC.View.design({
      childViews: "propertyList bottomBar".w(),
    
      propertyList: SC.ScrollView.design({
        layout:{bottom:25},
        hasHorizontalScroller: NO,
    
        contentView: SC.ListView.design({
          rowHeight:30,
          exampleView: ModelEditor.PropertyListItemView,
          contentBinding: 'ModelEditor.modelPropertiesController.arrangedObjects',
          selectionBinding: 'ModelEditor.modelPropertiesController.selection',
          contentValueKey: "name",
          hasContentIcon: YES,
          contentIconKey: "displayIcon",
          canReorderContent: YES,
          canEditContent: YES,
          canDeleteContent: YES,
          isDropTarget: YES,
          acceptsFirstResponder: YES
          //action: "editProperty"
        })
      }),
    
      bottomBar: SC.ToolbarView.design({
        anchorLocation:SC.ANCHOR_BOTTOM,
        layout: {height:25},
        childViews: "addButton removeButton".w(),
      
        addButton: SC.ButtonView.design({
          layout: {left:0, top:0, bottom:0, width:25},
          classNames: "toolbar-button-small".w(),
          titleMinWidth:0,
          controlSize: SC.SMALL_CONTROL_SIZE,
          title: "+",
          isEnabledBinding: SC.Binding.bool("ModelEditor.modelDefinitionController.content"),
          action: "addPropertyMenu",
          keyEquivalent: "ctrl_p",
          nextKeyView: SC.outlet('page.mainView.bottomRightView.propertyEditor')
          
        }),
        
        removeButton: SC.ButtonView.design({
          layout: {left:25, top:0, bottom:0, width:25},
          classNames: "toolbar-button-small".w(),
          titleMinWidth:0,
          controlSize: SC.SMALL_CONTROL_SIZE,
          title: "-",
          // icon: static_url('icons/icon-delete-16.png'),
          isEnabledBinding: SC.Binding.bool('ModelEditor.modelDefinitionController.content'),
          action: "removeProperty"
        }),
      })
    }),
    
    bottomRightView: SC.View.design({
      childViews: "propertyEditor bottomBar".w(),
      
      backgroundColor: '#C5C8D7',
      
      propertyEditor: SC.ScrollView.design({
        layout: {bottom:25},
        contentViewBinding: 'ModelEditor.propertyEditor.mainView'
      }),
      
      bottomBar: SC.ToolbarView.design({
        layout: {height:25},
        anchorLocation: SC.ANCHOR_BOTTOM,
        childViews: "resizeThumb".w(),
      
        resizeThumb: SC.ThumbView.design({
          layout: {left:0, width:25, centerY:0, height:25},
          classNames: 'thumb-view'.w()
        })
      })
    })
  })
});
