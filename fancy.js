$(function() {
  // $.ajax('/api/tasks').done(function( data ) {
  //   var categoryDescriptionSet = {};
  //   data.forEach(function (datum) {
  //     if(categoryDescriptionSet[datum.category] == undefined) {
  //       categoryDescriptionSet[datum.category] = [];
  //     }
  //     categoryDescriptionSet[datum.category].push(datum.description);
  //   }); // this should go straight to the DOM not into struct first
  //   $('#task-list').contents().remove();
  //   Object.keys(categoryDescriptionSet).forEach(function (category) {
  //     $('<h2><a href="#">' + category + '</a></h2><div><ul id='+category+'>' ).appendTo('#task-list');// append category description to dom here
  //     categoryDescriptionSet[category].forEach(function (description) {
  //       $('<li>' + description + '</li>').appendTo($('#'+category))
  //       //append list elements to category here.
  //     });
  //     $('</ul></div>').appendTo('#task-list');// close list elements and last div
  //   });
  
  $( "#task-list" ).accordion();
  $( "#task-list li" ).draggable({
    appendTo: "body",
    helper: "clone"
  });
  $( "#dayplan ol" ).droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    accept: ":not(.ui-sortable-helper)",
    drop: function( event, ui ) {
      $( this ).find( ".placeholder" ).remove();
      $( "<li></li>" ).text( ui.draggable.text() ).appendTo( this );
    }
  }).sortable({
    items: "li:not(.placeholder)",
    sort: function() {
      // gets added unintentionally by droppable interacting with sortable
      // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
      $( this ).removeClass( "ui-state-default" );
    }
  });
  // });
});
