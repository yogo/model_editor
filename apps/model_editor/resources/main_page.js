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
    defaultResponder: ModelEditor,
    
    childViews: 'mainView'.w(),
    
    mainView: SC.ContainerView.design({
      // layout: {left:0, right:0, top:40, bottom:0},
      nowShowingBinding: 'ModelEditor.currentScene'
    }),
  }),
    

  
  
  
  modelsLoading: SC.View.design({
    childViews: "labelView progressView".w(),
    
    labelView: SC.LabelView.design({
      layout: { centerX:0, centerY:0, height:24, width:200 },
      textAlign: SC.ALIGN_CENTER,
      controlSize: SC.HUGE_CONTROL_SIZE,
      //classNames: "center-label",
      controlSize: SC.LARGE_CONTROL_SIZE,
      fontWeight: SC.BOLD_WEIGHT,
      value: "Loading...".loc()
    }),
    progressView: SC.ProgressView.design({
      layout: { centerX:0, centerY:30, width:200, height:20},
      isIndeterminate: YES,
      isRunning: YES
    })
  })
  
  

});
